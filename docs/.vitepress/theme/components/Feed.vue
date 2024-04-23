<template>
    <!-- 订阅内容更新 -->
    <div class="feed">
        <p class="p">感谢以下用户对本站的发展作出不可磨灭贡献</p>
        <a class="a" href="https://doc.mcbbs.top/" target="_blank"><svg class="svg" viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor"></path>
            </svg>doc.mcbbs.top</a>
        <table>
            <tbody>
            <tr>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/jianjianai"><img src="https://avatars.githubusercontent.com/u/59829816?v=4?s=100" width="100px;" alt="简简aw"/><br /><sub><b>简简aw</b></sub></a><br /><a href="#code-jianjianai" title="Code">💻</a></td>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/DSLZL"><img src="https://avatars.githubusercontent.com/u/92631890?v=4?s=100" width="100px;" alt="DSLZL"/><br /><sub><b>DSLZL</b></sub></a><br /><a href="#code-DSLZL" title="Code">💻</a></td>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/handy-git"><img src="https://avatars.githubusercontent.com/u/32837980?v=4?s=100" width="100px;" alt="handy"/><br /><sub><b>handy</b></sub></a><br /><a href="#code-handy-git" title="Code">💻</a></td>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/lipind"><img src="https://avatars.githubusercontent.com/u/98028461?v=4?s=100" width="100px;" alt="lipind"/><br /><sub><b>lipind</b></sub></a><br /><a href="#code-lipind" title="Code">💻</a></td>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/Guailoudou"><img src="https://avatars.githubusercontent.com/u/108342285?v=4?s=100" width="100px;" alt="Guailoudou"/><br /><sub><b>Guailoudou</b></sub></a><br /><a href="#code-Guailoudou" title="Code">💻</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { useBrowserLocation } from '@vueuse/core'
import { handleCopy } from '../functions'
const { site } = useData()
const location = useBrowserLocation()
</script>

<style scoped>
.feed {
    text-align: center;

    .main {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 0 10px 0 12px;
        width: 50%;
        height: 40px;
        background-color: var(--vp-c-bg-alt);
        font-size: 14px;
        margin: 40px auto;


        .label {
            background-color: var(--vp-c-bg-alt);
            flex-shrink: 0;
            padding-right: 10px;
        }

        .copy {
            flex-shrink: 0;
            padding-left: 10px;
            color: var(--vp-c-brand);
            cursor: pointer;
        }

        .ads {
            overflow-x: auto;
            flex: 1;
            text-align: left;
        }
    }

    .main:hover {
        color: var(--vp-c-text-1);
        border: 1px solid var(--vp-c-brand-1);
        transition: color .5s;
        transition: border-color .25s;
    }

    .a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 20px;

        .svg {
            width: 20px;
            height: 20px;
            margin-right: 3px;
        }
    }

    .reeder {
        width: 90%;
        margin: 20px auto;
        border-radius: 12px;
        border: 5px solid var(--vp-c-bg-alt);
        box-shadow: var(--vp-shadow-1);
    }
}
</style>
