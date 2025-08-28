import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";

export function Project() {
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="projects" className="relative w-full overflow-hidden">
        <div className="relative w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="relative z-10">
            <div>
              <h2>My Last Project</h2>
              <p>
                A selection of my recent work showcasing different technologies
                and approaches to solving complex problems.
              </p>
            </div>
            <div>
              <ProjectsCards />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
