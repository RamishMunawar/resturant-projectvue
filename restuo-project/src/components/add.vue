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
        addresturant(){
     console.log(this.resturants)
        }
    }
}
</script>