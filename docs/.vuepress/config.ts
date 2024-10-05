import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://images.mcsl.com.cn/new/laughing.webp' }]
  ],
  lang: 'zh-CN',
  title: "传奇笑料榜",
  description: '记录遇到的大大小小笑料，享受美好生活 | MCSL 开发组强势驱动',
  theme: plumeTheme({
    logo: 'https://images.mcsl.com.cn/new/laughing.webp',
    hostname: "https://lz.mcsl.com.cn",
    autoFrontmatter: false,
    footer: { message: "<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>本站由 木韩网络 提供 CDN 加速与防御支持。", "copyright": "© 2022-2024 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。" },
    navbar: [
      {
        text: '主页',
        link: '/',
        icon: 'heroicons:home',
      },
      {
        text: '笑料目录',
        link: '/arts/',
        icon: 'ic:round-list',
      },
      {
        text: '投稿须知',
        link: '/eula',
        icon: 'f7:doc-text-fill',
      },
      {
        text: '进入仓库',
        link: 'https://github.com/MCSLTeam/YourWholeFamilyIsInThe.Icu',
        icon: 'mdi:github',
      },
    ],
    plugins: {
      // watermark: true,
      watermark: {
        // enabled: false,  // boolean 类型控制是否全局启用
        enabled: page => true, // function 类型 过滤哪些页面启用水印
        delay: 0, // 添加水印的延时。以毫秒为单位。

        /**
         * 是否全屏水印，默认为 `true`，
         * 设置为 `false` 时，水印仅在 内容区域中显示。
         */
        fullPage: true,

        watermarkOptions: {
          content: '笑料榜单-MCSL开发组版权所有',
          // ...
        }
      }
    }
  }),
  bundler: viteBundler(),
}) as UserConfig