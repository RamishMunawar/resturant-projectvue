<template>
  <div>
        <img class="logo" src="../assets/resto-removebg-preview.png" alt="">
        <h3>Login</h3>
        <div class="input-field-select">
            <input type="text" v-model="email" placeholder="Enter name...">
            <input type="text" v-model="password" placeholder="Enter email...">
            <button @click="Login">Login</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'rLogin',
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
                }
                
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'})

        }
        },
        mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    }
        
    }

</script>