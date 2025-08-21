import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "../styles/layout/header.scss";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <div id="floating-header">
      <header id="header">
        <Link to="/" className="logo">
          Inhuman.dev
        </Link>
        <nav>
          <ul>
            <li>
              <Button variant="link">
                <Link to="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to="/experience">Experience</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to="/project">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link to="/contact">Contacts</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  );
}
