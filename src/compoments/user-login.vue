<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name placeholder="输入你的用户名" ref="uname"></user-name>
            <user-pass></user-pass>
            <user-submit></user-submit>
        </form>
    </div>
</template>
<style>
    @import "./../css/bootstrap.css";
    #user{
      margin-top: 50px;
    }
</style>
<script>
     import username from "./user/user-name.vue";
     import userpass from "./user/user-pass.vue";
     import usersubmit from "./user/user-submit.vue";
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'user-name':username,
            'user-submit':usersubmit,
            'user-pass':userpass
        }
    }
</script>
