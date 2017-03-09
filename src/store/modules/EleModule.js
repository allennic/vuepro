/**
 * Created by Administrator on 2016/12/3.
 */
import  Vue from "vue";

export default {

    state:{
        hot:[],//精选
    },
    mutations:{
        setHot(state,data)
        {
            state.hot=data;
        }
    },
    actions:{
        getHot(context)
        {

            //加载 loading效果
            let loading=Vue.prototype.$loading({
                text:"劳资正在疯狂加载中。。。"
            });
            Vue.http.get("http://localhost:9903/test/eleui.php?t=1",
                {},{emulateJSON:true}).then(function(res){
                loading.close();
                context.commit("setHot",res.body);

            },function(){})

        }
    }

}