/**
 * Created by Administrator on 2016/12/6.
 */
import  Vue from "vue"
import {routerConfig} from "./../../jssrc/config";

export default{
    state:{
        UserForm:{
            truename:"",
            age:"",
            birthday:""
        }
        ,
        CheckRules:{
            truename:[
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '真实姓名在3-5个字符', trigger: 'blur' }
            ],
            age:[
                { validator: (rule, value, callback)=>{
                    if(/^\d+$/.test(value)==false)
                    {
                        callback(new Error("年龄不合法"));
                    }
                    else
                        callback();//这句话一定要有，否则最后验证表单时会出错
                }, trigger: 'blur' }
            ]
        }

    }
    ,actions:{
        setUserInfo(context){
            routerConfig.push({name:"newslist"});
        }
    }
}