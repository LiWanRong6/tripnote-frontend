<template>
  <div id="OtherItinerary">
    <div class="container">
      <div>
        <h1>{{ tripnote[0].title }}</h1>
      </div>
      <n-image :src="tripnote[0].image"></n-image>
      <div v-for="item in tripnote[0].item" :key="item._id">
        <div class="sub-title">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          {{ item.attraction.name }}
          <n-button>加入行程</n-button>
        </div>
        <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../plugins/axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const tripnote = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes/' + route.params.id)
    tripnote.push(data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '載入錯誤'
    })
  }
}
init()
</script>

<style lang="scss" src="../../style/OtherItinerary.scss">
</style>