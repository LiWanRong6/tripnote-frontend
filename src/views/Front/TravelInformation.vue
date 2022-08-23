<template>
  <div id="FrontTripinfo">
    <div class="container">
      <h1>旅遊資訊</h1>
      <div v-for="tripinfo in tripinfos" :key="tripinfo._id" class="card">
        <router-link :to="'/tripinfos/' + tripinfo._id">
          <div class="wrapper">
            <div class="card-item">
              <n-image :src="tripinfo.image" />
            </div>
            <div class="card-item">
              <n-card :bordered="false" :title="tripinfo.name">
                {{ tripinfo.description }}
                <template #footer>
                  <p>{{ new Date(tripinfo.postdate).toLocaleDateString() }}</p>
                </template>
              </n-card>
            </div>
          </div>
          <hr>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'

const tripinfos = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/tripinfos')
    tripinfos.push(...data.result)
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
<style lang="scss" src="../../style/tripinfos.scss">
</style>