<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header">
                <h2> {{this.$store.state.news.newsdetail.title}}  <small>{{this.$store.state.news.newsdetail.pubtime}}</small></h2>
                <p>点赞数:{{ this.$store.state.news.newsdetail.agree}}  <button class="btn btn-success"
                                                                        @click="submitAgree">点赞</button> </p>
                <p>
                {{this.$store.state.news.newsdetail.desc}}
                </p>
            </div>

        </div>
    </div>
</template>
<style>
     
</style>
<script>

    export default{
        created()
        {
            this.$http.get("http://localhost:9903/test/news.php?newsid="+this.$route.params.newsid)
                    .then(function(res){
                        this.$store.state.news.newsdetail=res.body;
                    },function(rs){})
        },
//        data(){
//            return{
//                newsdetail:{}
//            }
//        }
        methods:{
            submitAgree()
            {
                this.$store.dispatch("agree",this.$route.params.newsid)
            }
        }
    }
</script>
