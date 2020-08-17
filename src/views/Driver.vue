<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 py-5 mt-5">
                <div class="card">
                    <div class="card-header">Driver
                        <div style="float: right;">
                            <router-link to="/add/driver" class="btn btn-outline-dark btn-sm">Add new Driver</router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Id Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="drv in drivers" :key="drv.id">
                                    <td>{{drv.name}}</td>
                                    <td>{{drv.age}}</td>
                                    <td>{{drv.id_number}}</td>
                                </tr>
                            </tbody>
                        </table>
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
            drivers: []
        }
    },
    mounted(){
        User.driver().then(response =>{
            this.drivers = response.data
        })
    }
}
</script>

