import { Link } from "react-router-dom";
import "../styles/layout/header.scss";

export function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Thomas.dev
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Skill</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
