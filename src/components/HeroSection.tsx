export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl w-full text-center">
        <div className="animate-slideUp">
          {/* <p className="text-lg text-primary mb-4 font-medium">Hey there! 👋</p> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            I'm Pawan Kalyan
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary mb-8 font-light">
            Frontend Developer | Fullstack Developer
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer specializing in React.js, TypeScript, and modern
            UI development. Experienced in building scalable and responsive web
            applications using Tailwind CSS and reusable component architecture,
            with strong focus on performance and user experience.{" "}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/PawanKalyanFrontendResume1.pdf"
              download="PawanKalyanResume.pdf"
              className="px-8 py-3 bg-foreground/10 text-foreground rounded-lg font-semibold hover:bg-foreground/20 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
