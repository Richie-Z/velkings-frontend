<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 py-5 mt-5">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body" v-if="user">
                        <h3>Hello, {{user.name}}</h3>
                        <span>Welcome to BamriBus</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import User from '../apis/User'
    export default {
      data(){
        return{
            user: null
        }
      },
      mounted(){
        User.auth().then(response =>{
            this.user = response.data
        })
      }
    }
</script>

