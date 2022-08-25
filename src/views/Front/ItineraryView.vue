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
        <n-button @click="postTripnote">
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
      <div class="item-list">
        <div v-for="anotherTime in tripnote.rows" :key="anotherTime.id" @drop="onDrop($event, anotherTime.id)"
          @dragenter.prevent @dragover.prevent>
          <h2>{{ anotherTime.title }}</h2>
          <hr>
          <div v-for="item in getDayList(anotherTime.id)" :key="item._id" draggable="true"
            @dragstart="startDrag($event, item)">
            <div class="item-list-card">
              <div class="item-list-left">
                <n-button @click="deleteItineraryItem(item)">X</n-button>
                <div class="content">
                  <h3>{{ item.attraction.name }}</h3>
                  <p>{{ item.attraction.address }}</p>
                </div>
              </div>
              <div v-if="item.edit">
                <input v-model="item.spend" type="text" @keydown.enter="saveEditItem(item)">
              </div>
              <div v-else class="item-list-right" @dblclick="editItem(item)">${{ item.spend }}</div>
            </div>

          </div>
        </div>

        <!-- <draggable :list="tripnote.item" item-key="id" group="tripnoteItem" :component-data="{ name: 'fade' }">
          <template #item="{ element }">
            <div class="item-card">
              <div class="card-left">
                <n-button @click="deleteItineraryItem(element._id)">X</n-button>
                <div class="attraction">
                  <h3>{{ element.attraction.name }}</h3>
                  <p>{{ element.attraction.address }}</p>
                </div>
              </div>
              <div class="card-right">
                <p @dblclick="editItineraryItem(element.spend)">${{ element.spend }}</p>
              </div>
            </div>
          </template>
        </draggable> -->
      </div>
      <p class="totalSpend">旅行總花費：{{ tripnote.item.reduce((a, b) => { return a + b.spend }, 0) }}</p>
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
  ispost: '',
  item: [],
  Item_id: '',
  rows: [],
  edit: false
})

// 修改、刪除
const postTripnote = async () => {
  tripnote.ispost = !tripnote.ispost
  try {
    await apiAuth.patch('/tripnotes/post/' + tripnote._id, tripnote)
    if (tripnote.ispost) {
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '分享成功'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '取消分享'
      })
    }

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '分享失敗'
    })
  }
}
const deleteItineraryItem = async (item) => {
  try {
    for (let i = 0; i < tripnote.item.length; i++) {
      if (tripnote.item[i]._id == item._id) {
        tripnote.item.splice(i, 1)
      }
    }
    await apiAuth.patch('/tripnotes/item/' + tripnote._id, tripnote)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '刪除失敗'
    })
  }
}
const editItem = async (item) => {
  for (let i = 0; i < tripnote.item.length; i++) {
    if (tripnote.item[i]._id == item._id) {
      tripnote.item[i].edit = !tripnote.item[i].edit
    }
  }
}
const saveEditItem = async (item) => {
  try {
    for (let i = 0; i < tripnote.item.length; i++) {
      if (tripnote.item[i]._id == item._id) {
        tripnote.item[i].edit = !tripnote.item[i].edit
        tripnote.item[i].spend = Number(tripnote.item[i].spend)
      }
    }
    await apiAuth.patch('/tripnotes/item/' + tripnote._id, tripnote)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '修改成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '修改失敗'
    })
  }
}

// 行程項目拖拉
const getDayList = (list) => {
  return tripnote.item.filter((oneItem) => oneItem.list == list)
}
const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('ItemId', item._id)
}
const onDrop = async (event, list) => {
  const ItemId = event.dataTransfer.getData('ItemId')
  const oneItem = tripnote.item.find((oneItem) => oneItem._id == ItemId)
  oneItem.list = list
  await apiAuth.patch('/tripnotes/item/' + tripnote._id, tripnote)
}

// 單個行程資料
const init = async () => {
  try {
    let idx = 0
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

    tripnote.item.forEach((item) => item.idx = idx++)
    tripnote.item.forEach((item) => item.edit = false)
    // 產生天數區域
    for (let i = 0; i <= ((new Date(tripnote.return).getTime()) - (new Date(tripnote.departure).getTime())) / (1000 * 60 * 60 * 24) + 2; i++) {
      if (i === 0) {
        tripnote.rows.push({ id: i, title: '未排序' })
      }
      else {
        tripnote.rows.push({ id: i, title: 'Day' + i })
      }
    }
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