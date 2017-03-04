import Vue from "vue";

import userlogin from  "./../compoments/user-login.vue";
import pagenav from "./../compoments/page-nav.vue";
import newslist from "./../compoments/news-list.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// let me_name={
//     template:'<div  id="me">我的名字是shenyi{{name}}</div>',
//         data: ()=>{
//         return {name:"shenyi"}
//     }
// }

const routerConfig = new VueRouter({
    routes:[
        { path: '/news', component: newslist },
        { path: '/login', component: userlogin }
    ]
})

Vue.component('page-nav', pagenav)
let myvue=new Vue({
    el:".container",
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