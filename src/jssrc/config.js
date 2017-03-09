/**
 * Created by Administrator on 2016/12/6.
 */
import eltable from "./../compoments/el-table.vue";
import eleindex from "./../compoments/elementui/ele-index.vue";

import newsdetail from "./../compoments/news-detail.vue";
import VueRouter from 'vue-router'
import elhot from "./../compoments/elementui/ele-hot.vue";
import eluserinfo from "./../compoments/elementui/ele-form.vue";
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
export const routerConfig = new VueRouter({
    routes:[
        { path: '/', component: newslist },
        { path: '/news', component: newslist,name:"newslist"},
        { path: '/news_it', component: newslist,name:"newslist_it"},
        { path: '/news/:newsid', component: newsdetail,name:"newsdetail"},
        { path: '/login', component: userlogin,name:"userlogin"},
        { path: '/eltable', component: eltable,name:"eltable"},
        { path: '/elindex', component: eleindex,name:"eleindex",
            children:[
                {path:"hot",component:elhot,name:"elhot"},
                {path:"userinfo",component:eluserinfo,name:"eluserinfo"}
            ]
        }
    ]
})