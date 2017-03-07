<template xmlns:v-on="http://www.w3.org/1999/xhtml">

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" v-on:click="submit" class="btn btn-success">提交</button>
        </div>
    </div>

</template>
<style>

</style>
<script>

    export default{

        methods:{
            submit()
            {
                //alert(this.$parent.$data.username)
                this.$store.commit("showUserName");

            }
        }
    }
</script>
