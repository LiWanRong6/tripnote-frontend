<template>
  <div id="Attraction">
    <div class="container">
      <h1>景點</h1>
      <n-input-group class="search">
        <input type="search" v-model.lazy.trim="ItineraryItems.Keyword" placeholder="搜尋景點名稱">
        <button @keydown="SearchAttraction" @click="SearchAttraction">搜索</button>
      </n-input-group>
      <div class="wrapper">
        <n-card v-for="attraction in SearchAttraction" :key="attraction._id">
          <template #cover>
            <n-image :src="attraction.image"></n-image>
          </template>
          <div class="card-content">
            <div class="header">
              <h2>{{ attraction.name }}</h2>
              <a :href="attraction.official">
                <font-awesome-icon icon="fa-solid fa-earth-americas" />
              </a>
            </div>
            <p class="description">{{ attraction.description }}</p>
          </div>

          <template #footer v-if="isLogin">
            <div v-if="unpostTripnotes.length > 0" class="choose-itinerary">
              <h3>選擇行程</h3>
              <n-radio-group v-model:value="ItineraryItems._id">
                <n-radio v-for="upTripnote in unpostTripnotes" :key="upTripnote._id" :value="upTripnote._id">
                  {{ upTripnote.title }}
                </n-radio>
              </n-radio-group>
            </div>
          </template>
          <template #action v-if="unpostTripnotes.length > 0">
            <n-button @click="addAttraction(attraction._id)">加入行程</n-button>
          </template>
        </n-card>
      </div>
    </div>
  </div>


</template>

<script setup>
import { reactive, computed } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { isLogin } = storeToRefs(user)

const attractions = reactive([])
const unpostTripnotes = reactive([])

const ItineraryItems = reactive({
  _id: '',
  attraction: '',
  spend: 0,
  list: 0,
  content: '',
  Keyword: ''
})

const addAttraction = async (AID) => {
  ItineraryItems.attraction = AID
  try {
    if (ItineraryItems._id !== '') {
      await apiAuth.post('/tripnotes/item', ItineraryItems)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請選擇行程'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '新增失敗'
    })
  }
}


// 取得所有景點
const getAttractions = async () => {
  try {
    const { data } = await api.get('/attractions/all')
    attractions.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
getAttractions()

const SearchAttraction = computed(() => {
  return attractions.filter(item => item.name.match(ItineraryItems.Keyword))
})

// 取的為分享的行程( ?+時間)
const getUnPostTripnotes = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes/unpost')
    unpostTripnotes.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
getUnPostTripnotes()

</script>
<style lang="scss" src="../../style/Attraction.scss">
</style>
