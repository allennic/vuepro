<template>
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
            <div class="col-sm-10">
                <input type="password" v-model="userpass"
                       class="form-control"  placeholder="请输入密码">
            </div>
        </div>


    </div>
</template>
<style>
     
</style>
<script>
     
    export default{
        data(){
            return{
                userpass:''
            }
        }
    }
</script>
