const addresses = document.querySelector("footer .addresses")!;
const addressesCache = new WeakMap();

const addressWrapper = document.createElement("li");
addresses.parentElement!.parentElement!.append(addressWrapper);

let currentLink: HTMLAnchorElement;
function clickHandler(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  if (currentLink) {
    currentLink.style.fontWeight = "normal";
    addressesCache.get(currentLink).remove();
  }
  this.style.fontWeight = "bold";
  currentLink = this;
  addressWrapper.append(addressesCache.get(this));
}

addresses.replaceWith(
  ...Array.from(addresses.children, (child, i) => {
    const link = document.createElement("a");
    const address = child.querySelector("address");
    link.href = "#";
    addressesCache.set(link, address);
    link.textContent = child.firstElementChild!.textContent;
    link.style.fontWeight = "normal";
    link.addEventListener("click", clickHandler);
    link.title = address!.textContent!;
    return link;
  }).flatMap((link, i) => [i ? " | " : " ", link])
);

export {};
