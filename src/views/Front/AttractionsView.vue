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
            <n-button @click="showModal = true">加入行程</n-button>
            <div>
              <ul v-for="upTripnote in unpostTripnotes" :key="upTripnote._id">
                <n-radio>{{ upTripnote.title }}</n-radio>
              </ul>
            </div>
          </template>
        </n-card>
      </div>
    </div>
  </div>


</template>

<script setup>
import { reactive, ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { token } = storeToRefs(user)

const attractions = reactive([])
const unpostTripnotes = reactive([])
const showModal = ref()

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