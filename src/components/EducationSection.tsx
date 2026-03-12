import { education } from "../utils/constants"

export const EducationSection = () => {
  

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h2>
        <p className="text-text-secondary mb-14 text-lg">My academic journey</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
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
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-background z-10 flex-shrink-0"
                    style={{
                      backgroundColor: edu.color,
                      transform: 'translate(-50%, 0)',
                      boxShadow: `0 0 12px ${edu.color}88`,
                    }}
                  />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
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
                    {/* Year badge */}
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

                        {/* CGPA bar */}
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
                          <span
                            className="text-sm font-bold"
                            style={{ color: edu.color }}
                          >
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
            {[
              { title: 'Python Development Internship', org: 'Main Flow & Technologies Pvt. Ltd.', icon: '🐍' },
              { title: 'Web Designing', org: 'BIRED.org', icon: '🎨' },
              { title: 'NCC Cadet', org: 'C & B Certificates', icon: '🎖️' },
              { title: 'Prathamik Examination Certificate', org: '2014', icon: '📜' },
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary transition-colors duration-300"
              >
                <span className="text-2xl">{cert.icon}</span>
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