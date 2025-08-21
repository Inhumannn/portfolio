import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "../styles/pages/experience.scss";

export function Experience() {
  return (
    <>
      <Header />
      <main id="experience">
        <section>
          <div>
            <h2>Experience</h2>
            <p>
              A timeline of my professional journey and key achievements in the
              tech industry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
