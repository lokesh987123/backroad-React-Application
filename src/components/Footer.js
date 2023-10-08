import React from "react";
import { pageLinks, navBarSocialLinks } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul class="footer-icons">
        {navBarSocialLinks.map(({ id, href, icon }) => (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" class="footer-icon">
              <i class={icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
