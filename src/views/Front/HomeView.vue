<template>
  <div id="GetStarted" v-if="!isLogin">
    <n-grid class="row" item-responsive>
      <n-gi span='400:24 600:12' class="cols">
        <h1>開始規劃行程</h1>
        <p><span>規劃行程</span>也是旅遊的<span>樂趣</span>之一</p>
        <p>立即規劃行程為旅遊輕鬆做準備</p>
        <div class="startedBtn">
          <a href="#login">開始使用</a>
        </div>
      </n-gi>
      <n-gi span='400:24 600:12' class="cols">
        <img src="../../assets/開始使用.png" alt="">
      </n-gi>
    </n-grid>
  </div>
  <div id="NewTripinfo">
    <n-carousel autoplay draggable dot-type="line">
      <div v-for="tripinfo in NewTripInfos" :key="tripinfo._id" class="carousel-item">
        <router-link :to="'/tripinfos/' + tripinfo._id">
          <img class="carousel-img" :src="tripinfo.image">
          <p>{{ tripinfo.name }}</p>
        </router-link>
      </div>
    </n-carousel>
  </div>
  <div id="TopTrip">
    <div class='container'>
      <h1>最新分享行程</h1>
      <div class="wrapper">
        <n-card v-for="NewTripNote in NewTripNotes" :key="NewTripNote._id">
          <template #cover>
            <n-image :src="NewTripNote.image" />
          </template>
          <div class="content">
            <h2>{{ NewTripNote.title }}</h2>
            <p>Created By <span>{{ (NewTripNote.user.account).toUpperCase() }}</span></p>
          </div>
        </n-card>
      </div>
    </div>
  </div>
  <!-- Footer ------------------------------------------------------------->
  <div id="Footer">
    <div class="container">
      <p>©COPYRIGHT 2022
        <router-link to="/contact">
          <span>聯絡我們</span>
        </router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.js'
import { reactive } from 'vue'
import { api } from '../../plugins/axios'
import Swal from 'sweetalert2'
const user = useUserStore()
const { isLogin } = storeToRefs(user)

const NewTripInfos = reactive([])
const NewTripNotes = reactive([])

// 最新的旅遊資訊
const getNewTripInfos = async () => {
  try {
    const { data } = await api.get('/tripinfos')
    NewTripInfos.push(...data.result.slice(-3))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getNewTripInfos()
// 最新的行程
const getTripNotes = async () => {
  try {
    const { data } = await api.get('/tripnotes/userall')
    NewTripNotes.push(...data.result.slice(-9))
    console.log(NewTripNotes)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getTripNotes()
</script>

<style lang="scss" src="../../style/fronthome.scss">
</style>