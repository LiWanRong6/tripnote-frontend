<template>
  <div id="AdminAttraction">
    <div class="container">
      <div id="header">
        <h1>景點管理</h1>
        <n-button class="addBtn" @click="openModal('', -1)">新增景點</n-button>
      </div>
      <!-- 新增景點的表單 -->
      <n-modal v-model:show="form.showModal" :mask-closable="false" preset="card"
        :title="form._id.length > 0 ? '編輯景點資訊' : '新增景點資訊'" style="width:800px">
        <n-form ref="formValid" label-placement="left" :model="form" :rules="rules" @submit.prevent="submitAttraction">
          <n-form-item label="名稱" path="name">
            <n-input v-model:value='form.name' />
          </n-form-item>
          <n-form-item label="地址">
            <n-input v-model:value='form.address' />
          </n-form-item>
          <n-form-item label="經度">
            <n-input v-model:value='form.longitude' />
          </n-form-item>
          <n-form-item label="緯度">
            <n-input v-model:value='form.latitude' />
          </n-form-item>
          <n-form-item label="圖片">
            <!-- v-model:file-list 圖片才讀的到 -->
            <n-upload v-model:file-list="form.image" accept='image/*' directory-dnd :max="1">
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
          <n-form-item label="敘述">
            <n-input type="textarea" v-model:value='form.description' maxlength="200" show-count style="height:200px" />
          </n-form-item>
          <n-form-item label="官網">
            <n-input v-model:value='form.official' />
          </n-form-item>
          <n-form-item label="電話">
            <n-input v-model:value='form.phone' />
          </n-form-item>
          <n-form-item>
            <input type="button" @click="form.showModal = false" value="取消">
            <n-spin :show="form.submitting">
              <input type="submit" value="確認">
            </n-spin>
          </n-form-item>
        </n-form>
      </n-modal>
      <n-data-table :columns="attractionlist" :data="attractions" :bordered="false" v-model:pagination="pagination" />
    </div>
  </div>
</template>
<script setup>
import { reactive, h } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/plugins/axios.js'
import { NButton, NImage } from "naive-ui"

const attractions = reactive([])
console.log(attractions)
const form = reactive({
  _id: '',
  name: '',
  address: '',
  longitude: '',
  latitude: '',
  image: [],
  description: '',
  official: '',
  phone: '',
  idx: -1,
  showModal: false,
  formValid: false,
  submitting: false
})
const rules = reactive({
  name: [
    { required: true, message: '景點名稱必填', trigger: 'blur' },
  ]
})

// 新增、編輯、刪除
const submitAttraction = async () => {
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'formValid', 'showModal', 'submitting'].includes(key)) continue
    else if (key === 'image') {
      if (form.image.length > 0) fd.append(key, form[key][0].file)
    }
    else fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/attractions', fd)
      console.log(fd)
      attractions.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/attractions/' + form._id, fd)
      attractions[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.showModal = false
  } catch (error) {
    console.log(error)
    form.showModal = false
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '新增失敗'
    })
  }
  form.submitting = false
}
const delAttraction = async (id) => {
  Swal.fire({
    icon: 'warning',
    title: '確定刪除?',
    showCancelButton: true,
    cancelButtonColor: '#d33'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await apiAuth.delete('/attractions/' + id)
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

// openModal時，清空表單
const openModal = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = attractions[idx].name
    form.address = attractions[idx].address
    form.longitude = attractions[idx].longitude
    form.latitude = attractions[idx].latitude
    form.description = attractions[idx].description
    form.official = attractions[idx].official
    form.phone = attractions[idx].phone
  } else {
    form.name = ''
    form.address = ''
    form.longitude = ''
    form.latitude = ''
    form.description = ''
    form.official = ''
    form.phone = ''
  }
  form.image = []
  form.idx = idx
  form.showModal = true
  form.formValid = false
  form.submitting = false
}


// 下方景點列表、分頁
const attractionlist = reactive([
  {
    title: '圖片',
    key: 'image',
    render(row) {
      return h(NImage, {
        width: "100",
        src: row.image
      });
    }
  },
  {
    title: '景點',
    key: 'name'
  }, {
    title: '地址',
    key: 'address'
  },
  {
    title: '官網',
    key: 'official',
  }, {
    title: '電話',
    key: 'phone'
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
      }, { default: () => "編輯" });
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
        onClick: () => delAttraction(row._id)
      }, { default: () => "刪除" });
    }
  }
])

const pagination = reactive({ pageSize: 5 })

// 取得所有景點資訊
const init = async () => {
  try {
    let idx = 0
    const { data } = await apiAuth.get('/attractions/all')
    attractions.push(...data.result)
    console.log(attractions)
    attractions.forEach(item => { item.idx = idx++ })
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
#AdminAttraction {
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

    .bg-red {
      color: white;
      background-color: rgb(212, 28, 28);
    }

  }
}
</style>