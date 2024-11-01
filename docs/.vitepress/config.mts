import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鸿蒙笔记",
  description: "鸿蒙学习笔记",
  base: "/",
  srcExclude: ['**/README.md'],
  // outDir: "public",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: 2,
      label: "大纲"
    },
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '鸿蒙多环境配置一', link: '/鸿蒙多环境配置一' },
          { text: '鸿蒙多环境配置二', link: '/鸿蒙多环境配置二' },
          { text: '鸿蒙封装日志库并显示行号', link: '/鸿蒙封装日志库并支持跳转显示行号' },
          { text: '鸿蒙路由处理跳转首页问题', link: '/鸿蒙Navigation处理启动页跳转到首页问题' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aloe20' }
    ]
  }
})
