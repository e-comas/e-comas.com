import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Picture from "./utils/Picture.tsx";
import FourStepApproach from "./views/FourStepApproach.tsx";
import SlidingText from "./views/SlidingText.tsx";
import HoverableMenu from "./views/HoverableMenu.tsx";
import { ECommerce, EComas } from "./views/eWords.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import Footer from "./views/Footer.tsx";

import "./classic-page.scss";

export default (
  <Body title="Content / Syndication">
    <Header />
{/* <Breadcrumbs /> */}
    <main id="main-content">
      <h2>
        World class expertise to <strong>boost</strong> your <ECommerce />!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          We define your{" "}
          <strong>
            <ECommerce /> strategy
          </strong>{" "}
          with your team.
        </SlidingText>
        <SlidingText>
          We offer <strong>Amazon consulting</strong> to solve your issues.
        </SlidingText>
        <SlidingText>
          We can <strong>audit</strong> your <ECommerce /> accounts with our
          COMPAS tool.
        </SlidingText>
      </section>

      <HoverableMenu>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting01.png"
        >
          <h3>
            <ECommerce /> strategy
          </h3>
          <p>
            We support brands to understand the key success factors, and define
            proven strategies for their <ECommerce /> presence.
          </p>
          <p>
            <a href="#strategy">Discover our strategy</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting02.png"
        >
          <h3>Amazon consulting</h3>
          <p>
            We help you solve pressing issues with our team of experts, who know
            how to quickly unblock, solve and find solutions.
          </p>
          <p>
            <a href="#consulting">Consult with our experts</a>
          </p>
        </ElementWithBackgroundImage>
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/consulting03.png"
        >
          <h3>Account audit</h3>
          <p>
            COMPAS by <EComas /> provides you insights on how you are doing on
            Amazon, but also on the market &amp; the competition, guiding you to
            better sales and profits.
          </p>
          <p>
            <a href="#audit">Take a closer look</a>
          </p>
        </ElementWithBackgroundImage>
      </HoverableMenu>

      <FourStepApproach />

      <section id="strategy">
        <figure>
          <Picture src="/images/consulting01.png" alt="" />
          <figcaption>
            <h2>
              <ECommerce /> strategy
            </h2>

            <p>
              Defining an <ECommerce /> strategy consists of different steps:
            </p>

            <ul>
              <li>
                <strong>Audit</strong>: we study your presence, the health of
                your accounts and the market dynamics, the size of your
                competition.
              </li>
              <li>
                <strong>Workshop</strong>: usually for a full day where we will
                deliver the results of our audit, a gap analysis and train you
                on the key success factors to win in <ECommerce />.
              </li>
              <li>
                <strong>Deliverable</strong>: a clear strategy on where to play,
                with which account, which pricing &amp; portfolio strategy, and
                in what timeframe.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Suki
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="consulting">
        <figure>
          <figcaption>
            <h2>Amazon consulting</h2>

            <p>
              Our team of world class experts will solve your most pressing
              issues:
            </p>

            <ul>
              <li>
                <strong>Brand registration</strong>: to register your brand,
                protect it and make sure you own the content online.
              </li>
              <li>
                <strong>Account reinstatement</strong>: your account is blocked?
                Let us look into it, and bring it back to life. But careful this
                takes time and patience.
              </li>
              <li>
                <strong>Catalogue issues</strong>: your content is lost, Amazon
                is not responding, and nothing is showing, let us look into it
                and get it back live.
              </li>
              <li>
                <strong>Vendor negotiation</strong>: you are locked with amazon
                on negotiations, let us support you to get the best outcome for
                your brand.
              </li>
            </ul>

            <a href="#" className="cta">
              Case study: Michelin
            </a>
          </figcaption>
          <Picture src="/images/consulting02.png" alt="" />
        </figure>
      </section>

      <section id="audit">
        <figure>
          <Picture src="/images/consulting03.png" alt="" />
          <figcaption>
            <h2>Account Audit</h2>

            <p>
              Compas is our in-house auditing tool for your <ECommerce />{" "}
              business. It uses machine learning and data analytics to:
            </p>

            <ul>
              <li>
                <strong>Capture</strong> customers' expectations, preferences,
                experiences and feedback about your products.
              </li>
              <li>
                <strong>Present</strong> high level trends in review scores.
              </li>
              <li>
                <strong>Extract</strong> customers’ sentiment about specific
                products/categories (positive/neutral/negative).
              </li>
            </ul>

            <p>
              Your Compas report reveals what your company is doing well and
              where you are lagging behind, acting like a compass in helping you
              follow future directions, based on the four pillars of our{" "}
              <strong style={"text-transform:capitalize" as any}>
                <ECommerce /> growth model
              </strong>
              .
            </p>

            <a href="#" className="cta">
              Case study: Compas
            </a>
          </figcaption>
        </figure>
      </section>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
