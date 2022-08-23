<template>
  <div id="Itineraries">
    <div class="container">
      <h1>行程管理</h1>
      <n-data-table :columns="itinerariesList" :data="itineraries" :pagination="pagination" :bordered="false" />
    </div>
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import { NImage } from 'naive-ui'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const itineraries = reactive([])

const itinerariesList = reactive([
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
    key: 'title',
    render(row) {
      return h('a', { href: '#' }, { default: () => row.title });
    }
  }
  , {
    title: '會員名稱',
    key: 'user.account'
  }, {
    title: '建立時間',
    key: `date[0].created`
  }
])
const pagination = reactive({ pageSize: 10 })

const init = async () => {
  try {
    const { data } = await apiAuth.get('/tripnotes/all')
    itineraries.push(...data.result)
    console.log(itineraries)
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
<style lang="scss">
#Itineraries {
  width: 90%;

  .container {
    width: 100%;
  }

  h1 {
    margin: 15px 0;
  }
}
</style>