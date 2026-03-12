import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SKILLS_3D } from '../utils/constants'

interface Skill {
  name: string
  logo: string
}

interface SkillNode {
  sprite: THREE.Sprite
  skill: Skill
}

function getPointOnSphere(index: number, total: number, radius: number): THREE.Vector3 {
  const phi = Math.acos(-1 + (2 * index) / total)
  const theta = Math.sqrt(total * Math.PI) * phi
  return new THREE.Vector3(
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi)
  )
}

function loadIconTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const size = 128
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, size, size)
      resolve(new THREE.CanvasTexture(canvas))
    }
    img.onerror = () => {
      const size = 128
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#3b82f6'
      ctx.fillRect(0, 0, size, size)
      ctx.fillStyle = 'white'
      ctx.font = 'bold 56px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(url.charAt(0).toUpperCase(), size / 2, size / 2)
      resolve(new THREE.CanvasTexture(canvas))
    }
    img.src = url
  })
}

const TechGlobe = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const W = container.clientWidth
    const H = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 3.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const rotGroup = new THREE.Group()
    scene.add(rotGroup)

    const nodes: SkillNode[] = []
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const loadAll = async () => {
      for (let i = 0; i < SKILLS_3D.length; i++) {
        const skill: Skill = SKILLS_3D[i]
        const texture = await loadIconTexture(skill.logo)

        const mat = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
        })
        const sprite = new THREE.Sprite(mat)
        const pos = getPointOnSphere(i, SKILLS_3D.length, 1.4)
        sprite.position.copy(pos)
        sprite.scale.set(0.32, 0.32, 0.32)
        sprite.userData = { skill }
        rotGroup.add(sprite)
        nodes.push({ sprite, skill })
      }
    }
    loadAll()

    let isDragging = false
    let prevMouse = { x: 0, y: 0 }
    let rotVelX = 0.0002
    let rotVelY = 0.0018

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / W) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / H) * 2 + 1

      if (isDragging) {
        const dx = e.clientX - prevMouse.x
        const dy = e.clientY - prevMouse.y
        rotGroup.rotation.y += dx * 0.005
        rotGroup.rotation.x += dy * 0.005
        rotVelX = dy * 0.0003
        rotVelY = dx * 0.0003
        prevMouse = { x: e.clientX, y: e.clientY }
      }

      raycaster.setFromCamera(mouse, camera)
      const sprites = nodes.map((n) => n.sprite)
      const hits = raycaster.intersectObjects(sprites)

      if (hits.length > 0) {
        const hit = hits[0].object as THREE.Sprite
        hit.scale.set(0.46, 0.46, 0.46)
        const node = nodes.find((n) => n.sprite === hit)
        container.style.cursor = 'pointer'
        if (tooltipRef.current && node) {
          const rect = container.getBoundingClientRect()
          tooltipRef.current.style.opacity = '1'
          tooltipRef.current.textContent = node.skill.name
          tooltipRef.current.style.left = `${e.clientX - rect.left + 14}px`
          tooltipRef.current.style.top = `${e.clientY - rect.top - 12}px`
        }
      } else {
        container.style.cursor = 'grab'
        if (tooltipRef.current) tooltipRef.current.style.opacity = '0'
      }
    }

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      prevMouse = { x: e.clientX, y: e.clientY }
      container.style.cursor = 'grabbing'
    }

    const onMouseUp = () => {
      isDragging = false
      container.style.cursor = 'grab'
    }

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)

      if (!isDragging) {
        rotGroup.rotation.y += rotVelY
        rotGroup.rotation.x += rotVelX
        rotVelY *= 0.9995
        rotVelX *= 0.9995
        if (Math.abs(rotVelY) < 0.0008) rotVelY = 0.0018
      }

      nodes.forEach(({ sprite }) => {
        const worldPos = new THREE.Vector3()
        sprite.getWorldPosition(worldPos)
        const t = (worldPos.z + 1.4) / 2.8
        const opacity = 0.2 + t * 0.8
        ;(sprite.material as THREE.SpriteMaterial).opacity = opacity
        const scale = 0.26 + t * 0.08
        sprite.scale.set(scale, scale, scale)
      })

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
      <h3 className="text-2xl font-bold mb-4 text-foreground text-center">Skills & Tools</h3>
      <div className="relative w-full" style={{ height: '400px' }}>
        <div
          ref={mountRef}
          className="w-full h-full rounded-2xl overflow-hidden"
          style={{ cursor: 'grab' }}
        />
        <div
          ref={tooltipRef}
          className="pointer-events-none absolute px-3 py-1 rounded-lg text-xs font-bold text-white"
          style={{
            background: 'rgba(15,23,42,0.9)',
            backdropFilter: 'blur(8px)',
            opacity: 0,
            transition: 'opacity 0.12s',
            zIndex: 10,
            border: '1px solid rgba(96,165,250,0.35)',
            boxShadow: '0 0 10px rgba(59,130,246,0.4)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="animate-slideUp">
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I'm Pawan Kalyan, a Frontend Developer who turns complex problems into clean,
              intuitive interfaces. With hands-on production experience building scalable web
              applications, I specialize in React.js, TypeScript, and modern frontend architectures
              that perform at scale.
            </p>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I've shipped enterprise-grade solutions — from drag-and-drop ticketing systems to
              interactive analytics dashboards — with a sharp focus on performance, pixel-perfect
              design, and seamless user experience. I don't just build UIs; I engineer experiences
              that users actually enjoy.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              B.Sc. in Computer Science · Expanding into full-stack with backend technologies ·
              Obsessed with clean code, fast interfaces, and always shipping something new.
            </p>
          </div>
          <TechGlobe />
        </div>
      </div>
    </section>
  )
}