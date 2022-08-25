<template>
  <div id="ItineraryList">
    <div class="container">
      <h1>行程清單</h1>
      <div class="wrapper">
        <div id="card" v-for="item in Itineraries" :key="item._id">
          <router-link :to="'/tripnotes/' + item._id">
            <n-card :title="item.title" class="card-item">
              <template #cover>
                <n-image :src="item.image" preview-disabled></n-image>
              </template>
            </n-card>
          </router-link>
          <n-button @click="deleteItinerary(item._id)" color="rgba(231, 231, 231,0.5)">X</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'

const Itineraries = reactive([])

// 刪除
const deleteItinerary = (id) => {
  Swal.fire({
    icon: 'warning',
    title: '確定刪除?',
    showCancelButton: true,
    cancelButtonColor: '#d33'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiAuth.delete('/tripnotes/' + id)
      await Swal.fire({
        icon: 'success',
        title: '成功'
      })
      init()
    }
  }).catch((error) => {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  })
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes')
    Itineraries.push(...data.result)
    console.log(Itineraries)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>

<style lang="scss" src="../../style/MemberItineraryList.scss">
</style>