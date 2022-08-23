import { defineStore } from 'pinia'
import { api, apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import router from '@/router'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      // 前台網頁會用到的資料
      token: '',
      account: '',
      email: '',
      introduction: '',
      tripnote: '',
      role: 0,
    }
  },
  getters: {
    isLogin() {
      return this.token.length !== 0
    },
    isAdmin() {
      return this.role === 1
    },
    avatar() {
      return 'https://source.boringavatars.com/beam/150/' + this.account
    }
  },
  actions: {
    async login(form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.email = data.result.email
        this.introduction = data.result.introduction
        this.tripnote = data.result.tripnote
        this.role = data.result.role
        await Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout() {
      try {
        await apiAuth.delete('/users/logout')
        await Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
        router.push('/')
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.email = ''
      this.introduction = ''
      this.tripnote = ''
      this.role = 0
    }
  }
})