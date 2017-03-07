<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <div class="form-group">
            <label   class="col-sm-2 control-label">用户名:</label>
            <div class="col-sm-10">
                <input type="text" v-model="username"
                       v-uname="showLabel" class="form-control"  v-on:change="userNameChange" :placeholder="placeholder"  />


            </div>
        </div>


    </div>
</template>
<style>

</style>
<script>

    export default{
        props:['placeholder'],
        data:function(){
            return {
                username:"",
                showErrorLabel:false
            }
        },
        methods:{
            showLabel()
            {
                if(this.checkUserName(this.username))
                    this.showErrorLabel=false;
                else
                    this.showErrorLabel=true;
            },
            userNameChange()
            {
                this.$emit("childChange","username",this.username)
            }
        }


    }
</script>
