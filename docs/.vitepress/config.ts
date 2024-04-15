//模板配置文件
import { defineConfig } from 'vitepress'
import { genFeed } from './theme/genFeed'
import { head } from './theme/head'
import type { ThemeConfig } from './theme/types'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig<ThemeConfig>({
    lang: 'zh-cn',
    markdown: {
        config: (md) => {
            // use more markdown-it plugins!
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': 'gallery'
            })
        }
    },
    title: 'MC开源共建社区',
    base: '/',
    head,
    description: '基于开源社区分享我的世界相关资源',
    ignoreDeadLinks: true,
    themeConfig: {
        beecodeurl: 'https://doc.mcbbs.top', //这里是内页ArticleLink组件用到的跳转第三方网址，一般用不到，仅仅用于二次开发
        sidebar: [{}], //这里如果删掉，左侧栏的内容全部不显示。页面布局会变成通栏
        nav: [
            { text: '米饭插件文档', link: 'https://ricedoc.handyplus.cn' },
            { text: 'MC中文资源站', link: 'https://www.mcbbs.top' },
            { text: '提交资源', link: 'https://github.com/handyplus/appbeebee' }

        ],
        music: [ //音乐列表，音乐播放器参数在.vitepress/store/player.ts。封面和歌词不支持可自行按照文章教程修改
            // {
            //     "id": 1,
            //     "title": "陷落Falling",
            //     "author": "不知名选手Au / 马也_Crabbit",
            //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0Nzk=",
            //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/01.jpg",
            //     "lrc": ""
            // },
            // {
            //     "id": 2,
            //     "title": "一个人想着一个人 ",
            //     "author": "如懿",
            //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODA=",
            //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/02.jpg",
            //     "lrc": ""
            // },
            // {
            //     "id": 3,
            //     "title": "夜车（Cover 曾轶可）",
            //     "author": "姜铭杨",
            //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODE=",
            //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/03.jpg",
            //     "lrc": ""
            // },
            {
                'id': 4,
                'title': '迎春花 / 財神到 / 祝福你 (廣東)',
                'author': '邓丽君 / 林子祥 / 甄妮',
                'url': 'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTI=',
                'pic': '',
                'lrc': ''
            }
        ],
        // banner: [ //主页轮播，不需要就注释掉
        //     {
        //         link: '/posts/2024/04/freebie-chinese-font.html',
        //         image: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg',
        //         title: ''
        //     },
        //     {
        //         link: '/posts/2024/04/freebie-chinese-font.html',
        //         image: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg',
        //         title: ''
        //     }
        // ],
        // search: {
        //     provider: 'local',
        //     options: {
        //         miniSearch: {
        //             /**
        //              * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
        //              */
        //             options: {
        //             },
        //             /**
        //              * @type {import('minisearch').SearchOptions}
        //              * @default
        //              * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
        //              */
        //             searchOptions: {
        //               /* ... */
        //             }
        //           },

        //         locales: {
        //             root: {
        //                 translations: {
        //                     button: {
        //                         buttonText: '搜索文档',
        //                         buttonAriaLabel: '搜索文档'
        //                     },
        //                     modal: {
        //                         noResultsText: '无法找到相关结果',
        //                         resetButtonTitle: '清除查询条件',
        //                         footer: {
        //                             selectText: '选择',
        //                             navigateText: '切换',
        //                             closeText: '关闭'
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        outlineTitle: '目录',
        socialLinks: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(237,73,73,1)"><path d="M21.0049 5.94028C19.2657 7.91075 16.8895 9.30566 14.1986 9.80276C13.7739 9.02805 12.9507 8.50281 12.0049 8.50281C11.0591 8.50281 10.2359 9.02805 9.8112 9.80276C7.12025 9.30566 4.74405 7.91075 3.00488 5.94028V3.00281C3.00488 2.45052 3.4526 2.00281 4.00488 2.00281H20.0049C20.5572 2.00281 21.0049 2.45052 21.0049 3.00281V5.94028ZM21.0049 8.72704V21.0028C21.0049 21.5551 20.5572 22.0028 20.0049 22.0028H4.00488C3.4526 22.0028 3.00488 21.5551 3.00488 21.0028V8.72704C4.86501 10.2897 7.13757 11.3774 9.63575 11.8032C9.96947 12.7914 10.9041 13.5028 12.0049 13.5028C13.1057 13.5028 14.0403 12.7914 14.374 11.8032C16.8722 11.3774 19.1448 10.2897 21.0049 8.72704Z"></path></svg>'
                }, link: 'https://ricedoc.handyplus.cn',
                ariaLabel: 'red'
            },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>'
                }, link: 'https://github.com/handyplus/appbeebee/'
            }
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel: '暗黑切换',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        article: {
            cc: {
                author: 'MC开源共建社区', //此信息将显示在文章底部和博主卡片中
                authorLink: 'https://doc.mcbbs.top',
                license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
                licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0/'
            }
        },
        website: {
            copyadd: false, //用户复制页面内容时尾巴自动添加版权声明
            perpage: 12, //列表页每页显示数量
            homeBanner: false, //显示首页 banner,banner列表在上面 banner中配置
            bannerHeight: 200, //banner高度
            showWelcome: false, //是否显示首页底部右下角弹框，（调试时弹框不显示的话先关闭浏览器再运行，因为有可能开启了缓存）内容请在组件.vitepress/theme/components/Welcome.vue编写
            welcomeusestate: false, //底部弹框是否使用sessionStorage缓存(即不关闭页面仅显示一次)
            welcome: {
                autoClose: 6000 //多长时间自动关闭，false为不关闭
            },
            showSnow: true, //是否开启雪花。开启后仅在暗黑模式下显示
            showUserCard: false, //是否显示列表中的博主名片
            cardPosition: 3, //显示在第几个位置
            cardMusic: true, //是否显示播放音乐，音乐列表在上面 music中配置
            cardCoffee: true, //是否显示打赏咖啡，
            coffeeQrcode: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0f859sm6j208c08cabm.jpg', //打赏咖啡二维码图片地址。如果是跳转网页地址需自行修改代码
            showLantern: true, //是否显示灯笼挂件
            lanternText: ['新', '年'], //灯笼上的字,数组形式
            showFirework: false, //是否显示侧栏烟花特效
            fireworkTitle: '🧨烟花许愿🧨｜②⓪②④新年', //烟花许愿标题
            fireworkWords: ['恭贺新禧', '万事如意', '新年快乐', '恭喜发财', '岁岁平安', '吉祥如意', '心想事成', '万事顺遂', '一帆风顺', '二龙腾飞', '三羊开泰', '四季平安', '五福临门', '六六大顺', '七星高照', '八方来财', '九九同心', '十全十美', '荣华富贵', '金玉满堂', '龙凤呈祥', '喜气洋洋', '鸿运当头', '财源广进', '笑口常开', '幸福安康', '日进斗金', '生意兴隆', '步步高升', '年年有余', '迎春接福', '喜气盈门', '花团锦簇', '前程似锦', '福满人间', '春回大地', '辞旧迎新', '万象更新', '吉祥如意', '万事大吉', '马到成功', '功成名就', '鱼跃龙门', '一飞冲天', '瑞气盈门', '福寿康宁', '时来运转', '鸿运高照', '三阳开泰', '否极泰来', '鸿运亨通', '一帆风顺', '出入平安', '顺风顺水', '龙凤呈祥', '花好月圆', '张灯结彩', '欢天喜地', '合家欢乐', '幸福美满', '和气致祥', '招财进宝', '开门大吉', '迎春接福', '福泽满门', '花开富贵', '竹报平安', '大吉大利', '恭喜发财'], //烟花许愿关键词
            showFooter: true, //是否显示全局底部信息
            icpRecordCode: '晋ICP备19010136号-4',  //网站备案号
            publicSecurityRecordCode: '', //公安备案号
            link: 'https://doc.mcbbs.top/'
        },
        logo: {
            light: '/logo.png',
            dark: '/logo.png'
        }
    },
    srcExclude: ['README.md'],
    vite: {
        server: {
            port: 5000,
            host: '0.0.0.0'
        },
        plugins: [pagefindPlugin({   //使用 pagefind搜索插件 https://www.npmjs.com/package/vitepress-plugin-pagefind
            customSearchQuery: chineseSearchOptimize,
            btnPlaceholder: '搜索文档',
            placeholder: '搜索文档',
            emptyText: '没有内容',
            heading: '共 {{searchResult}} 条结果'
        })]
    },
    buildEnd: genFeed,
    // 站点地图
    sitemap: {
        hostname: 'https://doc.mcbbs.top'
    }
})
