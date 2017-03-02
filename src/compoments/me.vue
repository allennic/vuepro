<template>
    <div>
        <myage v-bind:value="age"></myage>
        <myname v-bind:value="name"></myname>
    </div>
</template>

<script>
    import myage from './myage.vue'
    import myname from './myname.vue'
    export default{
        props:["name","age"],
        compoments:{
            'myage':myage,
            'myname':myname
        }
//        data: ()=> {
//            return {}
//        }
    }
</script>
<style>

</style>