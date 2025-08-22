import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import "../styles/pages/project.scss";

export function Project() {
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="projects">
        <section>
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
      </main>
      <Footer />
    </>
  );
}
