<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal" role="form">
            <user-name placeholder="输入你的用户名" ref="uname"
                       v-on:updateUserName="setUserName"  ></user-name>
            <user-pass></user-pass>
            <user-submit></user-submit>
            <input type="button" value="父组件测试" v-on:click="show"/>
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
            return {
                username:"",
                userpass:""
            }
        },
        methods:{
            setUserName(uname)
            {
                this.username=uname;
            },
            show()
            {
                alert(this.username);
            }
        },
        components:{
            'user-name':username,
            'user-submit':usersubmit,
            'user-pass':userpass
        }
    }
</script>
