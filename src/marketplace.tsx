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
    <Hero class="animate-in long-page" entity={entityClasses.marketplace}>
      <h1 class="title">Marketplace</h1>
      <p>
        <ECommerce /> made simple
      </p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
    <img alt="Marketplace" src="/images/Logos_e-Comas/Entités/Marketplace/Horizontal/e-Comas_LogosH_Entité-MarketPlace_Monochrome.svg" class="entitylogo" />
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          <EComas /> Marketplace is your strategic growth partner, making
          <ECommerce /> simple for your brand. We support sustainable growth across
          platforms through clear strategy, market expansion support, and
          operational excellence, positioning ourselves as an end-to-end owner
          of clients’ <ECommerce /> performance.
        </p>
      </section>
      <section>
        <h3>Strategic development</h3>
        <p>
          <EComas /> Marketplace is your strategic growth partner, helping you
          grow across <ECommerce /> platforms through strong strategy, expert
          support, and operational excellence.
        </p>
        <ul>
          <li>
            We support your <b>brand registration</b> on Amazon and other marketplaces
          </li>
          <li>
            We <b>develop your brand <ECommerce /> strategy</b>, assessing your current
            <ECommerce /> setup and developing a tailored strategy for paid and
            organic growth
          </li>
          <li>
            We collaborate with you to create and manage a <b>promotional calendar</b>
          </li>
          <li>We provide recommendations on <b>inventory planning</b></li>
          <li>We generate <b>performance reports</b> on aligned KPIs</li>
          <li>
            We <b>collaborate strategically</b> with internal team members to ensure
            alignment, transparency, and a strong operational bridge
          </li>
          <li>
            We provide an <b>annual performance review</b> to summarise your wins,
            lessons learned, forecasts, and an actionable roadmap for the next
            year.
          </li>
        </ul>
      </section>

      <section>
        <h3>Cataloguing and content management</h3>
        <p>
          <EComas /> Marketplace is your ideal partner for managing your product
          listings catalogue across all platforms.
        </p>
        <ul>
          <li>We upload <b>new product listings</b></li>
          <li>We <b>optimise listings for SEO</b>, conversion and discoverability</li>
          <li>
            We provide <b>ongoing catalogue management</b> to maintain accuracy and
            relevancy
          </li>
          <li>
            We perform <b>catalogue opportunities analysis</b> to identify potential
            growth areas
          </li>
          <li>We create, revamp and improve your <b>Brand Store</b></li>
          <li>We upload <b>A+ Content and Brand Story uploads</b></li>
          <li>
            We perform <b>content cleanups</b> to rectify discrepancies and improve
            performance
          </li>
          <li>
            We provide an <b>Annual Amazon Content Optimisation Strategy review<b></b></b> 
            based on seasonality, key events, and market opportunities including
            creative.
          </li>
        </ul>
      </section>

      <section>
        <h3>Advertising and retail media</h3>
        <p>
          We’re your growth partners, ensuring you connect with and convert your
          audience via fantastic advertising and dominance of retail media
          networks.
        </p>
        <ul>
          <li>
            We develop and execute comprehensive <b>advertising strategies</b> (PPC and
            DSP)
          </li>
          <li>
            We <b>evaluate your existing campaigns</b> to identify areas of improvement
          </li>
          <li>
            We provide <b>daily campaign management</b> and optimisation for
            cost-efficiency and results
          </li>
          <li>We <b>manage your budget</b> and track your advertising activities</li>
          <li>
            We provide <b>weekly and monthly campaign reports</b> with actionable
            insights
          </li>
          <li>
            We perform advanced <b>audience targeting and retargeting</b> using
            data-driven insights
          </li>
          <li>We monitor and manage your <b>Share of Voice (SOV)</b></li>
          <li>We access your <b>Amazon Marketing Cloud (AMC) reports.</b></li>
        </ul>
      </section>

      <section>
        <h3>Reporting</h3>
        <p>
          Comprehensive reporting and real insights make a huge difference to
          brands’ success in global growth. We’re your growth partners, ensuring
          you can read and use the data available.
        </p>
        <ul>
          <li>
            We give you full access to a <b>Power BI dashboard</b> with consolidated
            sales and advertising data
          </li>
          <li>
            We support <b>ad hoc reporting</b>, presentation decks, catalogue reviews
            and pricing analysis
          </li>
          <li>
            We track and analyse <b>KPIs and performance metrics</b> to uncover
            opportunities
          </li>
          <li>We provide monthly monitoring of the <b>Voice of the Customer</b>.</li>
        </ul>
      </section>

      <section>
        <h3>Troubleshooting (account health)</h3>
        <p>
          We’re your growth partners, offering full support on your accounts
          across all platforms. Our <EComas /> Marketplace team is fully
          trained to deal with problems as and when they arise.
        </p>
        <ul>
          <li>
            We <b>manage each case</b>, resolving issues with Amazon and other
            marketplaces
          </li>
          <li>
            We <b>review your account performance daily</b>, as well as notifications
            and account health
          </li>
          <li>
            We <b>proactively troubleshoot</b> to resolve account issues promptly
          </li>
          <li>We provide <b>customer service to end consumers</b>.</li>
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
        {"{% for post in site.tags.Strategy | slice: 0, 3 %}"}
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
