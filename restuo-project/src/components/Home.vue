<template>
<div>
    <Header />
    <h1>welcome {{ name }} Home page!</h1>
    <div class="table-home">
    <table border="1">
        <tr>
            <th>id</th>
            <th>name</th>
            <th>address</th>
            <th>contact</th>
            <th>Action</th>
        </tr>
        <tr v-for="resto in resturant" :key="resto.id">
            <td>{{resto.id}}</td>
            <td>{{resto.name}}</td>
            <td>{{resto.address}}</td>
            <td>{{resto.contact}}</td>
            <td><router-link :to="/update/+resto.id">Update</router-link>
            <button class="delete-btn" v-on:click="deleteResturant(resto.id)">Delete</button>
            </td>
          
        </tr>
    </table>
</div>
</div>
</template>
<script>
import axios from 'axios'
import Header  from './Header.vue'
export default{
    name:'Home',
    components:{
        Header
    },
    data(){
          return{
            name:'',
            resturant:[],
          }
    },
    methods:{
     async   deleteResturant(id){
            let result= await axios.delete("http://localhost:3000/resturant/"+id);
            if(result.status==200){
                this.loaded()
            }
        },
        async loaded(){
        let user=localStorage.getItem('user-info');
        this.name= JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'UserLogin'})
        }
        let result= await axios.get("http://localhost:3000/resturant");
        console.log(result)
        this.resturant=result.data
    },
    },

    mounted(){
       this.loaded()
    }
}
</script>

<style>
td{
    width:160px;
    height:40px;
}
.delete-btn{
    background: transparent;
    color: red;
    border: none;
    cursor: pointer;
}
.table-home{
    display: flex;
    justify-content: center;
}
</style>