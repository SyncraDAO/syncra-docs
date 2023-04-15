// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syncra documentation',
  tagline: 'documentation for Syncra',
  //url: 'https://docs.syncra.xyz',
  url: 'https://jsk28.github.io/syncra-docs/',
  baseUrl: '/',
  //onBrokenLinks: 'throw',
  favicon: 'img/logo-pills.png',
  //organizationName: 'LiberumDAO',
  organizationName: 'jsk28',
  onBrokenLinks: 'warn',
  projectName: 'syncra-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/LiberumDAO/syncra-docs/edit/main',
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.1.x',
              path: '',
              banner: 'none',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        //ignoreFiles: [/3.x/],
        language: ['en', 'es'],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
      theme: require('prism-react-renderer/themes/duotoneDark'),
      additionalLanguages: ['rust', 'json', 'toml'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SyncraLogo',
        src: 'img/logoDark.svg',
        srcDark: '/img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    }),
};

module.exports = config;
