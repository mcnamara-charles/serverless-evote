import Link from "next/link";
import Subnav from "./subnav"

export default function Header({ user }) {
  return (
    <nav role="navigation">
      <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
        <ul id="menu">
          <li>
            <Link href="/">
              <a>Evote</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Elections</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/mcnamara-charles/evote-serverless">Source Code</a>
          </li>
          <li>
            <Subnav user={user}/>
          </li>
        </ul>
      </div>
      <div id="desktopMenu" className="padded max75">
      <ul className="menu">
        <li>
          <Link href="/">
            <a>Evote</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Elections</a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/mcnamara-charles/evote-3.9">Source Code</a>
        </li>
        <li>
          <Subnav user={user}/>
        </li>
      </ul>
      </div>
    </nav>
  );
}
