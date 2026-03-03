import { h, Fragment } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Picture from "./utils/Picture.tsx";
import { ECommerce } from "./views/eWords.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import Footer from "./views/Footer.tsx";

import "./classic-page.scss";
import "./global-expansion.scss";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";

import "./utils/open-form-in-modal.scss";
import "runtime:./utils/open-form-in-modal.ts";
import Hero from "./views/hero.tsx";
import ListElement from "./views/ListElement.tsx";
import {
  ecPersonAndCog,
  ecTarget,
  ecGlobe,
  ecTrolley,
} from "./utils/customIconDefinition.ts";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import FlipCard from "./views/flipCard.tsx";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import yaml from "./utils/yaml.ts";

export default (
  <Body title="Content & Creative">
    <Header />
    {/* <Breadcrumbs /> */}
    <Hero class="animate-in">
      <h1>Content & Creative</h1>
      <p>
        We create outstanding product content, help you organise and manage your
        content, and globalise your listings to make your brand truly shine.
        Maximise your online retail content strategy and watch those sales
        skyrocket with our world-class expertise today.
      </p>
      <a href="/contact.html" class="cta">
        Book a Call
      </a>
    </Hero>
    <main id="main-content">
      <figure id="boost-your-brand" class="made-easy">
        <figcaption>
          <h3>boost your brand & drive traffic</h3>
          <p>
            Elevate your Amazon presence and supercharge your sales with our
            expert content solutions. Our content pros specialise in crafting
            compelling product listings that grab shoppers’ attention and make
            them hit that "Add to Cart" button. We'll help you create,
            streamline and manage your listings, ensuring a seamless customer
            experience.
            <br />
            <br />
            With our global reach, we'll expand your listings to reach a wider
            audience, making your brand stand out in the crowded marketplace.
            Count on us to ramp up your sales and help your brand rock on Amazon
            and beyond.
          </p>
        </figcaption>
        <Picture
          src={"/images/e-Comas16651.jpg"}
          alt={"eCommas Content team"}
        />
      </figure>
      <ElementWithBackgroundImage
        tagName="section"
        src="/images/e-comas-16-crop.jpg"
        class="about-us"
      >
        <h3>Our Expertise</h3>
        <p>
          We optimise listings, craft compelling product descriptions, and
          develop winning marketing content to get your products in front of the
          right people and boost sales.
        </p>
        <div role="list">
          <ListElement
            title={"Content Creation"}
            desc={
              "We can audit your existing content, help you define your needs and craft high-converting pages with relevant and compelling Amazon A+ content, pictures, videos and more."
            }
          />
          <ListElement
            icon={ecPersonAndCog as IconProp}
            title={"Content Management"}
            desc={
              <>
                We partner with Salsify to help you with Product Information
                Management (PIM) and Syndication, organising and uploading your
                content across multiple <ECommerce /> platforms.
              </>
            }
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title={"Content Localization"}
            desc={
              "Adapting your content to suit the preferences, shopping habits and culture of target international markets, our global team can help you optimise sales and customer engagement."
            }
          />
          <ListElement
            icon={ecGlobe as IconProp}
            title={"Content Translation"}
            desc={
              <>
                <ECommerce /> makes it easy to expand in the different countries
                in the world. Get your content translated by native speakers to
                speed up global growth and access diverse customer bases.
              </>
            }
          />
          <ListElement
            icon={ecTarget as IconProp}
            title={"Website Creation"}
            desc={
              "From the research phase to design and development, we can build custom stores on Shopify that perfectly captures your brand and gets your products in front of the right people."
            }
          />
          <ListElement
            icon={faMagnifyingGlass as IconProp}
            title={"Salsify Implementation"}
            desc={
              "From designing the ideal data model to ensuring a seamless flow of your product data to the desired syndication channels, we handle it all and set up Salsify to suit your needs."
            }
          />
          <ListElement
            icon={ecPersonAndCog as IconProp}
            title={"Salsify Managed Services"}
            desc={
              "Whether you're looking for routine maintenance, data management or feature enhancements, our experts ensure your Salsify platform operates smoothly and efficiently."
            }
          />
          <ListElement
            icon={ecTrolley as IconProp}
            title={"Brand Stores"}
            desc={
              "Enhance your brand and boost traffic using our team's expertise in creating Amazon Storefronts, featuring compelling visuals and expertly crafted copy to bring your brand story to life."
            }
          />
          <ListElement
            icon={faMagnifyingGlass as IconProp}
            title={"SEO Optimization"}
            desc={
              "We can improve your product visibility, rankings and sales by optimising product listings with strategic keywords and engaging content tailored to each marketplace."
            }
          />
        </div>
      </ElementWithBackgroundImage>
    </main>
    <section id="how-we-do-it" class="how-we-do-it">
      <h2>How We Do It</h2>
      <p>
        We combine strategic planning, data analysis and hands-on operational
        work to help brands break into new and growing markets.
      </p>
      <div role="list">
        <FlipCard
          title="Define Strategy"
          desc={
            <>
              We audit of your brand’s current <ECommerce /> presence and work
              closely with you to set clear and measurable goals.
            </>
          }
        />
        <FlipCard
          title="Manage Operations"
          desc="From optimising product listings to handling logistics and VAT, we can manage your account on multiple platforms."
        />
        <FlipCard
          title="Grow Traffic"
          desc="Whether it’s using Amazon PPC, DSP, Google or socials, we monitor and adjust your campaigns to maximise ROI."
        />
        <FlipCard
          title="Drive Conversion"
          desc="We use analytics tools to track key performance metrics, such as sales, traffic, conversion rates, and customer feedback."
        />
      </div>
    </section>
    <section id="see-the-results" class="see-the-results">
      <h2>See The Results</h2>
      <figure>
        <Picture
          src={"/images/case-studies/michelin.png"}
          alt={"stack of tires"}
        />
        <figcaption>
          <h3>Saving time through upload automation</h3>
          <p>
            When you have thousands of product listings, you need a robust
            solution for content management and upload. Here’s how we and our
            partners at Salsify helped a leading tyres brand save time and
            improve consistency.
          </p>
          {
            // TODO: Add modal
          }
          <a class="cta open-in-modal" href="/">
            Download
            <FontAwesomeIcon icon={faDownload as IconProp} />
          </a>
        </figcaption>
      </figure>
    </section>
    <section id="blog" class="blog">
      <h2>Blog</h2>
      <p>
        Find out useful <ECommerce /> tips and what's new in the Amazon world
        relating to content.
      </p>
      <div role="list">
        {"{% for post in site.tags.Syndication | slice: 0, 3 %}"}
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
