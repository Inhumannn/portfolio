import { CodeBlock } from "@/components/codeblock";
import { CvButton } from "@/components/cv-button";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/form";
import { Header } from "@/components/header";
import { ProjectsCards } from "@/components/projects-cards";
import { SkillTech } from "@/components/skill&tech";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
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
            <ProjectsCards limit={3} />
          </div>
          <div>
            <Link to="/project">
              <Button>See More</Button>
            </Link>
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
                  <a href="mailto:inhuman@gmail.com" target="_blank">
                    Inhuman@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <Phone />
                <div>
                  <p>Phone</p>
                  <a href="tel:+1 (555) 123-4567" target="_blank">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div>
                <MapPin />
                <div>
                  <p>Location</p>
                  <address>
                    <address>
                      <a
                        href="https://www.google.com/maps/place/83170+Brignoles/@43.4049461,6.0586847,15z/data=!4m6!3m5!1s0x12c941e57cd2f639:0x40819a5fd8fcf40!8m2!3d43.406204!4d6.0592489!16s%2Fg%2F11bc6bnnbq?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                        target="_blank"
                      >
                        San Francisco, CA
                      </a>
                    </address>
                  </address>
                </div>
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
