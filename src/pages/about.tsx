import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Github, Linkedin, School } from "lucide-react";
import "../styles/pages/about.scss";

export function About() {
  return (
    <>
      <Header />
      <main id="aboutme">
        <section>
          <div>
            <h2>About Me</h2>
            <p>
              Actuellement en formation en développement web, je me spécialise
              dans la création de sites et d’applications web modernes. Je
              maîtrise les technologies front-end HTML, CSS, JavaScript, ainsi
              que React, et possède une solide expérience en back-end avec PHP,
              Python et NodeJS.
            </p>
            <p>
              Je travaille également avec des outils comme Git et GitHub pour le
              versioning de code, et je suis familier avec WordPress pour le
              développement de sites personnalisés. J’ai acquis des compétences
              pratiques en création de sites e-commerce, et je suis capable de
              développer des solutions sur mesure, adaptées aux besoins
              spécifiques des projets.
            </p>
            <p>
              Grâce à ma capacité d'apprentissage rapide et à ma passion pour le
              développement web, je suis toujours à la recherche de nouveaux
              défis pour m'améliorer !
            </p>
            <div className="icone">
              <School />
              <Linkedin />
              <Github />
            </div>
          </div>
          <div>
            <img src="/img/moi.jpg" alt="Inhuman" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
