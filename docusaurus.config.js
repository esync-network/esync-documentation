// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eSync Network',
  tagline: 'Unleashing Real-World Blockchain Solutions ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.esync.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eSsnc-Network', // Usually your GitHub org/user name.
  projectName: 'esync-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/esync-network',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'eSync Network',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Whitepaper',
            to: '/docs/whitepaper/'
          },
          {
            position: 'left',
            label: 'Ecosystem',
            to: '/docs/ecosystem/'
          },
          {
            position: 'left',
            label: 'Tools',
            to: '/docs/tools/'
          },
          {
            position: 'left',
            label: 'Developer Docs',
            to: '/docs/developer-docs/'
          },
          {
            position: 'left',
            label: 'Validators',
            to: '/docs/validators/'
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/esync-network',
            label: 'GitHub',
            position: 'right',
          },
         // {
         //   type: "localeDropdown",
         //   position: 'right',
         // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Jump to',
            items: [
              {
                label: 'eCredits',
                to: '/docs/ecosystem/real-world-use-cases/ecredits',
              },
              {
                label: 'Metamask',
                to: '/docs/tools/metamask',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/esyncnetwork/',
              },
              {
                label: 'X',
                href: 'https://twitter.com/eSync_Network',
              },
              {
                label: 'Medium',
                href: 'https://esync.medium.com/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/esync_network',
              },
            ],
          },
          {
            title: 'Network',
            items: [
              {
                label: 'eSync Network Website',
                href: 'https://esync.network',
              },
              {
                label: 'Block Explorer',
                href: 'https://explorer.esync.network/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eSync Network`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;