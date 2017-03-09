<template>
    <div>
        <el-form ref="form" :model="UserForm"
                 :rules="this.$store.state.userinfo.CheckRules"  label-width="190px">
            <el-form-item label="真实姓名" prop="truename">
                <el-input v-model="UserForm.truename" ></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-col :span="8">
                <el-input v-model="UserForm.age" ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="出生年月">
                <el-date-picker type="date" placeholder="选择日期"
                                v-model="UserForm.birthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitInfo">提交</el-button>
            </el-form-item>
         </el-form>
    </div>
</template>
<style>
     
</style>
<script>

    export default{
        created(){
            this.UserForm=this.$store.state.userinfo.UserForm;
        },
        beforeDestory(){
          this.$store.state.userinfo.UserForm=this.UserForm;
        },
        data(){
            return{
               UserForm:{
                   truename:"",
                   age:"",
                   birthday:""
               }
            }
        },
        methods:{
            submitInfo()
            {
                this.$refs.form.validate(function(result){
                    if(result)
                    {
                        this.$store.dispatch("setUserInfo")
                    }
                    else {
                        alert("表单验证不合法")
                    }
                }.bind(this))
            }
        },
    }
</script>
