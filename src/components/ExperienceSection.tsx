import { EXPERIENCE } from '../utils/constants'

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Work Experience</h2>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-primary animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />

              {/* Content */}
              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                  <span className="text-sm text-text-secondary font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>

                <p className="text-primary font-semibold mb-3">{exp.company}</p>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">{exp.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
