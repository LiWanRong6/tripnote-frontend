<template>
  <div id="TopTrip">
    <div class='container'>
      <h1>參考行程</h1>
      <n-input-group class="search">
        <input type="search" v-model.lazy.trim="Keyword" placeholder="搜尋行程名稱">
        <button @keydown="SearchAttraction" @click="SearchAttraction">搜索</button>
      </n-input-group>
      <div class="wrapper">
        <div class="card" v-for="TripNote in SearchAttraction" :key="TripNote._id">
          <router-link :to="'/othertripnote/' + TripNote._id">
            <n-card>
              <template #cover>
                <n-image :src="TripNote.image" preview-disabled />
              </template>
              <div class="content">
                <h2>{{ TripNote.title }}</h2>
                <p>Created By <span>{{ (TripNote.user.account).toUpperCase() }}</span></p>
              </div>
            </n-card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { api } from '../../plugins/axios'
import Swal from 'sweetalert2'

const Keyword = ref()
const TripNotes = reactive([])

const getTripNotes = async () => {
  try {
    const { data } = await api.get('/tripnotes/userall')
    TripNotes.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getTripNotes()

const SearchAttraction = computed(() => {
  return TripNotes.filter(item => item.title.match(Keyword.value))
})
</script>