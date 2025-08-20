import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <h1>
              Full Stack
              <span>Developer</span>
            </h1>
            <p>
              Crafting digital experiences with clenan code ans innovative
              solutions. Specialised in modern web technologies ans scalable
              erchitectures.
            </p>
            <Button variant="outline">Button</Button>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
