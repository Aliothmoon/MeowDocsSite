// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeNova({
					nav: [
						{ label: '常见问题', href: '/faq/getting-started/' },
						{ label: 'GitHub', href: 'https://github.com/Aliothmoon/MAA-Meow' },
					],
				}),
			],
			title: 'MaaMeow 指南',
			description: 'MaaMeow 常见问题与基础使用指南',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Aliothmoon/MAA-Meow' },
			],
			sidebar: [
				{
					label: '常见问题',
					items: [{ autogenerate: { directory: 'faq' } }],
				},
			],
			lastUpdated: true,
			pagination: true,
		}),
	],
});
