<template>
  <div id="PlanItinerary">
    <div class="container">
      <h1>規劃行程</h1>
      <n-form @submit.prevent="submit">
        <n-form-item>
          <n-upload list-type="image-card" v-model:file-list="form.image" accept="image/*" directory-dnd :max="1">
          </n-upload>
        </n-form-item>
        <n-form-item label="行程名稱">
          <n-input v-model:value="form.title"></n-input>
        </n-form-item>
        <n-form-item label="行程日期">
          <n-date-picker type="date" v-model:value="form.departure" />
          <n-date-picker type="date" v-model:value="form.return" />
        </n-form-item>
        <n-form-item>
          <input type="button" value="取消" class="Btn" @click="goToHome">
          <input type="submit" value="確認" class="Btn">
        </n-form-item>
      </n-form>
    </div>
  </div>
  <!-- Footer ------------------------------------------------------------->
  <div id="Footer">
    <div class="container">
      <p>©COPYRIGHT 2022
        <router-link to="/contact">
          <span>聯絡我們</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const router = useRouter()
const form = reactive({
  title: '',
  image: [],
  ispost: false,
  departure: Date.now(),
  return: Date.now(),
  created: Date.now(),
  post: ''
})

const goToHome = () => {
  router.push('/')
}

const submit = async () => {
  const fd = new FormData()
  for (const key in form) {
    if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
      console.log(form[key])
    } else {
      fd.append(key, form[key])
    }
  }
  try {
    await apiAuth.post('/tripnotes', fd)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '新增失敗'
    })
  }
}
</script>

<style lang="scss" src="../../style/planItinerary.scss">
</style>
