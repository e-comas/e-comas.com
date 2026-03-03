import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./team-page.scss";
import Hero, { entityClasses } from "./views/hero.tsx";


import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import {
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";
import Picture from "./utils/Picture.tsx";


export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in long-page" entity={entityClasses.distribution}>
      <h1 class="title">Distribution</h1>
      <p>Distribution made simple for retail brands</p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <Picture alt="Distribution" src="/images/Logos_e-Comas/Entités/Distribution/Horizontal/e-Comas_LogosH_Entité-Distribution_Monochrome_HD.svg" class="entitylogo" />
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          At <EComas /> Distribution, we provide customers with the full range of
          warehousing, storage and shipping solutions, from simple 3PL logistics
          to full-service distribution. We enable brands to work with a single,
          full-service partner for global, omni-channel distribution and
          business development.
        </p>
      </section>

      <section>
        <h3>Third-party logistics (3PL)</h3>
        <p>
          We’re your growth partners, helping you scale your business across new
          marketplaces and territories with fantastic 3PL services that flex
          with your needs.
        </p>
        <ul>
          <li><b>Logistics</b>, storage and shipping services</li>
          <li><b>Real-time</b> inventory visibility</li>
          <li>We work with <b>leading carrier networks</b></li>
          <li>
            Products reach customers and retail partners <b>on time and in perfect
              condition</b>
          </li>
          <li>
            We provide <b>FBA</b> (Fulfilled by Amazon), <b>FBM</b> (Fulfilled by Merchant)
            and <b>DTC</b> (Direct to Customer)
          </li>
          <li>
            We serve <b>brick-and-mortar stores</b> as well as eCommerce platforms
          </li>
          <li>
            We have <b>established warehousing facilities in the UK</b> and mainland
            Europe.
          </li>
        </ul>
      </section>

      <section>
        <h3>Full-service distribution</h3>
        <p>
          The team at <EComas /> Distribution offers a sophisticated full-service
          solution to take everything off your hands. We’re your growth
          partners, ensuring your brand expands smartly and rapidly through the
          right channels.
        </p>
        <ul>
          <li>We <b>define your go-to-market strategy</b></li>
          <li>
            We <b>research each market</b> and provide localisation and operational
            infrastructure
          </li>
          <li>
            We take care of <b>warehousing, shipping and logistics</b> for all markets
          </li>
          <li>We manage <b>aftersales and returns</b> processing</li>
          <li>
            We manage your <b>customer service</b> in local languages and in line with
            your brand values
          </li>
          <li>We <b>track and report performance</b> of all shipments</li>
          <li>We can handle your <b>marketing</b> and advertising</li>
          <li>We provide <b>accurate inventory planning and forecasting</b></li>
          <li>
            We ensure inventory decisions are <b>aligned with your broader
              strategy.</b>
          </li>
        </ul>
      </section>
    </main>
    <section id="blog" class="blog">
      <h2>Our blog</h2>
      <p>
        Read our latest blogs for helpful <ECommerce /> tips and what's new in
        the Amazon world relating to expanding your brand internationally.
      </p>
      <div role="list">
        {"{% for post in site.tags.Logistics | slice: 0, 3 %}"}
        <article>
          <a href="{{ post.url }}">
            <img
              src="{{ post.thumbnail }}"
              alt="{{ post.thumbnail_alt }}"
              loading="lazy"
            />
          </a>
          <h3>
            <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
          </h3>
          <p>{"{{ post.excerpt | escape }}"}</p>
          <a href="{{ post.url }}" class="cta">
            Read More
          </a>
        </article>
        {"{% endfor %}"}
      </div>
    </section>
    <Footer />
  </Body>
).then((e) => (document.body.append(e), yaml`layout: none`));
