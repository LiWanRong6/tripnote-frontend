<template>
  <div id="Member">
    <div class="container">
      <h1>會員管理</h1>
      <n-data-table :columns="memberlist" :data="members" :pagination="pagination" :bordered="false" />
    </div>
  </div>
</template>

<script setup>
import { reactive, h } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../plugins/axios'
import { NButton } from 'naive-ui'

const members = reactive([])

// 會員列表、分頁
const memberlist = reactive([
  {
    title: '會員ID',
    key: '_id'
  },
  {
    title: '會員名稱',
    key: 'account',
    render(row) {
      return h('a', { href: '#' }, { default: () => row.account });
    }
  },
  {
    title: '權限',
    key: 'role',
    sorter: (user1, user2) => user1.role - user2.role
  },
  {
    title: '信箱',
    key: 'email',
    render(row) {
      return h('a', { href: `mailto:${row.email}` }, { default: () => "寄信" })
    }
  },
  {
    title: '刪除',
    key: 'delete',
    render(row) {
      return h(NButton, {
        strong: true,
        tertiary: true,
        size: "small",
        onClick: () => deleteMember(row._id)
      }, { default: () => "刪除" });
    }
  }
])
const pagination = reactive({ pageSize: 10 })

// 刪除
const deleteMember = async (id) => {
  Swal.fire({
    icon: 'warning',
    title: '確定刪除?',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: '確認刪除',
    cancelButtonText: '取消'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiAuth.delete('/users/' + id)
      await Swal.fire({
        icon: 'success',
        title: '成功'
      })
      init()
    }
  }).catch((error) => {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  })
}

// 取得所有會員資料
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    members.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>

<style lang="scss">
#Member {
  width: 90%;

  .container {
    width: 100%;
  }

  h1 {
    margin: 15px 0;
  }

  .n-data-table-td {
    a {
      color: rgb(168, 168, 168);
      text-decoration: none;
    }
  }
}
</style>