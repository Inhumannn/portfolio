import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/layout/footer.scss";

export function Footer() {
  return (
    <>
      <hr />
      <footer>
        <Link to="">&copy; 2025 Inhuman. All rights reserved.</Link>
        <HashLink smooth to="#header-ancre">
          <ArrowUp />
        </HashLink>
      </footer>
    </>
  );
}
