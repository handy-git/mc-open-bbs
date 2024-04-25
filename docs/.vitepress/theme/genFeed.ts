//订阅配置文件
import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://doc.mcbbs.top`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'MC开源共建社区',
    description: '基于开源社区分享我的世界相关资源',
    id: baseUrl,
    link: baseUrl,
    language: 'zh',
    image: `${baseUrl}/logo.svg`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright © 2024-'+ new Date().getFullYear() + ' MC开源共建社区'
  })

  const posts = await createContentLoader('posts/*/*/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: `<img src="${frontmatter.cover}" alt="" /><p><h3><a href="${baseUrl}${url}">文章涉及下载地址访问原站：APP比比</a></h3></p>` + html + `<p><h3 style="color:#3451b2"><a href="${baseUrl}${url}">文章涉及下载地址访问原站：APP比比</a></h3></p>`,
      image: frontmatter.cover,
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
