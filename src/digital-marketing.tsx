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
    <Hero
      class="animate-in long-page"
      entity={entityClasses["digital Marketing"]}
    >
      <h1 class="title">Digital Marketing</h1>
      <p>Building coherent digital ecosystems for retail brands</p>
      <a href="./contact.html" class="cta no-arrow">
        Book a call
        <FontAwesomeIcon icon={faPhone as IconProp} />
      </a>
    </Hero>
    <main id="main-content">
      <Picture alt="Digital Marketing" src="/images/Logos_e-Comas/Entités/Digital/Horizontal/e-Comas_LogosH_Entité-Digital_Monochrome.svg" class="entitylogo" />
      <section class="what-we-do">
        <h2>What do we do?</h2>
        <p>
          <EComas /> Digital Marketing creates cohesive digital ecosystems to
          help eCommerce brands grow consistently across markets. We bring
          social media, websites, online advertising and content creation
          together into one unified brand and performance strategy.
        </p>
      </section>

      <section>
        <h3>Social Media</h3>
        <p>
          We manage your brand's social channels with a strategic, content-first
          approach, allowing you to grow your audience and direct new traffic to
          your online store.
        </p>
        <ul>
          <li>We develop <b>platform-specific content plans</b></li>
          <li>We produce <b>creative assets</b>, and schedule and publish posts</li>
          <li>We <b>monitor performance</b> across all major networks</li>
          <li>
            We help you build a <b>loyal and active following</b> around your brand
          </li>
          <li>We link your social media content back to <b>your online store</b></li>
        </ul>
      </section>

      <section>
        <h3>Meta Advertising</h3>
        <p>
          We’re your growth partners for acquiring new customers through paid
          social, specialising in Meta (Facebook and Instagram), which are some
          of the most powerful social tools for brands.
        </p>
        <ul>
          <li>We develop and manage <b>full-funnel Meta advertising strategies</b></li>
          <li>
            We combine <b>sophisticated audience targeting</b> with compelling creative
          </li>
          <li>We carry out rigorous, ongoing performance optimisation</li>
          <li>
            We provide regular <b>campaign reporting</b>, with clear attribution and
            actionable insights
          </li>
        </ul>
      </section>

      <section>
        <h3>Creative Video and Graphics</h3>
        <p>
          We produce high-quality visual content in line with your brand's style
          and your growth goals, across a full range of formats and in many
          languages.
        </p>
        <ul>
          <li>
            Our <b>creative</b> includes social media graphics, brand photography,
            videography, and website imagery
          </li>
          <li>
            We <b>collaborate closely with your team</b>, ensuring full alignment with
            your brand guidelines
          </li>
          <li>
            We offer <b>copywriting and translation services</b>, enabling brands to
            communicate effectively
          </li>
        </ul>
      </section>

      <section>
        <h3>Websites</h3>
        <p>
          Whether you want to refresh your website or build a new online store
          from scratch, we can create the right digital shopfront for you.
        </p>
        <ul>
          <li>
            We provide <b>end-to-end website services</b>, including design,
            development, and ongoing optimisation
          </li>
          <li>
            We deliver <b>visually compelling and technically robust solutions</b>
          </li>
          <li>We can <b>refresh your existing website</b></li>
          <li>
            We take a <b>data-led approach to website performance</b>, using analytics
            and user behaviour insights
          </li>
        </ul>
      </section>

      <section>
        <h3>Influencer Content</h3>
        <p>
          We’re your growth partners for influencer marketing, which can be one
          of the most authentic and precise drivers for retail brands.
        </p>
        <ul>
          <li>
            We <b>identify, vet and manage partnerships</b> with suitable influencers
            and creators
          </li>
          <li>
            We <b>choose influencers</b> from Instagram, TikTok, YouTube, Amazon Live
            and beyond
          </li>
          <li>
            We <b>handle gifting campaigns</b>, sponsored content and long-term
            ambassador partnerships
          </li>
          <li>
            We <b>design influencer programmes</b> to build genuine brand affinity
          </li>
        </ul>
      </section>

      <section>
        <h3>PR and Events</h3>
        <p>
          We’re your growth partners, helping you build credibility, visibility
          and brand reputation through earned media, public relations and press.
        </p>
        <ul>
          <li>
            We <b>secure coverage</b> across relevant trade, consumer, and digital
            publications
          </li>
          <li>
            We <b>develop compelling brand narratives</b> and press materials that
            resonate with journalists
          </li>
          <li>
            We <b>manage media relationships</b> and provide regular reporting on
            coverage and reach
          </li>
          <li>
            We <b>plan, manage and host media events</b> to put your brand and products
            in the spotlight
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
        {"{% for post in site.tags.Advertising | slice: 0, 3 %}"}
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
