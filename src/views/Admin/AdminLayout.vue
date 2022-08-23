<template>
  <div id="Admin">
    <div id="Menu">
      <div class="container">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="logo"
            style="display:inline-block; width:40px;height:auto; margin:0 8px">
          <p style="color:azure; font-size: 20px; display:inline-block;line-height: 40px;margin-bottom:10px">TRIPNOTE
          </p>
        </router-link>
        <ul class="menu-items">
          <li class="menu-item">
            <a href="#information">
              <n-button>旅遊資訊</n-button>
            </a>
            <a href="#reference">
              <n-button> 參考行程</n-button>
            </a>
            <n-dropdown trigger="hover" :options="ItineraryOptions" v-if="isLogin">
              <n-button>行程</n-button>
            </n-dropdown>
          </li>
          <li class="menu-item">
            <n-popover trigger="hover" :show-arrow="false">
              <template #trigger>
                <n-button round>
                  <n-avatar round size="large" :src="avatar"></n-avatar>
                </n-button>
              </template>
              <a href="#memberinfo">
                <n-button>
                  個人資料
                </n-button>
              </a>
              <a href="#">
                <n-button @click="logout">登出</n-button>
              </a>
            </n-popover>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div id="SiderMenu">
        <n-menu :options="menuOptions" />
      </div>
      <div class="main-layout">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { NButton } from 'naive-ui'
const user = useUserStore()
const { logout } = user
const { isLogin, avatar } = storeToRefs(user)

const menuOptions = [
  {
    label: () => h('a', { href: '#/admin/attractions' }, '景點管理'), key: 'attractions-management'
  },
  {
    label: () => h('a', { href: '#/admin/tripinfos' }, '旅遊資訊'), key: 'tripinfos-management'
  },
  {
    label: () => h('a', { href: '#/admin/members' }, '會員管理'), key: 'members-management'
  },
  {
    label: () => h('a', { href: '#/admin/itineraries' }, '行程管理'), key: 'itineraries-management'
  },
]

const ItineraryOptions = [
  {
    label: () => h('a', { href: '#plan' }, '規劃行程'), key: 'plan-itinerary'
  },
  {
    label: () => h('a', { href: '#share' }, '分享行程'), key: 'share-itinerary'
  },
  {
    label: () => h('a', { href: '#list' }, '歷史紀錄'), key: 'list-itinerary'
  }
]

</script>
<style lang="scss">
#Admin {
  .content {
    #SiderMenu {
      width: 192px;
      height: calc(100vh - 80px);
      text-align: center;
      background-color: #2E3E4E;

      .n-menu-item-content-header {
        a {
          color: white;
          font-weight: 700;
        }
      }

      // 點擊
      .n-menu-item-content.n-menu-item-content--selected::before {
        background-color: #4e84b8;
      }

      // hover
      .n-menu-item-content:not(.n-menu-item-content--disabled):hover::before {
        background-color: #6FA5D6;

      }
    }

    .main-layout {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }

    display: flex;
  }
}
</style>