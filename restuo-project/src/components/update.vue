<template>
    <Header />
<h1>update resturanrt</h1>
<div class="input-field-select">
<form action="">
    <input type="text" v-model="resturants.name" placeholder="Enter name...">
            <input type="text" v-model="resturants.address" placeholder="Enter address...">
            <input type="text" v-model="resturants.contact" placeholder="Enter contact...">
            <button type="button" @click="addresturant">update new resturant</button>
</form>
</div>
</template>
<script>
import axios from 'axios'
 import Header  from './Header.vue'
 export default{
    name:'update',
    components:{
        Header
    },
    data(){
        return{
          resturants:{
                name:'',
            address:'',
            contact:''
            }
         
        }
    },
   async mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'UserLogin'})
        }
        const result= await axios.get("http://localhost:3000/resturant/" +this.$route.params.id);
        console.log(result)

        this.resturants=result.data;
       
    }
 }
</script>
<style>


</style>