// 导航数据。因内容不多，固采用 json方式。如果内容很多，可以考虑和文章一样的调用方法
import type { Tools } from './types'

export const toolsdata: Tools[] = [
  {
    title: '文档',
    items: [
      {
        icon: 'https://ricedoc.handyplus.cn/img/logo.png',
        title: '米饭插件文档',
        desc: '米饭插件文档大全',
        link: 'https://ricedoc.handyplus.cn',
        linktxt: 'ricedoc.handyplus.cn',
      }
    ],
  }
]
