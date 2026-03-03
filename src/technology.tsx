import { h, Fragment } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.ts";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

import "./team-page.scss";
import Hero, { entityClasses } from "./views/hero.tsx";

import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./views/eWords.tsx";
import Picture from "./utils/Picture.tsx";

export default (
  <Body title="Global Expansion">
    <Header />
    <Hero class="animate-in long-page" entity={entityClasses.technology}>
      <h1 class="title">Technology</h1>
      <p>Bringing the post-dashboards future to retail brands</p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
    <img alt="Technology" src="/images/Logos_e-Comas/Entités/Tech/Horizontal/e-Comas_LogosH_Entité-Tech_Monochrome.svg" class="entitylogo" />
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          <EComas /> Technology equips retail brands with the data, tools, and
          technical expertise they need to make smarter decisions and grow more
          efficiently online.
        </p>
      </section>

      <section>
        <h3>Clarisix</h3>
        <p>
          Clarisix is the operating system for eCommerce performance. Built by{" "}
          <EComas /> Technology, Clarisix unifies six dimensions of eCommerce
          success into a single source of truth.
        </p>
        <ul>
          <li>
            <b>Unified dashboards</b> across all six pillars (Sales, Advertising,
            Inventory, Profitability, Content, Customer Experience)
          </li>
          <li><b>Executive clarity view</b> of all performance at once</li>
          <li><b>Multi-market</b> and multi-entity rollups</li>
          <li>
            Alerts and <b>anomaly detection</b> to prevent silent revenue leakage
          </li>
          <li><b>Diagnostics</b> that explain what changed and why</li>
        </ul>
        <h4>Clarisix deep modules offer:</h4>
        <ul>
          <li>
            <b>Profitability module</b> with contribution margin drivers and guardrails
          </li>
          <li><b>Content compliance tracking</b> (approved vs. live)</li>
          <li><b>Advanced advertising</b> insights (DSP, AMC, SQP)</li>
          <li><b>Inventory health monitoring</b> and out-of-stock prevention</li>
        </ul>
        <h4>Coming soon to Clarisix:</h4>
        <ul>
          <li><b>AI-assisted recommendations</b> and draft fixes</li>
          <li><b>Multi-channel connectors</b>, API access, MCP/CLI</li>
        </ul>
      </section>

      <section>
        <h3>Inventory planning and demand forecasting</h3>
        <p>
          At <EComas /> Technology we provide the tools, the data and the
          analysis to ensure you neither overstock nor go out of stock.
        </p>
        <ul>
          <li>
            We use <b>historical sales data</b>, promotional calendars, and market trend
            analysis to generate accurate demand forecasts
          </li>
          <li>
            We optimise<b> stock level recommendations</b> to allow you to plan
            procurement and logistics
          </li>
          <li>
            We <b>work closely with the <EComas /> Distribution team</b> to execute
            technology-driven inventory decisions
          </li>
        </ul>
      </section>

      <section>
        <h3>Ecommerce reporting and analytics</h3>
        <p>
          Data is only valuable when it is accessible, accurate, and presented
          in a way that supports clear decision-making.
        </p>
        <ul>
          <li>
            Our reporting infrastructure is <b>built on Power BI and integrated
              with Clarisix</b>
          </li>
          <li>
            Work with your brand to <b>define the KPIs</b> that matter most to your
            business
          </li>
          <li>
            Build <b>bespoke reporting views</b> that align with your commercial
            strategy
          </li>
          <li>
            Provide regular structured reporting as well as <b>ad hoc analytical
              support</b>
          </li>
          <li>
            Ensure your team has the data needed to <b>act quickly and decisively</b>
          </li>
        </ul>
      </section>

      <section>
        <h3>Content management technology</h3>
        <p>
          Through Clarisix, we can simplify management of your product listings
          content at scale, across multiple marketplaces, multiple regions, and
          multiple languages.
        </p>
        <ul>
          <li>Our technology <b>streamlines the process</b> of managing product listings content</li>
          <li>
            We enable <b>centralised control</b> of product titles, descriptions, images,
            and attributes
          </li>
          <li>
            We <b>automatically distribute</b> content to the relevant channels and
            markets
          </li>
          <li>
            Performs <b>automatic content quality checks</b>, SEO scoring, and brand
            guideline compliance
          </li>
          <li>
            Ensures <b>listings are consistently optimised</b> for discoverability and
            conversion
          </li>
        </ul>
      </section>

      <section>
        <h3>Third-party technology partnerships</h3>
        <p>
          At <EComas /> Technology we work with several third-party technology
          partners to provide best-in-class services for your brand.
        </p>
        <ul>
          <li>We work with <b>Pacvue</b> for advanced advertising automation</li>
          <li>We work with <b>Salsify</b> for product information management (PIM)</li>
          <li>We work with <b>CapEc</b> for eCommerce-specific financing</li>
          <li>We work with <b>SEOPhenix</b> to generate product listings</li>
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
        {"{% for post in site.tags.Tools | slice: 0, 3 %}"}
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
