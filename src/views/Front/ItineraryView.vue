<template>
  <div id="Itinerary">
    <div id="image-block">
      <n-image :src="tripnote.image"></n-image>
      <n-upload>
        <n-button>上傳圖片</n-button>
      </n-upload>
    </div>
    <div class="container">
      <div class="header">
        <div class="title">
          <h1>{{ tripnote.title }}</h1>
          <h2>
            {{ new Date(tripnote.departure).toLocaleDateString() }} -
            {{ new Date(tripnote.return).toLocaleDateString() }}
          </h2>
        </div>
        <n-button>
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
        </n-button>
      </div>
      <div class="user-time">
        <p>Created By
          <a>
            {{ tripnote.user }}
          </a>
        </p>
        <p>{{ new Date(tripnote.created).toLocaleDateString() }}</p>
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

const tripnote = reactive({
  _id: '',
  user: '',
  title: '',
  image: [],
  departure: '',
  return: '',
  created: '',
  post: '',
  ispost: ''
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes/' + route.params.id)
    tripnote._id = data.result._id
    tripnote.title = data.result.title
    tripnote.image = data.result.image
    tripnote.departure = data.result.date[0].departure
    tripnote.return = data.result.date[0].return
    tripnote.created = data.result.date[0].created
    tripnote.post = data.result.user.post
    tripnote.user = data.result.user.account
    tripnote.ispost = data.result.ispost
    console.log(tripnote.roundtrip)
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

<style lang="scss" src="../../style/itinerary.scss">
</style>