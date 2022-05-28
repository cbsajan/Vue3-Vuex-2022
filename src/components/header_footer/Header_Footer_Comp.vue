<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Beardit.com</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link">Admin</router-link>
                </li>
                <li class="nav-item" v-if="!this.$store.state.auth">
                    <div class="nav-link" @click="loginUser()">Login</div>
                </li>
                <li class="nav-item" v-if="this.$store.state.auth">
                    <div class="nav-link" @click="logoutUser(false)">Logout</div>
                </li>
            </ul>
        </header>
    </div>
    <slot></slot>
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link to="/" class="nav-link px-2 text-muted">Home</router-link>
            </li>
        </ul>
        <p class="text-center text-muted">© 2021 Company, Inc</p>
    </footer>
</template>


<style>
footer {
    margin-top: 100px;
}

body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
</style>


<script>
import { mapActions } from 'vuex';
export default {
     methods:{
    ...mapActions({
      loginUser:'authUser',
      logoutUser: 'signOut'
    })
    // loginUser(){
    //     this.$store.dispatch({
    //       type:'authUser'
    //     })
    // },
    // logoutUser(){
    //   this.$store.dispatch('signOut',false)
    // }
  }
}
</script>
