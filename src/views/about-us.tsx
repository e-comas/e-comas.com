import { h, Fragment } from "@aduh95/async-jsx";

import { EComas, ECommerce } from "../views/eWords.tsx";

import "./about-us.scss";
import "runtime:./about-us-runtime.ts";
import ElementWithBackgroundImage from "../utils/ElementWithBackgroundImage.tsx";
import ListElement from "./ListElement.tsx";
import { faDroplet, faGlobe, faMedal } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default () => (
  <ElementWithBackgroundImage
    tagName="section"
    src="/images/e-comas-16-crop.jpg"
    class="about-us"
  >
    <h2>About us</h2>
    <h3>
      Why <EComas />?
    </h3>
    <div role="list">
      <ListElement
        icon={faGlobe as IconProp}
        title="Global Perspective"
        desc="Our multilingual teams across Europe, North America and India can help you navigate the complexities of global markets, including localisation, international SEO and cross-border logistics."
      />
      <ListElement
        icon={faMedal as IconProp}
        title="Specialist Support"
        desc={
          <>
            With decades of combined experience helping brands succeed in{" "}
            <ECommerce />, we have the expertise to grow your business
            sustainably and help you tackle everyday challenges with online
            retail.
          </>
        }
      />
      <ListElement
        icon={faDroplet as IconProp}
        title="Passionate Team"
        desc={
          <>
            We live and breathe <ECommerce />, keeping abreast of all the latest
            industry trends and developments to ensure we find the best
            solutions and deliver the highest standard of service to our
            clients.
          </>
        }
      />
    </div>
    {/* <a href="/about-us.html" class="cta animatable"> */}
    <a href="#bookACall" class="cta animatable">
      Learn more
    </a>
  </ElementWithBackgroundImage>
);
