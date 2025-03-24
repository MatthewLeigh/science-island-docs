import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const Discord = 'https://discord.com/channels/1350984587148525579/1350984587664294005'
const GitHub = 'https://github.com/EducationNetworkGroup'
const EditUrl = 'https://github.com/MatthewLeigh/science-island-docs/tree/main/science-island-docs'
const Website = 'https://scienceisland.com/#/'
const Game = 'https://scienceisland.com/main.php#/'
const TeachersPortal = '/' /* Pending */

const config: Config = {
    title: 'Science Island',
    tagline: 'Cool, Fun & Engaging',
    favicon: 'img/favicon.ico',
    url: 'https://MatthewLeigh.github.io',
    baseUrl: '/science-island-docs',

    organizationName: 'MatthewLeigh',
    projectName: 'science-island-docs',
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    editUrl: EditUrl,
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/science-island-social-card.png',

        navbar: {
            title: 'Science Island Docs',
            logo: {
                alt: 'Science Island Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    label: 'Discord',
                    href: Discord,
                    position: 'right',
                },
                {
                    label: 'GitHub',
                    href: GitHub,
                    position: 'right',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Docs',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: Discord,
                        },
                        {
                            label: 'GitHub',
                            href: GitHub,
                        },
                    ],
                },
                {
                    title: 'Deployed',
                    items: [

                        {
                            label: 'Website',
                            href: Website,
                        },
                        {
                            label: 'Game',
                            href: Game,
                        },
                        {
                            label: 'Teacher\'s Portal (Pending)',
                            href: TeachersPortal,
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Education Network Group.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },

    } satisfies Preset.ThemeConfig,
};

export default config;
