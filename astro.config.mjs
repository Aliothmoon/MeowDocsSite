// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.maameow.com',
	integrations: [
		starlight({
			plugins: [
				starlightThemeNova({
					nav: [
						{
							label: { 'zh-CN': '常见问题', en: 'FAQ' },
							href: { 'zh-CN': '/faq/getting-started/', en: '/en/faq/getting-started/' },
						},
						{ label: 'GitHub', href: 'https://github.com/Aliothmoon/MAA-Meow' },
					],
				}),
			],
			title: { 'zh-CN': 'MaaMeow 指南', en: 'MaaMeow Guide' },
			logo: { src: './src/assets/logo.png', alt: 'MaaMeow' },
			favicon: '/favicon.png',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
			],
			description: 'MaaMeow 常见问题与基础使用指南',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
				en: { label: 'English', lang: 'en' },
			},
			routeMiddleware: './src/routeData.ts',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Aliothmoon/MAA-Meow' },
			],
			sidebar: [
				{
					label: '常见问题',
					translations: { en: 'FAQ' },
					items: [{ autogenerate: { directory: 'faq' } }],
				},
				{
					label: '更多文档',
					translations: { en: 'More docs' },
					items: [
						{
							label: 'MAA 官方文档',
							translations: { en: 'Official MAA docs' },
							link: 'https://docs.maa.plus/zh-cn/manual/introduction/startup.html',
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'MaaMeow 快速上手',
							translations: { en: 'MaaMeow quick start (Chinese)' },
							link: 'https://docs.qq.com/doc/DS3NCWWdZb1ppQk9s',
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'MaaMeow 常见问题解决方案',
							translations: { en: 'MaaMeow FAQ solutions (Chinese)' },
							link: 'https://docs.qq.com/doc/DVHJGbHNGbHJnY29S',
							attrs: { target: '_blank', rel: 'noopener' },
						},
					],
				},
			],
			lastUpdated: true,
			pagination: true,
		}),
	],
});
