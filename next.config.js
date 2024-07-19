const { hostname } = require("os");
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io", protocol: "https", port: "" },
      { hostname: "i.ytimg.com", protocol: "https", port: "" },
    ],
  },
};
