import Vue from "vue";

import userlogin from  "./../compoments/user-login.vue";

// let me_name={
//     template:'<div  id="me">我的名字是shenyi{{name}}</div>',
//         data: ()=>{
//         return {name:"shenyi"}
//     }
// }

let param = {
//     el: document.getElementById("me"),
//     data:{
//         name:"baouxn"
//     }

    el:'.container',
    components:{
        // 'me':me
        'userlogin':userlogin
    }
    

 }

new Vue(param);