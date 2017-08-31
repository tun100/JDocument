<template>
  <div class='addContent-wrapper'>
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <el-row type='flex' justify='space-around'>
        <el-col :span="9">
          <div class='form-title'>总体描述</div>
          <el-form-item label="接口名称" prop='name' :rules="{
                                                                              required: true, message: '接口名称不能为空', trigger: 'blur'
                                                                             }">
            <el-input v-model="form.name" placeholder="请输入接口的名称"></el-input>
          </el-form-item>
          <el-form-item label="接口描述" prop='desc' :rules="{
                                                                            required: true, message: '接口描述不能为空', trigger: 'blur'
                                                                          }">
            <el-input type="textarea" :autosize="{minRows:6}" placeholder="请输入接口的总体描述" v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex' justify='space-around'>
        <el-col :span="9">
          <div class='form-title'>全局设置</div>
          <el-form-item label="HTTP方法" prop="global.method" :rules="{
                                                                            required: true, message: 'HTTP方法不能为空', trigger: 'blur'
                                                                          }">
            <el-select filterable v-model="form.global.method" placeholder="请选择HTTP方法名">
              <el-option :label="item" :value="item" :key="index" v-for="(item,index) in CONST.METHOD"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="HTTP版本" prop='global.version' :rules="{
                                                                              required: true, message: 'HTTP版本不能为空', trigger: 'blur'
                                                                            }">
            <el-input v-model="form.global.version" placeholder="请输入HTTP的版本"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex' justify='space-around'>
        <el-col :span='9'>
          <div class='form-title'>请求端</div>
          <el-form-item label="请求URL" prop='request.url' :rules="{
                                                                              required: true, message: '请求URL不能为空', trigger: 'blur'
                                                                            }">
            <el-input v-model="form.request.url" placeholder="请输入请求的URL路径"></el-input>
          </el-form-item>
          <el-form-item label="Content-Type" prop='request.contentType' :rules="{
                                                                              required: true, message: 'Content-Type不能为空', trigger: 'blur'
                                                                            }">
            <el-select filterable v-model="form.request.contentType" placeholder="请选择Content-Type">
              <el-option :label="item" :value="item" :key="index" v-for="(item,index) in CONST.CONTENT_TYPE"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发送数据示例" prop='request.format' :rules="{
                                                                            required: true, message: '发送数据示例不能为空', trigger: 'blur'
                                                                          }">
            <el-input type="textarea" :autosize="{minRows:6}" placeholder="请输入发送数据示例" v-model="form.request.exampleData"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex' justify='space-around'>
        <el-col :span='9'>
          <div class='form-title'>响应端</div>
          <el-form-item label="Content-Type" prop='response.contentType' :rules="{
                                                                              required: true, message: 'Content-Type不能为空', trigger: 'blur'
                                                                            }">
            <el-select filterable v-model="form.response.contentType" placeholder="请选择Content-Type">
              <el-option :label="item" :value="item" :key="index" v-for="(item,index) in CONST.CONTENT_TYPE"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="响应数据示例" prop='response.format' :rules="{
                                                                            required: true, message: '响应数据示例不能为空', trigger: 'blur'
                                                                          }">
            <el-input type="textarea" :autosize="{minRows:6}" placeholder="请输入发送数据示例" v-model="form.response.exampleData"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type='flex' justify='space-around'>
        <el-col :span='9'>
          <div class='form-title'>备注</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span='9'>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">新增接口</el-button>
            <el-button @click="onCancel">重置数据</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import ContentTypeConst from '../../_const/contentType'

export default {
  data() {
    return {
      CONST: {
        METHOD: ["GET", "POST", "OPTION", "HEAD", "PUT", "DELETE", "CONNECT", "TRACE"],
        CONTENT_TYPE: ContentTypeConst
      },
      form: {
        name: '',
        desc: '',
        global: {
          method: "GET",
          version: "1.0"
        },
        request: {
          url: "",
          exampleData: "",
          contentType: "X-WWW-FORM-URLENCODED"
        },
        response: {
          exampleData: "",
          contentType: "X-WWW-FORM-URLENCODED"
        }
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log('Submit成功提交');
        } else {
          console.log('错误的Submit提交');
          return false;
        }
      });
    },
    onCancel() {
      this.$refs["form"].resetFields();
    }
  }
}
</script>

<style scoped lang='scss'>
.addContent-wrapper {
  padding-top: 50px;
  .form-title {
    font-size: 20px;
    margin-bottom: 17px;
  }
}
</style>
