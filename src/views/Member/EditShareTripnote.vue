<template>
  <div class="container">
    <h1>【編輯分享行程】{{ tripnote[0].title }}</h1>



    <h2 v-for="item in tripnote[0].item" :key="item._id">
      {{ item.attraction.name }}
      <QuillEditor v-model:content="item.content" :toolbar="toolbar" contentType="html">
      </QuillEditor>
    </h2>
    <n-button @click="shareTripnote">確認</n-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../plugins/axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const toolbar = reactive([{ 'header': [1, 2, 3, 4, false] }, 'bold', 'italic', 'underline', { 'align': [] }, { 'color': [] }, { 'background': [] }, 'image', 'link', 'code'])
const tripnote = reactive([])
const shareTripnote = async () => {
  try {
    tripnote[0].ispost = true
    await apiAuth.patch('/tripnotes/item/' + route.params.id, tripnote[0])
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