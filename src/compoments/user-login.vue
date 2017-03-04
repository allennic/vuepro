<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center" v-if="isadmin" >管理员登录</h2>
        <h2 class="text-center" v-else>用户登录</h2>

        <form class="form-horizontal" role="form">
            <user-name placeholder="输入你的用户名" ref="uname"
                       v-on:childChange="setValue"  ></user-name>
            <user-pass></user-pass>
            <user-area v-on:childChange="setValue"></user-area>
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
    import userarea from "./user/user-area.vue";
    export default{
        data(){
            return {
                username:"",
                userpass:"",
                isadmin:false,
                userarea:0

            }
        },
        methods:{
//            setUserName(uname)
//            {
//                this.username=uname;
//            },
            setValue(key,value)
            {
                this.$data[key]=value;
            },
            show()
            {
                alert(this.username);
                //alert(this.username);
                // this.isadmin=!this.isadmin;
            }
        },
        components:{
            'user-name':username,
            'user-submit':usersubmit,
            'user-pass':userpass,
            'user-area':userarea
        }
    }
</script>
