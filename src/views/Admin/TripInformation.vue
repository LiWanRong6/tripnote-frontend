<template>
  <div id="Tripinfo">
    <div class="container">
      <div id="header">
        <h1>旅遊資訊</h1>
        <n-button class="addBtn" @click="openModal('', -1)">新增旅遊資訊</n-button>
      </div>

      <n-modal v-model:show="form.showModal" preset="card" :title="form._id.length > 0 ? '編輯旅遊資訊' : '新增旅遊資訊'"
        style="width:800px;" @submit.prevent="submitTripInfo">
        <n-form ref="formValid" label-placement="left" :model="form" :rules="rules">
          <n-form-item label="名稱" path="name">
            <n-input v-model:value='form.name' />
          </n-form-item>
          <n-form-item label="圖片" path="image">
            <n-upload v-model:file-list="form.image" accept="image/*" directory-dnd :max="1">
              <n-upload-dragger>
                <div style="margin-bottom: 12px">
                  <font-awesome-icon icon="fa-solid fa-image" />
                </div>
                <n-text style="font-size: 16px">
                  點擊或拖曳圖片到此區域
                </n-text>
              </n-upload-dragger>
            </n-upload>
          </n-form-item>
          <n-form-item label="創作">
            {{  form.user  }}
          </n-form-item>
          <n-form-item label="時間">
            <n-input v-model:value="form.postdate"></n-input>
          </n-form-item>
          <n-form-item label="發布">
            <n-checkbox v-model:checked="form.ispost"></n-checkbox>
          </n-form-item>
          <n-form-item label="敘述">
            <n-input type="textarea" v-model:value='form.description' maxlength="200" show-count style="height:150px" />
          </n-form-item>
          <n-form-item label="內容">
            <div class="editor">
              <QuillEditor v-model:content="form.content" :toolbar="toolbar" contentType="html">
              </QuillEditor>
            </div>
          </n-form-item>
          <n-form-item>
            <n-spin :show="form.submitting" style="display:flex;">
              <input type="submit" class="submitBtn" value="確認"
                style="background-color:#E8CDA2;border: 1px solid #1F2E3C;padding: 10px 50px;border-radius: 30px;">
            </n-spin>
          </n-form-item>
        </n-form>
      </n-modal>
      <n-data-table :columns="tripinfolist" :data="tripinfos" :bordered="false" :pagination="pagination" />
    </div>
  </div>
</template>

<script setup>
import { reactive, h } from "vue"
import { apiAuth } from "../../plugins/axios"
import Swal from "sweetalert2"
import { NButton, NGradientText } from 'naive-ui'

import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

const user = useUserStore()
const { account } = storeToRefs(user)

const tripinfos = reactive([])
const form = reactive({
  _id: '',
  name: '',
  image: [],
  description: '',
  content: '',
  user: account,
  ispost: false,
  postdate: '',
  idx: -1,
  showModal: false,
  formValid: false,
  submitting: false

})

const rules = reactive({
  name: [
    { required: true, message: '旅遊資訊標題必填', trigger: 'blur' },
  ],
  image: [
    { required: true, message: '圖片必傳', trigger: 'blur' },
  ]
})

const toolbar = reactive([{ 'header': [1, 2, 3, 4, false] }, 'bold', 'italic', 'underline', { 'align': [] }, { 'color': [] }, { 'background': [] }, 'image', 'link', 'code'])

const tripinfolist = reactive([
  {
    title: '標題',
    key: 'name'
  },
  {
    title: 'Created By',
    key: 'user'
  },
  {
    title: '狀態',
    key: 'ispost',
    render(row) {
      if (row.ispost) {
        return h(NGradientText, { type: "success", },
          { default: () => "發布" })
      }
      else {
        return h(NGradientText, { type: "info" },
          { default: () => "未發布" })
      }
    }
  },
  {
    title: '時間',
    key: 'postdate'
  },
  {
    title: '編輯',
    key: 'edit',
    render(row) {
      return h(NButton, {
        strong: true,
        tertiary: true,
        size: "small",
        onClick: () => openModal(row._id, row.idx)
      }, { default: () => "編輯" })
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
        class: "bg-red",
        onClick: () => deleteTripinfo(row._id)
      }, { default: () => "刪除" })
    }
  }
])
const pagination = reactive({ pageSize: 10 })

// 新增、修改、刪除
const submitTripInfo = async () => {
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'formValid', 'showModal', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    }
    // else if (key === 'content') {
    //   fd.append(key, JSON.stringify(form[key]))
    // }
    else fd.append(key, form[key])
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/tripinfos', fd)
      tripinfos.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/tripinfos/' + form._id, fd)
      console.log(fd)
      tripinfos[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.showModal = false
  } catch (error) {
    form.showModal = false
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '新增失敗'
    })
  }
}
const deleteTripinfo = (id) => {
  Swal.fire({
    icon: 'warning',
    title: '確定刪除?',
    showCancelButton: true,
    cancelButtonColor: '#d33'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiAuth.delete('/tripinfos/' + id)
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

const openModal = (_id, idx) => {
  form._id = _id
  form.image = []
  form.idx = idx
  form.showModal = true
  form.formValid = false
  form.submitting = false
  if (idx > -1) {
    form.name = tripinfos[idx].name
    form.ispost = tripinfos[idx].ispost
    form.description = tripinfos[idx].description
    // form.content = JSON.parse(tripinfos[idx].content)
    form.content = tripinfos[idx].content
    form.postdate = new Date(tripinfos[idx].postdate).toLocaleDateString()
  } else {
    form.name = ''
    form.ispost = false
    form.content = ''
    form.description = ''
    form.postdate = new Date().toLocaleDateString()
  }
}
const init = async () => {
  try {
    let idx = 0
    const { data } = await apiAuth.get('/tripinfos/all')
    tripinfos.push(...data.result)
    tripinfos.forEach(item => item.idx = idx++)
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
#Tripinfo {
  width: 90%;

  .container {
    width: 100%;

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
    }

    .addBtn {
      color: white;
      background-color: rgb(0, 128, 96);
    }

    .n-input.n-input--textarea.n-input--resizable {
      .n-input-wrapper {
        min-height: 150px;
      }

    }

    .bg-red {
      color: white;
      background-color: rgb(212, 28, 28);
    }
  }
}

.ql-editor {
  height: 500px;
}
</style>