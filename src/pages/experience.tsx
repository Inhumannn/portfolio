import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "../styles/pages/experience.scss";
import { TimeLine } from "@/components/time-line";

export function Experience() {
  return (
    <>
      <div id="header-ancre"></div>
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
          <div className="timeline">
            <TimeLine />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
