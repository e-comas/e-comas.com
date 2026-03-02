import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.tsx";
import Header from "./views/Header.tsx";
import Breadcrumbs from "./views/Breadcrumbs.tsx";
import Footer from "./views/Footer.tsx";
import { ECommerce, ECockpits } from "./views/eWords.tsx";
import FourStepApproach from "./views/FourStepApproach.tsx";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.tsx";
import SlidingText from "./views/SlidingText.tsx";

import "./classic-page.scss";
import "./services.scss";

export default (
  <Body title="Strategy">
    <Header />
{/* <Breadcrumbs /> */}
    <main id="main-content">
      <h2>
        World class expertise <strong>services</strong> to <strong>win</strong>{" "}
        on the digital shelf!
      </h2>

      <section class="slidable-section">
        <SlidingText>
          Our <strong>mission</strong>: grow your <ECommerce /> business.
        </SlidingText>
        <SlidingText>
          Our <strong>secret sauce</strong>: the 4 pillars of <ECommerce />.
        </SlidingText>
        <SlidingText>
          Our <strong>target</strong>: get you e-ready in a month.
        </SlidingText>
      </section>

      <FourStepApproach />

      <div class="services-sub-pages">
        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Website Creation.png"
        >
          <h2>Website creation</h2>

          <p>
            We proudly partner with Shopify, the leading <ECommerce /> platform
            allowing brands to build and manage their own standalone online
            retail stores.
          </p>

          <a href="/website-creation.html" class="cta">
            Learn more
          </a>
        </ElementWithBackgroundImage>

        <ElementWithBackgroundImage
          tagName="section"
          src="/images/Analytics.png"
        >
          <h2>Analytics</h2>

          <p>
            We help our customers automate and secure their data retrieval, we
            build relevant dashboards and <ECockpits/> with our LOOTS KPI
            framework. We also provide market insights to empower brands to win
            on the digital shelf.
          </p>

          <a href="/analytics.html" class="cta">
            Learn more
          </a>
        </ElementWithBackgroundImage>
      </div>
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
