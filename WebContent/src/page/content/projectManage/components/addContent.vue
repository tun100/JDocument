<template>
  <div class='addContent-wrapper'>
    <el-row type='flex' justify='center'>
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="接口名称" prop='name' :rules="{
              required: true, message: '接口名称不能为空', trigger: 'blur'
            }">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="接口描述" prop='desc' :rules="{
            required: true, message: '接口描述不能为空', trigger: 'blur'
          }">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button @click="onCancel">重置</el-button>
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
      this.$refs["form"].validate((valid) => {
          if (valid) {
              console.log('Submit成功提交');
          } else {
              console.log('错误的Submit提交');
              return false;
          }
      });
    },
    onCancel(){
      this.$refs["form"].resetFields();
    }
  }
}
</script>

<style scoped>
  .addContent-wrapper {
    padding-top: 50px;
  }
</style>
