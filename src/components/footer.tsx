import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/layout/footer.scss";

export function Footer() {
  return (
    <footer>
      <Link to="">&copy; 2025 PENA Thomas. All rights reserved.</Link>
      <Link to="">
        <ArrowUp />
      </Link>
    </footer>
  );
}
