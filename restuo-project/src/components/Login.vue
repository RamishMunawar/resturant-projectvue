<template>
  <div>
        <img class="logo" src="../assets/resto-removebg-preview.png" alt="">
        <h3>Login</h3>
        <div class="input-field-select">
            <input type="text" v-model="email" placeholder="Enter email...">
            <input type="text" v-model="password" placeholder="Enter password...">
            <button @click="Login">Login</button>
        </div>
        <a v-on:click="movesingup" href="" class="sign-button">Sign Up</a>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'Login',
    data() {
        return {
            name: '',
            email: '',
        };
    },
    methods:{
      async  Login(){
            // console.log(this.name,this.email)
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`,

            ) ;
            console.log(result)

            if (result.status === 200 && result.data.length>0) {
                    alert('Sign up successful!');
                    this.$router.push({name:'Home'})
                }
                
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                // this.$router.push({name:'Home'})

        },
        
        mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Login'})
        }
    },
    movesingup(){
        console.log("helo")
            this.$router.push({name:'UserLogin'})
        }
    }
      
        
    }

</script>
<style>
.sign-button{
    margin-top: 10px;
}
</style>