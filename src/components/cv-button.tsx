import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function CvButton() {
  const { t } = useTranslation();
  return (
    <a href="/cv.pdf" download="CV.pdf">
      <Button
        variant="outline"
        style={{
          backgroundColor:
            "color-mix(in oklab, oklch(1 0 0 / 15%) 70%, transparent)",
        }}
      >
        {t("page-home.button-cv")}
      </Button>
    </a>
  );
}
