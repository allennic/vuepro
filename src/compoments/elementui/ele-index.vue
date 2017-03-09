<template>
     <div>
         <el-row>
             <el-col :span="24"><div class="grid-content bg-purple-dark">
                 <elnav></elnav>
             </div></el-col>
         </el-row>
          <router-view></router-view>
         </div>
</template>
<style>
    @import "./../../css/bootstrap.css";
</style>
<script>
     import elnav from "./ele-nav.vue"

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            elnav

        }
    }
</script>
