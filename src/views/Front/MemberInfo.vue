<template>
  <div id="MemberInfo">
    <div class="container">
      <h1>基本資料</h1>
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
import { reactive } from "vue"
import { apiAuth } from "../../plugins/axios"
const user = reactive([])
const init = async () => {
  const { data } = await apiAuth.get('/users')
  user.push(data.result)
  console.log(user)
}
init()
</script>


<style lang="scss" src="../../style/memberinfo.scss">
</style>