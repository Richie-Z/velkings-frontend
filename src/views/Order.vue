<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 py-5 mt-5">
                <div class="card">
                    <div class="card-header">Bus
                        <div style="float: right;">
                            <router-link to="/add/order" class="btn btn-outline-dark btn-sm">Add new order</router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Contact Phone</th>
                                    <th>Start Rent Date</th>
                                    <th>Total Rent Date</th>
                                    <th>End Rent Date</th>
                                    <th>Bus Brand</th>
                                    <th>Drivers Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="or in orders" :key="or.id">
                                    <td>{{or.contact_name}}</td>
                                    <td>{{or.contact_phone}}</td>
                                    <td>{{or.start_rent_date}}</td>
                                    <td>{{or.total_rent_days}}</td>
                                    <td>{{or.end_rent_date}}</td>
                                    <td>{{or.bus_brand}}</td>
                                    <td>{{or.name_driver}}</td>
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
            orders: []
        }
    },
    mounted(){
        User.order().then(response =>{
            this.orders = response.data
        })
    }
}
</script>

