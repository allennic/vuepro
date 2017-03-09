<template>
    <div>
    <el-row v-for="hotNews in this.$store.state.ele.hot" justify="start" :gutter="2" align="middle">
        <el-col :span="6"><div class="grid-content bg-purple-dark hotimg">
        <img :src="hotNews.image"/>
       </div></el-col>
        <el-col :span="18"><div class="grid-content bg-purple-dark hotcontent">
            <h2>{{hotNews.title}}</h2>
            <p>{{hotNews.desc}}</p>
        </div></el-col>


    </el-row>

        </div>
</template>
<style>
    .el-row {
        margin-bottom: 20px;

    }
    .hotcontent{margin:0; }
    .hotcontent h2{margin:0}
    .hotcontent p{color:grey;text-indent: 2em;margin-top:10px;padding:5px}
    .el-col {
        border-radius: 4px;
    }
    .el-col .hotimg{text-align: right}
    .el-col .hotimg img{width:90%;}
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
<script>
     
    export default{
        mounted()
        {
            this.$store.dispatch("getHot");
        },
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
