<template>
  <div class="nav">
    <router-link class="nav-btn" to="/">Home</router-link>
    <router-link class="nav-btn" to="add">Add Resturant</router-link>
    <!-- <router-link class="nav-btn" to="update">Update Resturant</router-link> -->
    <a class="nav-btn" v-on:click="logout" href="">Logout</a>
  </div>
</template>
<script>
export default{
    name:'Header',
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>
.nav{
    background: rgb(149, 201, 194);
    overflow: hidden;

}
.nav .nav-btn{
    float: left;
    text-decoration: none;
    color: white;
    padding: 16px 14px;
    margin-left: 4px;
    text-align: center;
}
.nav .nav-btn:hover{
    background-color: rgb(48, 158, 158);
    color: black;
}
</style>