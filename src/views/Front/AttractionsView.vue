<template>
  <div id="Attraction">
    <div class="container">
      <h1>景點</h1>
      <div class="wrapper">
        <n-card v-for="attraction in attractions" :key="attraction._id">
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
            <p>{{ attraction.description }}</p>
          </div>
          <template #footer v-if="token">
            <div v-if="unpostTripnotes.length > 0">
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
import { reactive } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { token } = storeToRefs(user)

const attractions = reactive([])
const unpostTripnotes = reactive([])

const ItineraryItems = reactive({
  _id: '',
  attraction: '',
  spend: 0
})

const addAttraction = async (AID) => {
  ItineraryItems.attraction = AID
  try {
    await apiAuth.post('/tripnotes/item', ItineraryItems)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '新增失敗'
    })
  }
}

const getUnPostTripnotes = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes/unpost')
    if (data.result.length > 0) {
      unpostTripnotes.push(...data.result)
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

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
getUnPostTripnotes()
</script>

<style lang="scss">
#Attraction {
  padding: 60px 0;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .sreach {
    width: 100%;
    height: 500px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;

    .n-image {
      width: 100%;
      height: 276px;
    }

    .card-content {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        a {
          font-size: 16px;
          color: rgb(14, 118, 150);
        }
      }

      p {
        line-height: 2;
      }
    }
  }
}
</style>