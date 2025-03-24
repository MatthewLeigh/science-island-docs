import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const Discord = 'https://discord.com/channels/1350984587148525579/1350984587664294005'
const GitHubEnterprise = 'https://github.com/EducationNetworkGroup'
const GitHubRepo = 'https://matthewleigh.github.io'
const EditUrl = 'https://github.com/MatthewLeigh/science-island-docs/tree/main/science-island-docs'
const Website = 'https://scienceisland.com/#/'
const Game = 'https://scienceisland.com/main.php#/'
const TeachersPortal = '/' /* Pending */

const config: Config = {
    title: 'Science Island',
    tagline: 'Cool, Fun & Engaging',
    favicon: 'img/favicon.ico',

    url: GitHubRepo,
    baseUrl: '/science-island-docs/',
    organizationName: 'MatthewLeigh',
    projectName: 'science-island-docs',
    deploymentBranch: "gh-pages",
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
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    editUrl: EditUrl,
                },
                blog: {
                    path: 'projects',
                    routeBasePath: 'projects',
                    showReadingTime: false,
                    showLastUpdateTime: true,
                    editUrl: EditUrl,
                    blogTitle: 'Student Projects',
                    blogDescription: 'Overview of work completed on Science Island by student teams.',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/science-island-social-card.png',

        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: false
        },

        navbar: {
            title: 'Science Island',
            logo: {
                alt: 'Science Island Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    label: 'Docs',
                    to: '/',
                    position: 'left',
                },
                {
                    label: 'Projects',
                    to: '/projects',
                    position: 'left',
                },
                {
                    label: 'Discord',
                    href: Discord,
                    position: 'right',
                },
                {
                    label: 'GitHub',
                    href: GitHubEnterprise,
                    position: 'right',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Site Map',
                    items: [
                        {
                            label: 'Docs',
                            to: '/',
                        },
                        {
                            label: 'Projects',
                            to: '/projects',
                        }
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
                            href: GitHubEnterprise,
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
