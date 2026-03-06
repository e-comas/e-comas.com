import { h } from "@aduh95/async-jsx";

import Picture from "../utils/Picture";

import "./OurServices.scss";

import "./animate-in.scss";
import "runtime:./animate-in.ts";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { ecMarketplace, ecDistribution, ecDigital, ecTech } from "../utils/customIconDefinition";
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { EComas, ECommerce } from "./eWords";

export default () => (
  <section id="our-services">
    <h3>we'll take care of it</h3>
    <p>
      Our team can be your team. Our multilingual, multi-talented people can handle everything to grow your
      brand, from building your ads strategy to managing your stock.
    </p>
    <div role="list">
      <figure class="animate-in">
        <Picture src="/images/e-comas-24.jpg" alt="illustration" />
        <figcaption>
          {/* <FontAwesomeIcon
            size="4x"
            icon={ecMarketplace as IconProp}
            color="#85c9bb"
          /> */}
          <Picture src="/images/icons/pngs/e-Comas_Pictograms_Marketplace.png" alt=""/>
          <h4>Marketplace</h4>
          <p>
            <EComas /> Marketplace manages, optimises and scales brands across Amazon
            and other major online marketplaces. Led by Nazlı Kayıkçı, it delivers
            rapid global online growth for retail brands through listings,
            content, retail media, advertising, and reporting.
          </p>
          {/* <a href="/marketplace.html" class="cta"> */}
          <a href="#bookACall" class="cta">
            Learn more
          </a>
        </figcaption>
      </figure>
      <figure class="animate-in">
        <Picture src="/images/e-comas-198.jpg" alt="illustration" />
        <figcaption>
          {/* <FontAwesomeIcon
            size="4x"
            icon={ecDistribution as IconProp}
            color="#4468b0"
          /> */}
          <Picture src="/images/icons/pngs/e-Comas_Pictograms_Distribution.png" alt=""/>
          <h4>Distribution / 3PL</h4>
          <p>
            <EComas /> Distribution offers warehousing, customer service and
            distribution capacity in the UK and Europe. Headed by Fred Rainjonneau,
            <EComas /> Distribution offers both 3PL – logistics, storage and shipping
            – and full-service distribution: a sophisticated solution that can
            define our customers’ go-to-market strategy, and manage aftersales,
            customer service and marketing.
          </p>
          {/* <a href="/distribution.html" class="cta"> */}
          <a href="#bookACall" class="cta">
            Learn more
          </a>
        </figcaption>
      </figure>
      <figure class="animate-in">
        <Picture src="/images/e-comas-22.jpg" alt="illustration" />
        <figcaption>
          {/* <FontAwesomeIcon
            size="4x"
            icon={ecDigital as IconProp}
            color="#d4387f"
          /> */}
          <Picture src="/images/icons/pngs/e-Comas_Pictograms_DigitalMarketing.png" alt=""/>
          <h4>Digital marketing</h4>
          <p>
            <EComas /> Digital Marketing offers brands social media, creative and
            design, website, PR, Meta advertising and influencer programming in
            the UK, Europe and US. Led by Loris Voyer, the Digital Marketing
            team can provide a full ecosystem for retail brands to drive traffic
            to their online stores.
          </p>
          {/* <a href="/digital-marketing.html" class="cta"> */}
          <a href="#bookACall" class="cta">
            Learn more
          </a>
        </figcaption>
      </figure>
      <figure class="animate-in">
        <Picture src="/images/e-comas-23.jpg" alt="illustration" />
        <figcaption>
          {/* <FontAwesomeIcon size="4x" icon={ecTech as IconProp} color="#f6a53d" /> */}
          <Picture src="/images/icons/pngs/e-Comas_Pictograms_Technology.png" alt=""/>
          <h4>Technology</h4>
          <p>
            <EComas /> Technology gives brands the best tech solutions to grow sales,
            including inventory planning, reporting and content management. e-Comas
            offers its own proprietary tech tools as well as partnering with
            third-party tech experts for the best eCommerce software, data and AI
            strategies. Claudiu Clement leads the <EComas /> Technology division.
          </p>
          {/* <a href="/technology.html" class="cta"> */}
          <a href="#bookACall" class="cta">
            Learn more
          </a>
        </figcaption>
      </figure>
    </div>
  </section>
);
