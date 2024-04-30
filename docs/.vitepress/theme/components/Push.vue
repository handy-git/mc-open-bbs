<template>
    <!-- 提交新文章按钮 -->
    <a class="pushButtin" :href="pushUrl()">
        提交新文章
        <svg class="svg left" style="display: inline-block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
            </path>
        </svg>
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { withBase } from 'vitepress'
import { initArchives } from '../functions'
import { data as themeposts } from '../posts.data'

const data = computed(() => initArchives(themeposts))
const pushUrl = ()=>{
  const date = new Date();
    const year = date.getFullYear()
    const month = (1 + date.getMonth()).toString().padStart(2, '0')
    return `https://github.com/handy-git/mc-open-bbs/new/main/docs/posts/${year}/${month}`;
}
</script>

<style scoped>
.pushButtin {
    display: block;
    width: 10rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #70d288;
    border-radius: 2rem;
    text-align: center;
    cursor: pointer;
    margin: auto;

}

.svg {
    width: 20px;
    object-fit: fill;
    fill: currentColor;
}

.svg.left {
    margin-right: 5px;
}

.svg.right {
    margin-left: 5px;
}
</style>
