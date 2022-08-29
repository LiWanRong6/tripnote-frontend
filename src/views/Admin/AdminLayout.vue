<template>
  <div id="Admin">
    <div id="Menu">
      <div class="container">
        <div class="logo" style="text-align:center;">
          <router-link to="/">
            <img src="../../assets/logo.svg" alt="logo">
            <p>TRIPNOTE</p>
          </router-link>
        </div>
        <ul class="menu-items">
          <li class="menu-item">
            <a href="#attractions">
              <n-button color="#1F2E3C">景點</n-button>
            </a>
            <a href="#information">
              <n-button color="#1F2E3C">旅遊資訊</n-button>
            </a>
            <a href="#reference">
              <n-button color="#1F2E3C"> 參考行程</n-button>
            </a>
            <n-dropdown trigger="hover" :options="ItineraryOptions" v-if="isLogin">
              <n-button color="#1F2E3C">我的行程</n-button>
            </n-dropdown>
            <a href="#admin" v-if="isLogin && isAdmin">
              <n-button color="#1F2E3C">管理</n-button>
            </a>
          </li>
          <li class="menu-item">
            <div class="search">
              <n-input-group>
                <n-input placeholder="搜索" autosize style="min-width: 70%">
                  <template #prefix>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </template>
                </n-input>
                <!-- <n-select v-model:value="value" :options="SelectOptions" style="min-width: 100px" /> -->
              </n-input-group>
            </div>
          </li>
          <li class="menu-item" v-if="!isLogin">
            <div class="startedBtn">
              <n-button strong secondary round><a href="#login">開始使用</a>
              </n-button>
            </div>
          </li>
        </ul>
        <div class="popover-group">
          <n-popover trigger="hover" v-if="isLogin" :show-arrow="false">
            <template #trigger>
              <n-avatar round :src="avatar"></n-avatar>
            </template>
            <a href="#memberinfo">個人資料 </a>
            <a href="#">
              <n-button class="logoutBtn" @click="logout" color="#E8CDA2">登出</n-button>
            </a>
          </n-popover>
          <n-popover trigger="hover" v-if="isLogin" :show-arrow="false">
            <template #trigger>
              <n-button class="burgarBtn" @mouseover="showMenu" color="#1F2E3C">
                <font-awesome-icon icon="fa-solid fa-bars" />
              </n-button>
            </template>
            <a href="#attractions">
              景點
            </a>
            <a href="#information">
              旅遊資訊
            </a>

            <a href="#reference">
              參考行程
            </a>
            <n-dropdown trigger="hover" :options="ItineraryOptions" v-if="isLogin">
              我的行程
            </n-dropdown>
            <div class="startedBtn" v-if="!isLogin">
              <a href="#login">
                開始使用
              </a>
            </div>
            <a href="#admin" v-if="isLogin && isAdmin">
              管理
            </a>
          </n-popover>
        </div>
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
const { isLogin, isAdmin, avatar } = storeToRefs(user)

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
    label: () => h('a', { href: '#list' }, '分享行程'), key: 'list-itinerary'
  },
  {
    label: () => h('a', { href: '#share' }, '行程清單'), key: 'share-itinerary'
  }
]
</script>

<style lang="scss">
#Admin {


  .content {
    #SiderMenu {
      position: fixed;
      width: 192px;
      height: 100vh;
      text-align: center;
      background-color: #2E3E4E;
      float: left;

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
      width: calc(100% - 192px);
      display: flex;
      justify-content: center;
      padding-top: 20px;
      float: right;
    }

  }
}
</style>