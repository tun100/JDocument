<template>
  <div class='addProject-wrapper'>
    <el-row type='flex' justify='center'>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="项目名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click='onCancel'>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit(){
      
    },
    onCancel(){

    }
  }
}
</script>

<style scoped>
  .addProject-wrapper {
    padding-top: 30px;
  }
</style>
