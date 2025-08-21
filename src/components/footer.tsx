import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/layout/footer.scss";

export function Footer() {
  return (
    <>
      <hr />
      <footer>
        <Link to="">&copy; 2025 Inhuman. All rights reserved.</Link>
        <a href="#header-ancre">
          <ArrowUp />
        </a>
      </footer>
    </>
  );
}
