
export default {
   install(Vue)
   {
        Vue.prototype.checkUserName=(value)=>{
            if(value=="") return true;//如果没填，默认不显示
            if(/\w{6,20}/.test(value))
            {
                return true;
            }
            return false;
        }
        Vue.directive("uname",{
            bind(){
                console.log("begin");
            },
            update(el,binding,vnode)
            {

                //把业务写在插件里
              /*  if(/\w{6,20}/.test(el.value))
                {
                    vnode.context[binding.expression]=false;
                }
                else
                    vnode.context[binding.expression]=true;//显示错误标签
                console.log(el);
                console.log(binding);
                console.log(vnode);*/


                //业务写在组件里
                vnode.context[binding.expression]();
            }
        })
   }
}
