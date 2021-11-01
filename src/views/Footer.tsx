import { h } from "@aduh95/async-jsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faMediumM,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import NavLink from "../utils/NavLink.js";

import "./footer.scss";

export default () => (
  <footer>
    <img
      src="/images/logo.svg"
      alt="e-Comas, eCommerce made simple"
      class="logo"
    />
    <nav>
      <ul>
        {/* <li>
          <NavLink href="/strategy.html">Service</NavLink>
        </li>
        <li>
          <NavLink href="/experience.html">Experience</NavLink>
        </li>
        <li>
          <NavLink href="/our-team.html">Team</NavLink>
        </li> */}
        {/* <li>
          <NavLink href="/news.html">Blog</NavLink>
        </li> */}
      </ul>
    </nav>
    <ul class="contact-us">
      <li>
        <strong>
          <NavLink href="/contact.html">Contact us</NavLink>
        </strong>
      </li>
      <li>
        Phone: <a href="tel:&plus;352621830003">+352 621 830 003</a>
      </li>
      <li>
        Address: <address>68 Avenue de la Liberté - L-1930 Luxembourg</address>
      </li>
    </ul>
    <ul class="social">
      <li>
        <a
          href="https://www.linkedin.com/company/e-comas/"
          rel="noopener"
          target="_blank"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/ecommerce.made.simple/"
          rel="noopener"
          target="_blank"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/e.comas.amazon.made.simple/"
          rel="noopener"
          target="_blank"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@Amazon_expert"
          rel="noopener"
          target="_blank"
          title="Medium"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UC8FEB3vsicxo5gI3mtdl50A"
          rel="noopener"
          target="_blank"
          title="YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </ul>
    <div class="copyright-notice">© 2021 · E-comas · All Rights Reserved</div>
  </footer>
);
