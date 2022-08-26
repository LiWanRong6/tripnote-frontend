<template>
  <div id="EditShareTripnote">
    <div class="container">
      <h1>{{ tripnote.title }}</h1>
      <div v-for="item in tripnote.item" :key="item._id" class="">
        <h2>{{ item.attraction.name }}</h2>
        <QuillEditor v-model:content="item.content" :toolbar="toolbar" contentType="html">
        </QuillEditor>
      </div>
      <n-button @click="shareTripnote" color="#1F2E3C">確認</n-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../plugins/axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const toolbar = reactive([{ 'header': [1, 2, 3, 4, false] }, 'bold', 'italic', 'underline', { 'align': [] }, { 'color': [] }, { 'background': [] }, 'image', 'link', 'code'])
const tripnote = reactive({
  _id: '',
  user: '',
  title: '',
  image: [],
  departure: '',
  return: '',
  created: '',
  post: Date.now(),
  ispost: '',
  item: [],
  rows: []
})
const shareTripnote = async () => {
  try {
    tripnote.ispost = true
    await apiAuth.patch('/tripnotes/item/' + route.params.id, tripnote)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '分享成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '分享失敗'
    })
  }
}
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
    tripnote.item = data.result.item
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
<style lang="scss" src="../../style/EditShareTripnote.scss">
</style>