<template>
  <div id="TopTrip">
    <div class='container'>
      <h1>參考行程</h1>
      <div class="wrapper">
        <n-card v-for="TripNote in TripNotes" :key="TripNote._id">
          <template #cover>
            <n-image :src="TripNote.image" />
          </template>
          <div class="content">
            <h2>{{ TripNote.title }}</h2>
            <p>Created By <span>{{ (TripNote.user.account).toUpperCase() }}</span></p>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../plugins/axios'
import Swal from 'sweetalert2'

const TripNotes = reactive([])

const getTripNotes = async () => {
  try {
    const { data } = await api.get('/tripnotes/userall')
    TripNotes.push(...data.result)
    console.log(TripNotes)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
getTripNotes()
</script>