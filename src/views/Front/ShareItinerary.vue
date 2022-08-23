<template>
  <div id="ShareItinerary">
    <div class="container">
      <h1>分享行程</h1>
      <n-data-table :columns="Itinerarylist" :data="tripnotes" :pagination="pagination" :bordered="false" />
    </div>
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios'
import { NImage, NButton } from 'naive-ui'

const tripnotes = reactive([])
const Itinerarylist = reactive([
  {
    title: '圖片',
    key: 'image',
    render(row) {
      return h(NImage, {
        width: "100",
        src: row.image
      });
    }
  },
  {
    title: '標題',
    key: 'title'
  }, {
    title: '發布',
    key: 'isPost',
    render(row) {
      return h(NButton, {
        strong: true,
        tertiary: true,
        size: "small",
        onClick: () => cancelPost(row.idx)
      }, { default: () => "取消發布" })
    }
  }
])
const pagination = reactive({ pageSize: 10 })
const cancelPost = (index) => {
  tripnotes[index].ispost = false
  console.log(tripnotes)
}
const init = async () => {
  try {
    let idx = 0
    const { data } = await apiAuth.get('/tripnotes/post')
    tripnotes.push(...data.result)
    tripnotes.forEach(item => item.idx = idx++)
    console.log(tripnotes)
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: '失敗',
      text: '載入錯誤'
    })
  }
}
init()
</script>