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
import { useRouter } from 'vue-router'
const router = useRouter()

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
        onClick: () => postTripnote(row._id, row.idx)
      }, { default: () => "取消發布" })
    }
  },
  {
    title: '編輯',
    key: 'edit',
    render(row) {
      return h(NButton, {
        strong: true,
        tertiary: true,
        size: "small",
        onClick: () => editTripnote(row._id)
      }, { default: () => "編輯" })
    }
  }
])
const pagination = reactive({ pageSize: 10 })
const postTripnote = async (id, idx) => {
  tripnotes[idx].ispost = false
  try {
    await apiAuth.patch('/tripnotes/post/' + id, tripnotes[idx])
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '取消分享'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '分享失敗'
    })
  }
}
const editTripnote = async (id) => {
  router.push('/edit-share-tripnote/' + id)
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

<style lang="scss">
#ShareItinerary {
  padding: 60px 0;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  h1 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
  }
}
</style>