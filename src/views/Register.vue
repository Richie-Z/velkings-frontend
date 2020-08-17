<template>
    <div class="home col-5 mx-auto py-5 mt-5">
        <div class="card">
            <div class="card-header text-center">Register</div>

            <div class="card-body">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.name"
                    />
                    <span class="text-danger" v-if="errors.name">
                        {{errors.name[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="form.email"
                    />
                    <span class="text-danger" v-if="errors.email">
                        {{errors.email[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="form.password"
                    />
                    <span class="text-danger" v-if="errors.password">
                        {{errors.password[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="password_confirmation">Confirm Password:</label>
                    <input
                    type="password"
                    class="form-control"
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    />
                    <span class="text-danger" v-if="errors.password_confirmation">
                        {{errors.password_confirmation[0]}}
                    </span>
                </div>
                <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="register"
                >
                Register
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import User from '../apis/User'
    export default {
        data(){
            return {
                form:{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: []
            }
        },
        methods: { 
            register(){
                User.register(this.form).then( ()=>{
                    this.$router.push({name:'Login'})
                }).catch(error =>{
                    if (error.response.status === 422){
                        this.errors= error.response.data.errors
                    }
                })       
            } 
        }
    }
</script>