import { h } from "@aduh95/async-jsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas } from "../views/eWords.tsx";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faMediumM,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

import team from "../utils/team.toml";

import NavLink from "../utils/NavLink.tsx";

import "runtime:./footer_addresses.ts";
import "./footer.scss";
import { CSSProperties } from "react";
import "runtime:./Footer-runtime.ts";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  text?: string | JSX.Element;
}

export default (props: Props | undefined) => (
  <footer>
    <figure class="free-consultation" id="bookACall">
      <a href="/success.html" style={{ display: "none" }} />
      <a href="/failure.html" style={{ display: "none" }} />
      <figcaption>
        <strong>Let’s talk!</strong>
        <h1>Book a call today</h1>
        <p>
          {props?.text ??
            "Reach out to our team to find out how we can help you grow your brand\
          faster, globally, across all the leading online channels."}
        </p>
        <a href="mailto:contact@e-comas.com">
          <FontAwesomeIcon
            icon={faEnvelopeOpen as IconProp}
            color="gold"
            style={{ "margin-right": "1ch" } as CSSProperties}
          />
          contact@e-comas.com
        </a>
      </figcaption>
      <form
        id="Requests"
        action="https://go.e-comas.com/l/885733/2023-10-03/m8gzb"
        method="post"
        class="plausible-event-name=Footer+Submit"
      >
        <input placeholder="Name" name="fakenom" />
        <input type="email" placeholder="Email" name="fakecourriel" required />
        <input
          type="tel"
          placeholder="Phone number"
          name="faketel"
          // pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
          title="Please enter a valid phone number"
        />
        <input placeholder="Company" name="fakeboite" required />
        {/* <label htmlFor="region">Business location :</label> */}
        <select name="region" required>
          {/* @ts-ignore defaultSelected should actually work*/}
          <option value={""} defaultSelected disabled hidden>
            Business location
          </option>
          <option value={"The Americas"}>The Americas</option>
          <option value={"APAC"}>APAC</option>
          <option value={"EMEA"}>EMEA</option>
        </select>
        <input placeholder="Website" name="fakesite" />
        {/* <label>*These fields are required :</label> */}
        <textarea placeholder="Message" name="fakedemande"></textarea>
        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <label htmlFor="pardot_extra_field">Comments</label>
          <input
            type="text"
            id="pardot_extra_field"
            name="pardot_extra_field"
          />
        </div>
        <button id="submitRequest" class="cta no-arrow">
          Submit Request
        </button>
      </form>
    </figure>
    <hr />
    <div class="upper-footer">
      <img
        src="/images/Logos_e-Comas/Groupe/Horizontal/e-Comas_LogosH_Groupe_HD.svg"
        alt="e-Comas, eCommerce made simple"
        class="logo"
      />
      <nav>
        <ul>
          <li>
            <NavLink href="/about-us.html">About us</NavLink>
          </li>
          <li>
            <NavLink href="/our-team.html">Team</NavLink>
          </li>
          <li>
            <NavLink href="/testimonials.html">Testimonials</NavLink>
          </li>
          <li>
            <NavLink href="/webinar.html">Webinars</NavLink>
            {/* <NavLink href="/legals.html">Legals</NavLink> */}
          </li>
          <li>
            <NavLink href="/privacy.html">Privacy policy</NavLink>
          </li>
        </ul>
      </nav>
      <strong>What we do</strong>
      <nav>
        <ul>
          <li>
            <NavLink href="/global-expansion.html">
              Global Expansion Services
            </NavLink>
          </li>
          <li>
            <NavLink href="/retail-media.html">Advertising Services</NavLink>
          </li>
          <li>
            <NavLink href="/data-and-tech.html">Analytics</NavLink>
          </li>
          <li>
            <NavLink href="/salsify.html">Content/PIM/Syndications</NavLink>
          </li>
          <li>
            <NavLink href="/website-creation.html">Website Creation</NavLink>
          </li>
          <li>
            <NavLink href="/walmart-marketplace.html">Walmart</NavLink>
          </li>
        </ul>
      </nav>
      <strong>
        <NavLink href="/contact.html">Contact us</NavLink>
      </strong>
      <ul class="contact-us">
        <li>
          <a
            href={
              (team.team_member as { url: Record<string, string> }[]).find(
                (m) => m.url?.Calendly
              )!.url.Calendly
            }
            target="_blank"
            rel="noopener"
          >
            Book a call
          </a>
        </li>
        <li>
          Email: <a href="mailto:sales@e-comas.com">sales@e-comas.com</a>
        </li>
        <li>
          <NavLink href="/newsletter-subscribe.html">
            Subscribe to the newsletter
          </NavLink>
        </li>
        <li>
          Addresses:
          <ul class="addresses">
            <li>
              <span>EU</span>:{" "}
              <address>
                68 Avenue de la Liberté - L-1930 Luxembourg - LUXEMBOURG
              </address>
            </li>
            <li>
              <span>US</span>:{" "}
              <address>
                <EComas /> LLC, 6303 Blue Lagoon Drive, Suite 200 Miami, FL
                33126
              </address>
            </li>
            <li>
              <span>MG</span>:{" "}
              <address>
                Lot IVG AF 97 Behoririka - Antananarivo - Madagascar
              </address>
            </li>
            <li>
              <span>IN</span>:{" "}
              <address>
                B106, Saroj Enclave – Ben Satya Layout, Geddalahalli – Bangalore
                , Karnataka – India - 560043
              </address>
            </li>
          </ul>
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
            <FontAwesomeIcon icon={faLinkedinIn as IconProp} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ecomas.ecommerce.made.simple/"
            rel="noopener"
            target="_blank"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF as IconProp} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ecomas.ecommerce.made.simple/"
            rel="noopener"
            target="_blank"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram as IconProp} />
          </a>
        </li>
        <li>
          <a
            href="https://amazon-expert.medium.com/"
            rel="noopener"
            target="_blank"
            title="Medium"
          >
            <FontAwesomeIcon icon={faMediumM as IconProp} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UClCYdUcUs1zJk8O3a4lC9lw"
            rel="noopener"
            target="_blank"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube as IconProp} />
          </a>
        </li>
      </ul>
      <div class="logos">
        <a
          href="https://pruefgesellschaft.bio/webserv/kdk/LU-04-17381-HD.pdf"
          target="_blank"
          rel="noopener"
        >
          <img src="/images/brands/EU_Organic.svg" alt="EU Organic" />
          LU-BIO-04
        </a>
        <img src="/images/MadeInLux.svg" alt="Made in Luxembourg" />
      </div>
      <div class="copyright-notice">
        © 2026 · <EComas /> · All Rights Reserved
      </div>
    </div>
    <div class="lower-footer">
      <div class="luv">
        <div>
          Made with ❤️ by <EComas /> Team
        </div>
      </div>
    </div>

    <a id="book-a-call" href="#bookACall">
      Book a Call
    </a>
  </footer>
);
