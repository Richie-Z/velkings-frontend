<template>
    <div class="home col-5 mx-auto py-5 mt-5">
        <div class="card">
            <div class="card-header text-center">Add new Driver</div>

            <div class="card-body">
                <div class="form-group">
                    <label for="name">Name :</label>
                    <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.name"
                    placeholder="Input Driver Name"
                    />
                    <span class="text-danger" v-if="errors.name">
                        {{errors.name[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="age">Age :</label>
                    <input
                    type="number"
                    class="form-control"
                    id="age"
                    v-model="form.age" placeholder="Input Driver Age"
                    />
                    <span class="text-danger" v-if="errors.age">
                        {{errors.age[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="id_number">ID Number:</label>
                    <input
                    type="number"
                    class="form-control"
                    id="id_number"
                    v-model="form.id_number" placeholder="Input Driver Id number"
                    />
                    <span class="text-danger" v-if="errors.id_number">
                        {{errors.id_number[0]}}
                    </span>
                </div>
                <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="addDriver"
                >
                Submit
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
                    age: '',
                    id_number: ''
                },
                errors: []
            }
        },
        methods: { 
            addDriver(){
                User.addDriver(this.form).then( ()=>{
                    this.$router.push({name:'Driver'})
                }).catch(error =>{
                    if (error.response.status === 422){
                        this.errors= error.response.data.errors
                    }
                })       
            } 
        }
    }
</script>