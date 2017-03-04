<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="form-group">
        <label   class="col-sm-2 control-label">所属区域:</label>
        <div class="col-sm-4 ">
           <select class="form-control" v-model="selectedArea" v-on:change="selectedChange">
                <option v-for=" area in areas" v-bind:value="area.area_id">{{area.area_text}}</option>

            </select>

        </div>
    </div>
</template>
<style>
     
</style>
<script>
     
    export default{
        data(){
            return{
                selectedArea:0,
                areas:[
                    {'area_id':0,'area_text':'--请选择--'},
                    {'area_id':1,'area_text':'北京'},
                    {'area_id':2,'area_text':'上海'},
                ]
            }
        },
        methods:{
            selectedChange()
            {
                this.$emit("childChange","userarea",this.selectedArea);
            }
        }
    }
</script>
