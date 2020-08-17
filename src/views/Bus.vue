<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 py-5 mt-5">
                <div class="card">
                    <div class="card-header">Bus
                        <div style="float: right;">
                            <router-link to="/add/bus" class="btn btn-outline-dark btn-sm">Add new bus</router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Plate Number</th>
                                    <th>Brand</th>
                                    <th>Seat</th>
                                    <th>Price Per Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="buses in buses" :key="buses.id">
                                    <td>{{buses.plate_number}}</td>
                                    <td>{{buses.brand}}</td>
                                    <td>{{buses.seat}}</td>
                                    <td>{{buses.price_per_day}}</td>
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
            buses: []
        }
    },
    mounted(){
        User.bus().then(response =>{
            this.buses = response.data
        })
    }
}
</script>

