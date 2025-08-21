import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cv-button";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/form";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import { SkillTech } from "@/components/skill&tech";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, School } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/home.scss";

export function Home() {
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="home">
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
              <Link to="/about">
                <Button variant="secondary">About Me</Button>
              </Link>
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
              and <br /> approaches to solving complex problems.
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
              A comprehensive toolkit of modern technologies and <br />{" "}
              frameworks I use to build exceptional digital experiences.
            </p>
          </div>
          <div>
            <SkillTech />
          </div>
        </section>
        <section className="contact" id="contact-ancre">
          <div>
            <h2>Let's Work Together</h2>
            <p>
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. <br /> Let's create something amazing together.
            </p>
          </div>
          <div>
            <div className="info">
              <div>
                <Mail />
                <div>
                  <p>Email</p>
                  <p>Inhuman@gmail.com</p>
                </div>
              </div>
              <div>
                <Phone />
                <div>
                  <p>Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div>
                <MapPin />
                <div>
                  <p>Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div className="icone">
                <School />
                <Linkedin />
                <Github />
              </div>
            </div>
            <div className="form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
