import { h } from "@aduh95/async-jsx";

import yaml from "./utils/yaml.js";

import Body from "./views/Body.js";
import Header from "./views/Header.js";
import Breadcrumbs from "./views/Breadcrumbs.js";
import Footer from "./views/Footer.js";

import "./news.scss";
import "runtime:./news-runtime.js";

export default (
  <Body title="Blog">
    <Header />
    <Breadcrumbs />
    <main id="main-content">
      <h2>Our Blog</h2>
      <section>
        {"{% for post in site.posts %}"}
        {"{% unless post.tags contains 'Webinar' or post.sitemap == false %}"}
        <article>
          <a href="{{ post.url }}">
            <img
              src="{{ post.thumbnail }}"
              alt="{{ post.thumbnail_alt }}"
              loading="lazy"
            />
          </a>
          <time dateTime={"{{ post.date | date: '%Y-%m-%dT%H:%M:%S' }}"}>
            {'{{ post.date | date: "%b %d, %Y" }}'}
          </time>
          <h3>
            <a href="{{ post.url }}">{"{{ post.title | escape }}"}</a>
          </h3>
          <ul class="tags">
            {"{% for tag in post.tags %}"}
            <li>{"{{ tag }}"}</li>
            {"{% endfor %}"}
          </ul>
          <p>
            <a href="{{ post.url }}">{"{{ post.excerpt | escape }}"}</a>
          </p>
          <a href="{{ post.url }}" class="cta">
            Read the article
          </a>
        </article>
        {"{% endunless %}"}
        {"{% endfor %}"}
      </section>
      <aside></aside>
    </main>
    <Footer />
  </Body>
).then(
  (e) => (
    document.body.append(e),
    yaml`
layout: none
`
  )
);
