import DarkVeil from "@/components/darkVeil";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TimeLine } from "@/components/time-line";

export function Experience() {
  return (
    <>
      <div id="header-ancre"></div>
      <Header />
      <main id="experience" className="w-full overflow-hidden">
        <div className="w-full h-full">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <DarkVeil />
          </div>
          <section className="z-10 about">
            <div>
              <h2>Experience</h2>
              <p>
                A timeline of my professional journey and key achievements in
                the tech industry.
              </p>
            </div>
            <div className="timeline">
              <TimeLine />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
