<template>
    <Header />
<h1>add resturant</h1>
 <div class="input-field-select">
<form action="">
    <input type="text" v-model="resturants.name" placeholder="Enter name...">
            <input type="text" v-model="resturants.address" placeholder="Enter address...">
            <input type="text" v-model="resturants.contact" placeholder="Enter contact...">
            <button type="button" @click="addresturant">Add new resturant</button>
</form>
</div>
</template>
<script>
import axios from 'axios'
 import Header  from './Header.vue'
export default{
    name:'add',
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
       async addresturant(){
            const result = await axios.post('http://localhost:3000/resturant', {
                    name: this.resturants.name,
                    address: this.resturants.address,
                    contact: this.resturants.contact
                });
                
                console.log(result);

                if (result.status == 201) {
                    this.$router.push({name:'Home'})
                }
              
              

        },
    mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    },
        }
    }

</script>