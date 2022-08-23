<template>
  <div id="TripinfoView">
    <div class="container">
      <h1>{{ tripinfo.name }}</h1>
      <div class="user-time">
        <p class="gray">Created By
          <span>{{ tripinfo.user }}</span>
        </p>
        <p class="gray">{{ new Date(tripinfo.postdate).toLocaleDateString() }}</p>
      </div>
      <n-image class="main-img" :src="tripinfo.image" preview-disabled></n-image>
      <p class="description">{{ tripinfo.description }}</p>
      <br>
      <!-- <div v-for="c in content" :key="c" class="content">
        <n-image v-if="c.includes('http')" :src="c" preview-disabled></n-image>
        <p v-else>{{ c }}</p>
      </div> -->
      <p class="content" v-html="tripinfo.content"></p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import { useRoute } from 'vue-router'
// import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'



const route = useRoute()
// const user = useUserStore()

// const content = reactive([])
const tripinfo = reactive({
  _id: '',
  name: '',
  image: '',
  description: '',
  content: '',
  user: '',
  postdate: ''
})

const init = async () => {
  try {
    const { data } = await api.get('/tripinfos/' + route.params.id)
    tripinfo._id = data.result._id
    tripinfo.name = data.result.name
    tripinfo.image = data.result.image
    tripinfo.description = data.result.description
    tripinfo.content = data.result.content
    tripinfo.user = data.result.user
    tripinfo.postdate = data.result.postdate
    // const getContent = function () {
    //   for (let i = 0; i <= JSON.parse(tripinfo.content).ops.length; i++) {
    //     if (typeof (JSON.parse(tripinfo.content).ops[i].insert) === 'string') {
    //       content.push(JSON.parse(tripinfo.content).ops[i].insert)
    //     }
    //     else {
    //       content.push(JSON.parse(tripinfo.content).ops[i].insert.image)
    //     }
    //   }
    // }
    // getContent()

  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得旅遊資訊失敗'
    })
  }
}
init()


</script>
<!-- !! TypeError: Cannot read properties of undefined (reading 'insert') -->

<style lang="scss" src="../../style/tripinfo.scss">
</style>