import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Picture from "./utils/Picture.tsx";
import MarketingFunnel from "./views/MarketingFunnel.tsx";
import SlidingText from "./views/SlidingText.tsx";
import HoverableMenu from "./views/HoverableMenu.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import { ECommerce, EComas } from "./views/eWords.tsx";
import Footer from "./views/Footer.tsx";

import "./classic-page.scss";

export default (
  <Body title="Advertising">
    <Header />
    {/* <Breadcrumbs /> */}
    <main id="main-content">
      <h2>
        World class expertise to <strong>enhance</strong> your advertising!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We handle your Retail Media <strong>advertising</strong>.
        </SlidingText>
        <SlidingText>
          We manage your <strong>social media</strong> advertising.
        </SlidingText>
        <SlidingText>
          We help your <strong>community management</strong>.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Retail Media Advertising.png"
        >
          <h3>Retail media advertising</h3>
          <p>Boost your sales and control ROI with PPC and DSP campaigns.</p>
          <p>
            <a href="#retail_media">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Social Media Advertising.png"
        >
          <h3>Social media advertising</h3>
          <p>
            Advertising off market places is ideal to boost sales and brand
            awareness.
          </p>
          <p>
            <a href="#social_media">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Community Management.png"
        >
          <h3>Community management</h3>
          <p>
            We support to grow a strong brand awareness to drive successful
            sales.
          </p>
          <p>
            <a href="#community_management">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <MarketingFunnel />

      <section id="retail_media">
        <figure>
          <Picture src="/images/Retail Media Advertising.png" alt="" />
          <figcaption>
            <h3>Retail media advertising</h3>
            <p>
              Our team of Advertising experts will help you grow your sales
              exponentially with:
            </p>
            <ul>
              <li>
                Targeted and efficient <strong>Amazon advertising</strong>{" "}
                campaigns such as Sponsored Ads and PPC, ‘pay per click’.
              </li>
              <li>
                Push further with <strong>Amazon DSP</strong> (‘Demand Side
                Platform’), to grow your customer funnel from outside of Amazon.
              </li>
              <li>
                Create and manage campaigns on <strong>Google</strong>,{" "}
                <strong>Facebook</strong>, and <strong>more</strong> to drive
                conversions on Amazon and in your webshop.
              </li>
            </ul>
            <p>
              <EComas /> is an official Amazon Advertising partner and our team is
              composed of seasoned digital marketers with many years of
              experience.
              <br />
              <strong>We have certifications in</strong>: Amazon Sponsored Ads,
              Amazon DSP, Google Ads, Facebook Blueprint.
            </p>

            <a href="#" className="cta">
              Case study: Zero Water
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="social_media">
        <figure>
          <figcaption>
            <h3>Social media advertising</h3>
            <p>
              Advertising off Amazon to drive external traffic from platforms
              such as Facebook, Google, Instagram, Tik Tok opens another world
              of opportunity to target new prospects as well as reconnect with
              old customers.
            </p>
            <p>
              We can help you harness the power of search engines and social
              media sites to put your products in front of the people most
              likely to buy them, as well as building click-through traffic to
              boost your rankings.
              <br />
              They include: Google, Facebook, Instagram, Twitter, LinkedIn, Bing
              and more!
            </p>

            <a href="#" className="cta">
              Case study: MIAMILY
            </a>
          </figcaption>
          <Picture src="/images/Social Media Advertising.png" alt="" />
        </figure>
      </section>

      <section id="community_management">
        <figure>
          <Picture src="/images/Community Management.png" alt="" />
          <figcaption>
            <h3>Community management</h3>
            <p>
              Brand building and high funnel approaches use community management
              to target customers at the very early stages of engagement, to get
              traction, and brand awareness which will be crucial for the lower
              parts of the funnel, as time goes on. The service focuses on:
            </p>
            <ul>
              <li>
                Local / native speakers to engage with audience in North
                America, Europe and India;
              </li>
              <li>
                Content creation and syndication on all social media platforms
                (Facebook, IG, TikTok...);
              </li>
              <li>
                Link with your <ECommerce /> activities to maximise brand
                awareness.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Qhali Kay
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
