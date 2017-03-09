import  Vue from "vue";
export default {
    state:{
        newslist:[],
        newsdetail:{},
        newstable:[{
            date: '2016-05-02',
            name: '张三',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '李四',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
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