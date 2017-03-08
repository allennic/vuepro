import  Vue from "vue";
export default {
    state:{
        newslist:[],
        newsdetail:{}
    },
    mutations:{

        setAgree(state,agreeNum)
        {
            state.newsdetail.agree=agreeNum;
        }
    },
    actions:{
        agree(context,_newsid)
        {
            //在这进行ajax请求，获取 点赞后的agree字段属性值
            Vue.http.post("http://localhost:9903/test/news.php",
                {newsid:_newsid},{emulateJSON:true}).then(function(res){
                context.commit("setAgree",res.body.agree)
            },function(){})

        }
    },
    getters:{
        getNews(state){
            return state.newslist.filter(function(news){
                return !news.isdeleted;
            })
        }

    }
}