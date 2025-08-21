import { Button } from "@/components/ui/button";

export function CvButton() {
  return (
    <a href="/cv.pdf" download="CV.pdf">
      <Button variant="secondary">Download CV</Button>
    </a>
  );
}
