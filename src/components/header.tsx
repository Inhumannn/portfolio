import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
                <HashLink smooth to="/#contact-ancre">
                  Contacts
                </HashLink>
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
              <Link to="/">
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link to="/about">
                <DropdownMenuItem>About</DropdownMenuItem>
              </Link>
              <Link to="/experience">
                <DropdownMenuItem>Experience</DropdownMenuItem>
              </Link>
              <Link to="/project">
                <DropdownMenuItem>Projects</DropdownMenuItem>
              </Link>
              <HashLink smooth to="/#contact-ancre">
                <DropdownMenuItem>Contacts</DropdownMenuItem>
              </HashLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <hr />
    </div>
  );
}
