import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function CvButton() {
  const { t } = useTranslation();
  return (
    <a href="/cv.pdf" download="CV.pdf">
      <Button variant="secondary">{t("page-home.button-cv")}</Button>
    </a>
  );
}
