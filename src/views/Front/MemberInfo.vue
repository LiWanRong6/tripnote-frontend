<template>
  <div id="MemberInfo">
    <div class="container">
      <h1>基本資料</h1>
      <n-form>
        <n-form-item>
          <n-avatar round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"></n-avatar>
        </n-form-item>
        <n-form-item label="帳號">
          <n-input></n-input>
        </n-form-item>
        <n-form-item label="信箱">
          <n-input></n-input>
        </n-form-item>
        <n-form-item label="簡介">
          <n-input type="textarea"></n-input>
        </n-form-item>
        <n-form-item class="btn-group">
          <input type="button" value="修改" class="Btn">
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


<style lang="scss" src="../../style/memberinfo.scss">
</style>