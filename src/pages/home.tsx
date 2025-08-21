import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cv-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import { Button } from "@/components/ui/button";
import "../styles/pages/home.scss";

export function Home() {
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main>
        <section className="about">
          <div>
            <h1>
              Full Stack
              <span>Developer</span>
            </h1>
            <p>
              Crafting digital experiences with clenan code and innovative
              solutions. Specialised in modern web technologies ans scalable
              erchitectures.
            </p>
            <div>
              <CvButton />
              <CvButton />
            </div>
          </div>
          <div>
            <CodeBlock />
          </div>
        </section>
        <section className="project">
          <div>
            <h2>interesting project</h2>
            <p>
              A selection of my recent work showcasing different technologies
              and approaches to solving complex problems.
            </p>
          </div>
          <div>
            <ProjectsCards />
          </div>
          <div>
            <Button>See More</Button>
          </div>
        </section>
        <section className="skill">
          <div>
            <h2>Skills & Technologies</h2>
            <p>
              A comprehensive toolkit of modern technologies and frameworks I
              use to build exceptional digital experiences.
            </p>
          </div>
          <div>
            <article>
              <h3>Front-end</h3>
              <div>
                <div>
                  <p>logo</p>
                  <p>skill 1</p>
                </div>
                <div>
                  <p>logo</p>
                  <p>skill 2</p>
                </div>
                <div>
                  <p>logo</p>
                  <p>skill 3</p>
                </div>
                <div>
                  <p>logo</p>
                  <p>skill 4</p>
                </div>
                <div>
                  <p>logo</p>
                  <p>skill 5</p>
                </div>
                <div>
                  <p>logo</p>
                  <p>skill 6</p>
                </div>
              </div>
            </article>
            <article>
              <h3>Back-end</h3>
            </article>
            <article>
              <h3>Tools & DevOps</h3>
            </article>
          </div>
        </section>
        <section className="contact">
          <div>
            <p>Let's Work Together</p>
            <p>
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Let's create something amazing together.
            </p>
          </div>
          <div>
             {/* input, texterea, Label */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
