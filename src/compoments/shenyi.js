
export default {
   install(Vue)
   {
       Vue.component("shenyi-text",{
           template:" <div><input type='text' class='form-control'  v-model='textValue'/>" +
           "<label v-if='showErrorLable' class='label label-danger'>用户名不合法</label></div>",
           data(){
               return {
                   textValue:""
               }
           },
           computed:{
               showErrorLable()
               {
                   if(/\w{6,20}/.test(this.textValue) || this.textValue=="") {
                       return false;
                   }
                   return true;
               }
           }
       })

        Vue.prototype.checkUserName=(value)=>{
            if(value=="") return true;//如果没填，默认不显示
            if(/\w{6,20}/.test(value))
            {
                return true;
            }
            return false;
        }
       Vue.prototype.errorLabel=null;
       Vue.prototype.hasError=false;
        Vue.directive("uname",{    //自定义指令v-uname
            bind(){
                let error=Vue.extend({
                    template:'<label class="label label-danger">用户名不合法</label>'
                });
                Vue.errorLabel=(new error()).$mount().$el;
                console.log("begin");
            },
            update(el,binding,vnode)
            {

                //把业务写在插件里
                if(/\w{6,20}/.test(el.value))
                {
                    //vnode.context[binding.expression]=false;
                    if(Vue.hasError) {
                        el.parentNode.removeChild(Vue.errorLabel)
                        Vue.hasError=!Vue.hasError;
                    }
                }
                else
                {
                    if(!Vue.hasError)
                    {
                        el.parentNode.appendChild(Vue.errorLabel);//显示 错误label
                        Vue.hasError=!Vue.hasError;
                    }
                }


                    //vnode.context[binding.expression]=true;//显示错误标签
                // console.log(el);
                // console.log(binding);
                // console.log(vnode);


                //业务写在组件里
                //vnode.context[binding.expression]();  //绑定showErrorLabel
            }
        })
   }
}
