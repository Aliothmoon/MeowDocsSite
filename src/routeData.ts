import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

type SidebarEntry = App.Locals['starlightRoute']['sidebar'][number];

// 侧边栏外链不能按语言配置，英文页面把 MAA 官方文档换成英文版
function localize(entries: SidebarEntry[]) {
	for (const entry of entries) {
		if (entry.type === 'group') localize(entry.entries);
		else if (entry.type === 'link') {
			entry.href = entry.href.replace('docs.maa.plus/zh-cn/', 'docs.maa.plus/en-us/');
		}
	}
}

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;
	if (starlightRoute.lang === 'en') localize(starlightRoute.sidebar);
});
