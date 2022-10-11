const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Golang',
      items: [
        "overview",
        "installation",
        "initialization",
        "additional-info",
        {
          type: 'link',
          label: 'Examples',
          href: `https://github.com/immutable/imx-core-sdk-golang/tree/v0.2.0/examples`,
        },
        {
          type: 'link',
          label: 'API client reference',
          href: `${url}/sdk-references/core-sdk-golang/0-2-0/apiclient/`,
        },
        {
          type: 'link',
          label: 'Package reference',
          href: `https://pkg.go.dev/github.com/immutable/imx-core-sdk-golang@v0.2.0`,
        },
      ],
    },
  ],
};
