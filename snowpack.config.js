/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    example: '/',
    src: '/_dist_',
  },
  plugins: ['@prefresh/snowpack'],
  installOptions: {
    installTypes: true,
  },
}
