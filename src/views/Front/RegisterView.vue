<template>
  <div id="Register">
    <h1>註冊</h1>
    <n-form ref="formRef" :model="form" :rules="rules" @submit.prevent="register">
      <!-- path:"rules 裡面的 account"-->
      <n-form-item label="帳號" path="account">
        <n-input v-model:value="form.account" placeholder="輸入帳號" minlength="4" maxlength="20" round />
      </n-form-item>
      <n-form-item label="信箱" path="email">
        <n-input v-model:value="form.email" placeholder="輸入信箱" round />
      </n-form-item>
      <n-form-item label="密碼" path="password">
        <n-input type="password" v-model:value="form.password" placeholder="輸入密碼" minlength="4" maxlength="20" round />
      </n-form-item>
      <n-form-item>
        <n-spin :show="show">
          <input class='registerBtn' type="submit" value="註冊">
        </n-spin>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '@/plugins/axios.js'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const formRef = ref(false)
const show = ref(false)

const form = reactive({
  account: '',
  email: '',
  password: '',
})
const rules = reactive({
  account: [
    { required: true, message: '帳號必填', trigger: 'blur' },
    { min: 4, max: 20, message: '帳號長度為 4 到 20 個字', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]+$/, message: '帳號只能由英數字組成', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '信箱必填', trigger: 'blur' },
    { pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/, message: '信箱格式錯誤', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密碼必填', trigger: 'blur' },
    { min: 4, max: 20, message: '密碼長度為 4 到 20 個字', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]+$/, message: '密碼只能由英數字組成', trigger: 'blur' }
  ],
})

const register = () => {
  if (!formRef.value) return
  show.value = true

  formRef.value?.validate(async (errors) => {
    try {

      if (!errors) {
        await api.post('/users', form)
        await Swal.fire({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        router.push('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (errors.isAxiosError && errors.response.data) ? errors.response.data.message : '發生錯誤'
        })
        show.value = false
      }
    } catch (error) {
      await Swal.fire({
        icon: 'warning',
        title: '帳號已被註冊',
        text: '請重新輸入'
      })
      show.value = false
    }
  })
}
</script>

<style lang="scss">
#Register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1F2E3C;

  h1 {
    color: #E8CDA2;
  }

  .n-form {
    width: 50%;

    .n-form-item {
      .n-form-item-label {
        color: #fff;
      }
    }

  }


  .registerBtn {
    width: 100%;
    border: none;
    background-color: #E8CDA2;
    color: #1F2E3C;
    font-size: 16px;
    font-weight: 700;
    padding: 8px;
    border-radius: 30px;
    cursor: pointer;

    &:disabled {
      background-color: #999999;
      color: rgb(233, 233, 233);
      cursor: wait;
    }
  }
}
</style>