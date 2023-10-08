import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, navBarSocialLinks as SocialLinks } from "../data";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={pageLinks.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul class="nav-icons">
          {SocialLinks.map(({ id, href, icon }) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener" class="nav-icon">
                  <i class={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
