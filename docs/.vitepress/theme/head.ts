import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.svg' }], //全局控制图片放大样式
    ['meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }],
    ['meta', {
        name: 'keywords',
        content: 'MC开源共建社区,我的世界,Minecraft,MCBBS,我的世界论坛,Minecraft中文社区,我的世界插件下载'
    }],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'stylesheet', href: '/static/css/fancybox.css' }], //全局控制图片放大样式
    ['script', { src: '/static/js/fancybox.umd.js' }]  //全局控制图片放大交互
]
