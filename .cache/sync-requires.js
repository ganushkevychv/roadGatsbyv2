const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/src/pages/index.js"))),
  "component---src-pages-tech-js": hot(preferDefault(require("/home/vlad/Desktop/repos/roadGatsbyv2/src/pages/tech.js")))
}

