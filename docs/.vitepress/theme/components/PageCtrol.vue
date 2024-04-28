<template>
  <!-- 首页文章列表控制条，可对文章进行列表和网格切换，使用永久缓存 -->
  <div class="pagectrol">
    <div class="ctrol-left">
      <span class="a filter">
        <span><strong>{{ bread }}</strong>{{ ' 共' + count + '篇' }}</span>
      </span>

      <!-- 发表新文章 -->
      <ClientOnly>
        <a class="a random" href="/pages/push.html">
          <svg t="1714310658559" class="svg left" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271"><path d="M67.8 692l40-249.1c2.3-14.3 9.6-27.2 20.7-36.5L504.9 90.1c50.7-42.6 126.4-36 168.9 14.8L809 266.1c42.6 50.8 36 126.5-14.8 169.1L417.7 751.6c-11.1 9.3-25.1 14.3-39.5 14.1l-251.9-3.9c-36.7-0.6-64.3-33.6-58.5-69.8z m125.3-212.7L167.6 638c-2.9 18 10.9 34.5 29.1 34.7l160.5 2.4c7.2 0.1 14.2-2.4 19.7-7l336.4-282.6c25.4-21.3 28.7-59.2 7.4-84.6l-96.4-115.1c-21.3-25.4-59.1-28.7-84.5-7.4L203.4 461.1c-5.5 4.6-9.2 11.1-10.3 18.2zM916.9 962H107.1C82.3 962 62 941.7 62 916.9s20.3-45.1 45.1-45.1H917c24.8 0 45.1 20.3 45.1 45.1-0.1 24.8-20.4 45.1-45.2 45.1zM916.9 781.8H647.1c-24.8 0-45.1-20.3-45.1-45.1s20.3-45.1 45.1-45.1H917c24.8 0 45.1 20.3 45.1 45.1-0.1 24.8-20.4 45.1-45.2 45.1z" fill="" p-id="4272"></path></svg>
          <span>发表新文章</span>
          <svg class="svg left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
            </path>
          </svg>
        </a>
      </ClientOnly>


      <a class="a random" :href="withBase(`${randomdata?.relativePath}`)">
        <svg class="svg left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0224 20.3135 4.91625 17.5626 2.8685 13L7.56619 13L8.5 11.4437L11.5 16.4437L13.5662 13H17V11H12.4338L11.5 12.5563L8.5 7.55635L6.43381 11L2.21024 10.9999C2.07418 10.3626 2 9.69615 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
            fill="rgba(255,99,71,1)"></path>
        </svg>
        <span>随机一文</span>
        <svg class="svg right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
          </path>
        </svg>
      </a>
    </div>
    <div class="ctrol-right">
      <div class="view" :class="{ on: listview === 'grid' }" @click="viewtype('grid')"><svg class="svg"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H11V11H6V7ZM11 13H6V17H11V13ZM13 7H18V11H13V7ZM18 13H13V17H18V13Z">
          </path>
        </svg><span>网格</span></div>
      <div class="view" :class="{ on: listview === 'list' }" @click="viewtype('list')"><svg class="svg"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H8V9H6V7ZM8 11H6V13H8V11ZM6 15H8V17H6V15ZM18 7H10V9H18V7ZM10 15H18V17H10V15ZM18 11H10V13H18V11Z">
          </path>
        </svg><span>列表</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue'
import { useData, withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
import { randomOne } from '../functions'
import { data as themeposts } from '../posts.data'
const listview = useStorage('listview', 'grid')
const viewtype = (e: string) => {
  listview.value = e;
}
const props = defineProps({
  bread: String,
  count: Number
})
const randomdata = computed(() => randomOne(themeposts))
</script>

<style scoped>
.pagectrol {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-bottom: 20px;

  .ctrol-left {
    display: flex;
    flex-direction: row;

    .a {
      background-color: var(--vp-c-bg-alt);
      border-radius: 4px;
      padding: 2px 10px;
      display: flex;
      flex-direction: row;
      margin-right: 8px;

      .svg {
        width: 16px;
        object-fit: fill;
        fill: currentColor;
      }

      .svg.left {
        margin-right: 5px;
      }

      .svg.right {
        margin-left: 5px;
      }

    }
  }

  .ctrol-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .view {
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      opacity: .4;
      cursor: pointer;

      .svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        fill: currentColor
      }
    }

    .view.on {
      opacity: 1;
    }
  }
}

@media (max-width: 550px) {
  .pagectrol {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    .ctrol-right {
      margin-bottom: 14px;

      .view {
        margin-left: 0px;
        margin-right: 20px;
      }
    }
  }
}
</style>