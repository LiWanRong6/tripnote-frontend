<template>
  <div id="Login">
    <div class="container">
      <h1>登入</h1>
      <n-form ref="formRef" :model="form" :rules="rules" @submit.prevent="login">
        <n-form-item label="帳號" path="account">
          <n-input v-model:value="form.account" placeholder="輸入帳號" minlength="4" maxlength="20" round />
        </n-form-item>
        <n-form-item label="密碼" path="password">
          <n-input type="password" v-model:value="form.password" placeholder="輸入密碼" minlength="4" maxlength="20"
            round />
        </n-form-item>

        <n-button @click="showModal = true">忘記密碼</n-button>
        <n-modal v-model:show="showModal">
          <n-card style="width: 600px" title="忘記密碼" :bordered="false" size="huge" role="dialog">
            <n-form>
              <n-input placeholder="輸入電子信箱" round />
            </n-form>
            <template #footer>
              <n-button>寄出密碼重設</n-button>
            </template>
          </n-card>
        </n-modal>

        <n-form-item>
          <input class='loginBtn' type="submit" value=" 登入">
        </n-form-item>
        <div class="toRegister">
          <p>沒有帳號？<router-link to="/register">前往註冊</router-link>
          </p>
        </div>
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
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const formRef = ref(false)

const showModal = ref(false)
const form = reactive({
  account: '',
  password: '',
})
const rules = reactive({
  account: [
    { required: true, message: '帳號必填', trigger: 'blur' },
    { min: 4, max: 20, message: '帳號長度為 4 到 20 個字', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]+$/, message: '帳號只能由英數字組成', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密碼必填', trigger: 'blur' },
    { min: 4, max: 20, message: '密碼長度為 4 到 20 個字', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]+$/, message: '密碼只能由英數字組成', trigger: 'blur' }
  ],
})


const login = () => {
  // console.log(form)
  user.login(form)
}

</script>
<style lang="scss" src="../../style/login.scss">
</style>