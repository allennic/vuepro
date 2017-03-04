<template>
    <div class="form-group">
        <label   class="col-sm-2 control-label">你的爱好:</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" v-model="inputText"/>
           <table class="table table-border" v-if="showTable()">
            <thead>
              <th>
                  类别1</th>
              <th>
                  类别2</th>
               </thead>
            <tbody>
               <tr v-for="fav in favs">
               <td>{{fav.class1}}</td>
               <td><a href='#'>{{fav.class2}}</a></td>
             </tr>
           </tbody>
           </table>

        </div>
    </div>
</template>
<style>
     
</style>
<script>
     
    export default{
        data(){

            return{
                inputText:"",
                favs:[
                    {'class1':'web开发类',"class2":"js"},
                    {'class1':'编程类',"class2":"java"},
                ]
            }
        },
        methods:{
            showTable()
            {
                if(this.inputText=="") return false;
                return true;
            }
        },
        computed:{
            getFavs()
            {
                this.favs.filter(function(abc){
                    if(abc.class2.indexOf(this.inputText)>=0)
                    {
                        return true;
                    }
                    return false;
                   }.bind(this))
            }
        }
    }
</script>
