export const site = {
  name: "CareerLaunch",
  url: "https://careerlaunch.dev",
  description:
    "Practical guides for CS students who want to become the engineer AI can't replace. Infrastructure, coding, AI.",
  locale: "en_US",
  skool: "https://www.skool.com/careerlaunch-challenge-6591/about",
};

export const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Products" },
];

export function fullUrl(path: string) {
  if (path.startsWith("http")) {
    return path;
  }
  return `${site.url}${path}`;
}

export function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};
