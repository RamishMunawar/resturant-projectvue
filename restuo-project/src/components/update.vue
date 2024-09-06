<template>
    <Header />
<h1>update resturanrt</h1>
<div class="input-field-select">
<form action="">
    <input type="text" v-model="resturants.name" placeholder="Enter name...">
            <input type="text" v-model="resturants.address" placeholder="Enter address...">
            <input type="text" v-model="resturants.contact" placeholder="Enter contact...">
            <button type="button" @click="UpdateResturant">update new resturant</button>
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
    methods:{
      async  UpdateResturant(){
            const result = await axios.put('http://localhost:3000/resturant/'+this.$route.params.id, {
                    name: this.resturants.name,
                    address: this.resturants.address,
                    contact: this.resturants.contact
                });
                
                console.log(result);

                if (result.status === 200) {
                    this.$router.push({name:'Home'})
                }
              
        }
    },
    async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
        this.$router.push({ name: 'UserLogin' });
    }
    
    try {
        const result = await axios.get("http://localhost:3000/resturant/" + this.$route.params.id);
        // console.log(result);
        this.resturants = result.data;
    } catch (error) {
        console.error('Error fetching restaurant data:', error.message);
        // Handle error or show a message to the user
    }
}


 }
</script>
<style>


</style>