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
						{ label: '常见问题', href: '/faq/getting-started/' },
						{ label: 'GitHub', href: 'https://github.com/Aliothmoon/MAA-Meow' },
					],
				}),
			],
			title: 'MaaMeow 指南',
			logo: { src: './src/assets/logo.png', alt: 'MaaMeow' },
			favicon: '/favicon.png',
			head: [
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
			],
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
				{
					label: '更多文档',
					items: [
						{
							label: 'MAA 官方文档',
							link: 'https://docs.maa.plus/zh-cn/manual/introduction/startup.html',
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'MaaMeow 快速上手',
							link: 'https://docs.qq.com/doc/DS3NCWWdZb1ppQk9s',
							attrs: { target: '_blank', rel: 'noopener' },
						},
						{
							label: 'MaaMeow 常见问题解决方案',
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
