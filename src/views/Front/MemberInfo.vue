<template>
  <div id="MemberInfo">
    <h1>基本資料</h1>
    <div class="container">
      <div class="member-info-list">
        <div class="member-info">
          <n-avatar round :size="100" :src="'https://source.boringavatars.com/beam/150/' + user.account" />
        </div>
        <div class="member-info">
          <div class="left">會員ID</div>
          <div class="right">{{ user._id }}</div>
        </div>
        <div class="member-info">
          <div class="left">帳號</div>
          <div class="right">{{ user.account }}</div>
        </div>
        <div class="member-info">
          <div class="left">信箱</div>
          <div class="right">
            <div>{{ user.email }}</div>
          </div>
        </div>
      </div>
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
import { ref } from "vue"
import { apiAuth } from "../../plugins/axios"
const user = ref([])
const init = async () => {
  const { data } = await apiAuth.get('/users')
  user.value = data.result
}
init()
</script>


<style lang="scss" src="../../style/memberinfo.scss">
</style>