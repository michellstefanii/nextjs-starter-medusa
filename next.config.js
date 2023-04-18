const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
const path = require("path")
const { i18n } = require('./next-i18next.config')

module.exports = withStoreConfig({
  i18n,
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
