import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                <a href="/#contact-ancre">Contacts</a>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
        <div id="menu">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/experience">Experience</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/project">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/#contact-ancre">Contacts</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <hr />
    </div>
  );
}
