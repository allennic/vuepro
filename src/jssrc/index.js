import Vue from "vue";

//import userlogin from  "./../compoments/user-login.vue";
import pagenav from "./../compoments/page-nav.vue";
//import newslist from "./../compoments/news-list.vue";
import newsdetail from "./../compoments/news-detail.vue";
import VueRouter from 'vue-router';
import VueResource from "vue-resource";

import shenyi from "./../compoments/shenyi";

import Vuex from "vuex";
Vue.use(Vuex);


Vue.use(VueRouter);
Vue.use(VueResource);//ajax插件
Vue.use(shenyi);

import UserModule from "./../store/modules/UserModule";
import NewsModule from "./../store/modules/NewsModule";

const vuex_store=new Vuex.Store({
    /*state:{
        user_name:"",
        newslist:[],
        newsdetail:{}
    },
    mutations:{
        showUserName(state)
        {
            alert(state.user_name)
        },
        setAgree(state,agreeNum)
        {
            state.newsdetail.agree=agreeNum;
        }
    },
    getters:{
        getNews(state){
            return state.newslist.filter(function(news){
                return !news.isdeleted;
            })
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
    }*/

    modules: {
        users: UserModule,
        news: NewsModule
    }

})

// let me_name={
//     template:'<div  id="me">我的名字是shenyi{{name}}</div>',
//         data: ()=>{
//         return {name:"shenyi"}
//     }
// }

const userlogin=r=>{
    require.ensure([],()=>{
        r(require("./../compoments/user-login.vue"));
 },"vuecs")

};
const newslist=b=>{
    require.ensure([],()=>{
        b(require("./../compoments/news-list.vue"));
 },"vuecs")
};

const routerConfig = new VueRouter({
    routes:[
        { path: '/', component: newslist },
        { path: '/news', component: newslist,name:"newslist"},
        { path: '/news/:newsid', component: newsdetail,name:"newsdetail"},
        { path: '/login', component: userlogin,name:"userlogin"}
    ]
})

Vue.component('page-nav', pagenav)
let myvue=new Vue({
    el:".container",
    store:vuex_store,
    router:routerConfig
});
// let param = {
// //     el: document.getElementById("me"),
// //     data:{
// //         name:"baouxn"
// //     }
//
//     el:'.container',
//     components:{
//         // 'me':me
//         'userlogin':userlogin
//     }
//
//
//  }
//
// let myvue=new Vue(param);
//
// window.onhashchange=function(){
//     if(window.location.hash=="#admin")
//         myvue.$children[0].$data.isadmin=true;
//     else
//         myvue.$children[0].$data.isadmin=false;
// }