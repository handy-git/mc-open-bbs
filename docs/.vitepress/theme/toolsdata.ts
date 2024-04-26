// 导航数据。因内容不多，固采用 json方式。如果内容很多，可以考虑和文章一样的调用方法
import type { Tools } from './types'

export const toolsdata: Tools[] = [
    {
        title: '文档',
        items: [
            {
                icon: 'https://ricedoc.handyplus.cn/img/logo.svg',
                title: '米饭插件文档',
                desc: '米饭Minecraft插件文档',
                link: 'https://ricedoc.handyplus.cn',
                linktxt: 'ricedoc.handyplus.cn'
            }
        ]
    },
    {
        title: '资源站',
        items: [
            {
                icon: 'https://www.mcbbs.top/logo.svg',
                title: 'MC中文资源站',
                desc: 'MC中文资源站',
                link: 'https://www.mcbbs.top',
                linktxt: 'www.mcbbs.top'
            }
        ]
    }
]
