import { h } from "@aduh95/async-jsx";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Footer from "./views/Footer.js";
import Testimonies from "./views/Testimonies.js";
import Partners from "./views/Partners.js";
import ElementWithBackgroundImage from "./utils/ElementWithBackgroundImage.js";
import { ECommerce } from "./views/eWords.js";
import VideoEmbedLink from "./views/VideoEmbedLink.js";
import FourStepApproach from "./views/FourStepApproach.js";
import Picture from "./utils/Picture.js";

import "./index.scss";
import "./contact.scss";

export default (
  <Body>
    <Header />
    <main>
      <section>
        <figure>
          <figcaption>
            <h3>Trust our amazing team</h3>
            <p>
              If you're looking to <strong>open</strong> an Amazon account,{" "}
              <strong>grow</strong> your existing <ECommerce /> sales or{" "}
              <strong>scale</strong> your business globally – or all three – we
              know exactly how to help you.
              <br />
              We have an incredible team of <ECommerce /> experts with
              specialist knowledge to help you expand your business across
              Amazon and other platforms... and across the globe!
            </p>
            <a href="#contact" class="cta">
              Meet with us
            </a>
          </figcaption>
          <VideoEmbedLink
            tagName="div"
            previewImage="/images/Banner2 Video 3x .png"
            videoId="vjGxQNji05U"
          />
        </figure>
      </section>

      <iframe
        title="Contact us form"
        id="contact"
        width="100%"
        height="1305"
        frameborder="0"
        allowtransparency
        data-src="//go.pardot.com/l/885733/2020-09-10/25cw"
        src="//go.pardot.com/l/885733/2020-09-10/25cw"
      />
    </main>
    <Footer />
  </Body>
).then((e) => document.body.append(e));
