import { education } from "../utils/constants"

const certifications = [
  {
    title: 'Python Development Internship',
    org: 'Main Flow & Technologies Pvt. Ltd.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#0288d1" d="M9.86 2A2.86 2.86 0 0 0 7 4.86v1.68h4.29c.39 0 .71.57.71.96H4.86A2.86 2.86 0 0 0 2 10.36v3.781a2.86 2.86 0 0 0 2.86 2.86h1.18v-2.68a2.85 2.85 0 0 1 2.85-2.86h5.25c1.58 0 2.86-1.271 2.86-2.851V4.86A2.86 2.86 0 0 0 14.14 2zm-.72 1.61c.4 0 .72.12.72.71s-.32.891-.72.891c-.39 0-.71-.3-.71-.89s.32-.711.71-.711"/><path fill="#fdd835" d="M17.959 7v2.68a2.85 2.85 0 0 1-2.85 2.859H9.86A2.85 2.85 0 0 0 7 15.389v3.75a2.86 2.86 0 0 0 2.86 2.86h4.28A2.86 2.86 0 0 0 17 19.14v-1.68h-4.291c-.39 0-.709-.57-.709-.96h7.14A2.86 2.86 0 0 0 22 13.64V9.86A2.86 2.86 0 0 0 19.14 7zM8.32 11.513l-.004.004l.038-.004zm6.54 7.276c.39 0 .71.3.71.89a.71.71 0 0 1-.71.71c-.4 0-.72-.12-.72-.71s.32-.89.72-.89"/></svg>`,
  },
  {
    title: 'Web Designing',
    org: 'BIRED.org',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M3.929 3.91a.81.81 0 0 0 .77-.77a.84.84 0 0 0-.85-.79a.78.78 0 0 0-.73.85a.76.76 0 0 0 .81.71M7.8 3.14a.84.84 0 0 0-.8-.79a.78.78 0 0 0-.73.85a.76.76 0 0 0 .73.71a.82.82 0 0 0 .8-.77m2.97 0a.82.82 0 0 0-.84-.79a.78.78 0 0 0-.73.85a.76.76 0 0 0 .8.71a.81.81 0 0 0 .77-.77"/><path fill="currentColor" d="M22.42 5c-.66 0-1.33 0-2-.06c-1.57-.1-3.13-.28-4.69-.38c-1.38-.08-2.77-.14-4.17-.13s-2.77.07-4.15.14s-2.86.16-4.281.43q-.96.162-1.9.42q.033-1.599.27-3.18a.33.33 0 0 0-.25-.38a.33.33 0 0 0-.38.25a45 45 0 0 0-.76 7.43c0 1-.08 2.12-.1 3.19s0 2.15 0 3.18c.03 2.236.173 4.47.43 6.69a2 2 0 0 0 .24.89a.28.28 0 0 0 .4 0a.3.3 0 0 0 0-.37c-.1 0-.06-.3-.08-.59c-.09-1.19 0-3.72 0-6.63c0-1.42 0-2.94.06-4.44v-3c0-1 0-1.71.06-2.49q.99-.228 2-.34c1.41-.15 2.84-.17 4.22-.18s2.75 0 4.13 0h4.12c1.56 0 3.13.13 4.7.15h2a.31.31 0 0 0 .31-.32a.32.32 0 0 0-.18-.28"/><path fill="currentColor" d="M24 17.68c0-5.08-.2-11.48-.16-12.45c.044-.668.01-1.34-.1-2a3.8 3.8 0 0 0-.55-1.37a2.72 2.72 0 0 0-1.69-1a22 22 0 0 0-3.89-.22C16 .56 14.36.48 12.74.45S9.5.41 7.87.46c-1.295 0-2.588.088-3.871.26a11 11 0 0 0-2.52.64a.29.29 0 0 0-.17.37a.28.28 0 0 0 .37.16a10.3 10.3 0 0 1 2.41-.54a30 30 0 0 1 3.76-.13c1.3 0 2.59 0 3.87.1c1.94.08 3.85.21 5.8.37c.77.06 2.09-.09 3.22.06a2.06 2.06 0 0 1 1.52.69c.197.304.33.644.39 1c.104.587.137 1.185.1 1.78c0 1 .29 7.39.45 12.49c.07 2.21.11 4.18.08 5.331a.34.34 0 0 0 .31.33a.32.32 0 0 0 .33-.31c.08-1.18.08-3.15.08-5.38"/><path fill="currentColor" d="M15.37 9.94h1.78c.25 0 .51 0 .76-.06l.75-.09c.6-.08 1.18-.18 1.76-.23a.32.32 0 0 0 0-.64a18 18 0 0 0-1.84-.14h-.78a5 5 0 0 0-.78.11q-.902.197-1.77.51a.28.28 0 0 0-.22.33a.28.28 0 0 0 .34.21m5.24 7.56a18 18 0 0 0-1.83-.14h-.79a5 5 0 0 0-.78.11q-.902.198-1.77.51a.28.28 0 0 0-.22.33a.26.26 0 0 0 .33.22h1.78c.26 0 .51 0 .76-.06s.5-.05.75-.09c.6-.08 1.18-.18 1.76-.23a.33.33 0 0 0 .308-.445a.32.32 0 0 0-.298-.204m-3.5-4.891c.25 0 .49 0 .74-.06s.5-.06.74-.1c.59-.09 1.17-.22 1.75-.33a.33.33 0 0 0 .29-.35a.34.34 0 0 0-.36-.29h-2.52q-.385.033-.76.11q-.88.198-1.73.5a.29.29 0 0 0-.191.434a.27.27 0 0 0 .29.116c.58-.03 1.17-.01 1.75-.03m3.351 7.5h-2.54a7 7 0 0 0-.75.11q-.886.199-1.74.5a.282.282 0 0 0-.171.437a.28.28 0 0 0 .29.114h1.74c.25 0 .49 0 .74-.06s.5-.06.75-.1c.58-.09 1.15-.22 1.73-.33a.32.32 0 0 0 .29-.35a.31.31 0 0 0-.34-.32M3.689 14.25a.31.31 0 0 0 .31-.32c.06-.42.13-.81.18-1.23a4 4 0 0 0 0-.52v-.51c0-.42-.1-.81-.13-1.22a.29.29 0 0 0-.24-.32a.28.28 0 0 0-.32.25a7.6 7.6 0 0 0-.34 1.24q-.022.27 0 .54q-.015.27 0 .54c.05.42.12.82.2 1.24a.31.31 0 0 0 .34.31m.41 4.83c.05-.41.12-.8.18-1.22v-.52q.015-.255 0-.51c0-.42-.08-.82-.09-1.23a.3.3 0 0 0-.19-.33a.29.29 0 0 0-.32.24a9 9 0 0 0-.38 1.24a3.3 3.3 0 0 0 0 .55q-.015.276 0 .55c0 .43.12.84.2 1.26a.33.33 0 0 0 .34.31a.32.32 0 0 0 .26-.34m8.461-2.93a.32.32 0 0 0-.32-.32a.34.34 0 0 0-.32.33c-.05.36-.12.7-.15 1.06v.9c.06.35.18.67.25 1a.27.27 0 0 0 .161.268a.29.29 0 0 0 .398-.248q.14-.528.22-1.07a2.4 2.4 0 0 0 0-.46a2.3 2.3 0 0 0-.05-.45c-.03-.33-.12-.66-.19-1.01m-.809-5.54c0 .39-.1.78-.13 1.18v.5q-.015.255 0 .51q.113.608.29 1.2a.29.29 0 0 0 .408.244a.28.28 0 0 0 .161-.274c0-.4.15-.78.19-1.18v-.51q.023-.255 0-.51a10 10 0 0 0-.24-1.2a.32.32 0 0 0-.35-.3a.33.33 0 0 0-.33.34m-.519-1.78l.19.32a.27.27 0 0 0 .35.18A.28.28 0 0 0 12 9a4 4 0 0 0-.09-.58a1.3 1.3 0 0 1-.15-.32a1.42 1.42 0 0 1-.83-.54a1.6 1.6 0 0 1-.58 0c-.4 0-.8.15-1.12.16a.32.32 0 0 0-.293.516a.33.33 0 0 0 .212.124l2 .39a1 1 0 0 1 .08.08m1.221 11.44a.29.29 0 0 0-.29.28q-.055.46-.16.91a1.3 1.3 0 0 1-.32.62a.76.76 0 0 1-.32.22a4 4 0 0 1-.55.19q-.66.141-1.33.21a.321.321 0 0 0-.347.451a.32.32 0 0 0 .346.18a5.9 5.9 0 0 0 2.11 0a1.72 1.72 0 0 0 1-.64a2.2 2.2 0 0 0 .28-.94q.005-.61-.1-1.21a.28.28 0 0 0-.32-.27M7.42 7.75a11 11 0 0 0-1.33-.31a2.7 2.7 0 0 0-1 .09A1.77 1.77 0 0 0 3.8 8.8a.32.32 0 0 0 .2.42a.32.32 0 0 0 .39-.22a1 1 0 0 1 .66-.44a2.4 2.4 0 0 1 .4-.06c.21 0 .44 0 .67-.06l1.28-.13A.28.28 0 0 0 7.69 8a.27.27 0 0 0-.27-.25m-.04 14.92c-.48 0-1.19-.06-1.85-.17q-.306-.029-.59-.14a1 1 0 0 1-.3-.14a1 1 0 0 1-.2-.43a6 6 0 0 1-.13-.74a.34.34 0 0 0-.31-.31a.32.32 0 0 0-.31.33a6 6 0 0 0 0 1.19c.028.25.129.487.29.68c.392.381.912.602 1.46.62a9 9 0 0 0 2-.33a.28.28 0 0 0 0-.56z"/></svg>`,
  },
  {
    title: 'NCC Cadet',
    org: 'C & B Certificates',
    svg: null,
    emoji: '🎖️',
  },
  {
    title: 'Prathamik Examination Certificate',
    org: '2014',
    svg: null,
    emoji: '📜',
  },
]

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h2>
        <p className="text-text-secondary mb-14 text-lg">My academic journey</p>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                  style={{
                    animation: `slideUp 0.5s ease forwards`,
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0,
                  }}
                >
                  <div
                    className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-background z-10 flex-shrink-0"
                    style={{
                      backgroundColor: edu.color,
                      transform: 'translate(-50%, 0)',
                      boxShadow: `0 0 12px ${edu.color}88`,
                    }}
                  />

                  <div className="hidden md:block md:w-1/2" />

                  <div
                    className="ml-14 md:ml-0 md:w-1/2 group relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300"
                    style={{
                      boxShadow: `0 0 0 0 ${edu.color}`,
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.transform = 'translateY(-4px)'
                      el.style.boxShadow = `0 8px 30px ${edu.color}33`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.transform = 'translateY(0)'
                      el.style.boxShadow = `0 0 0 0 ${edu.color}`
                    }}
                  >
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-xs font-bold mb-3"
                      style={{
                        background: `${edu.color}22`,
                        color: edu.color,
                        border: `1px solid ${edu.color}55`,
                      }}
                    >
                      {edu.year}
                    </span>

                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{edu.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-text-secondary text-sm mb-1">{edu.institution}</p>
                        <p className="text-text-secondary text-xs mb-3">📍 {edu.location}</p>

                        <div className="flex items-center gap-3">
                          <span className="text-xs text-text-secondary font-medium whitespace-nowrap">
                            CGPA
                          </span>
                          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: `${(parseFloat(edu.cgpa) / 10) * 100}%`,
                                background: `linear-gradient(to right, ${edu.color}88, ${edu.color})`,
                              }}
                            />
                          </div>
                          <span className="text-sm font-bold" style={{ color: edu.color }}>
                            {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition-colors duration-300"
              >
                {/* ✅ Use dangerouslySetInnerHTML for SVG strings, emoji fallback otherwise */}
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
                  {cert.svg ? (
                    <span dangerouslySetInnerHTML={{ __html: cert.svg }} />
                  ) : (
                    <span className="text-2xl">{cert.emoji}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                  <p className="text-xs text-text-secondary">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}