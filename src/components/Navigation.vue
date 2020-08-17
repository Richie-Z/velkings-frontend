<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Bamri Bus</router-link>

      </div>
      <ul class="nav navbar-nav mr-auto">
         <router-link class="nav-link" to="/bus">Bus</router-link>
         <router-link class="nav-link" to="/driver">Driver</router-link>
         <router-link v-if="isLoggedIn" class="nav-link" to="/order">Order</router-link>
      </ul>
      <ul class="nav navbar-nav">
        <router-link  v-if="!isLoggedIn" to="/login" 
          class="nav-item nav-link">
          Login
        </router-link>
        <router-link v-if="!isLoggedIn" to="/register"
          class="nav-item nav-link">
          Register
        </router-link>
        <router-link v-if="isLoggedIn" to="/dashboard"
          class="nav-item nav-link">
          Dashboard
        </router-link>
        <a v-if="isLoggedIn"
          class="nav-item nav-link"
          @click.prevent="logout"
          href="#"
          >Logout</a>
      </ul>
    </div>
  </nav>
</template>
<script>
  import User from '../apis/User'
  export default{
    data(){
      return{
        isLoggedIn : false
      }
    },
    mounted(){
      this.$root.$on('login',()=>{
        this.isLoggedIn = true
      })
      this.isLoggedIn = !!localStorage.getItem('auth')
    },
    methods: {
      logout(){
        User.logout().then(()=>{
          localStorage.removeItem('auth')
          this.isLoggedIn = false
          this.$router.push({name:'Home'})
        })
      }
    }
  }
</script>