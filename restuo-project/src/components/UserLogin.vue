<template>
    <div>
        <img class="logo" src="../assets/resto-removebg-preview.png" alt="">
        <h3>Sign Up</h3>
        <div class="input-field-select">
            <input type="text" v-model="name" placeholder="Enter name...">
            <input type="text" v-model="email" placeholder="Enter email...">
            <input type="text" v-model="password" placeholder="Enter Password...">
            <button @click="userLogin">Sign Up</button>
        </div>
        <a v-on:click="moveLogin" href="">Login</a>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserLogin',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async userLogin() {
    
                const result = await axios.post('http://localhost:3000/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                
                console.log(result);

                if (result.status === 201) {
                    alert('Sign up successful!');
                }
                
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({name:'Home'})

        },
    mounted(){
        let user=localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'Home'})
        }
    },
    moveLogin(){
        console.log("helo")
            this.$router.push({name:'Login'})
        }
    }
    
};
</script>

<style>
.logo {
    width: 11% !important;
    height: 50% !important;
}

.input-field-select input {
    width: 300px;
    height: 40px;
    display: block;
    margin: auto;
    margin-bottom: 30px;
    padding-left: 20px;
    border: 1px solid skyblue;
    border-radius: 4px;
    outline: none;
}

.input-field-select button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    border-radius: 4px;
    outline: none;
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
</style>
