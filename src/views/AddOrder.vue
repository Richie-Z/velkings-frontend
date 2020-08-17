<template>
    <div class="home col-5 mx-auto py-5 mt-5">
        <div class="card">
            <div class="card-header text-center">Add new Order</div>

            <div class="card-body">
                <div class="form-group">
                    <label for="contact_name">Contact Name :</label>
                    <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.contact_name"
                    placeholder="Input Contact Name"
                    />
                    <span class="text-danger" v-if="errors.contact_name">
                        {{errors.contact_name[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="contact_phone">Contact Phone :</label>
                    <input
                    type="text"
                    class="form-control"
                    id="contact_phone"
                    v-model="form.contact_phone" placeholder="Input Contact Phone "
                    />
                    <span class="text-danger" v-if="errors.contact_phone">
                        {{errors.contact_phone[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="start_rent_date">Start Rent Days:</label>
                    <input
                    type="date"
                    class="form-control"
                    id="start_rent_date"
                    v-model="form.start_rent_date" placeholder="Input Start Rent Day"
                    />
                    <span class="text-danger" v-if="errors.start_rent_date">
                        {{errors.start_rent_date[0]}}
                    </span>
                </div>
                 <div class="form-group">
                    <label for="total_rent_days">Total Rent :</label>
                    <input
                    type="number"
                    class="form-control"
                    id="total_rent_days"
                    v-model="form.total_rent_days" placeholder="Input total rent days"
                    />
                    <span class="text-danger" v-if="errors.total_rent_days">
                        {{errors.total_rent_days[0]}}
                    </span>
                </div>
                 <div class="form-group">
                    <label for="bus_id">Bus: </label>
                    <select v-model="form.bus_id" class="form-control" id="bus_id" >
                        <option v-for="bus in buses" v-bind:value="bus.id">{{ bus.brand }}</option>
                    </select>
                </div>
                 <div class="form-group">
                    <label for="driver_id">Driver: </label>
                    <select v-model="form.driver_id" class="form-control" id="driver_id" >
                        <option v-for="dri in drivers" v-bind:value="dri.id">{{dri.name}}</option>
                    </select>
                </div>
                <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="addOrder"
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
                    contact_name: '',
                    contact_phone: '',
                    start_rent_date: '',
                    total_rent_days: '',
                    bus_id: '',
                    driver_id : '',
                },
                errors: [],
                buses: [],
                drivers: []
            }
        },
        mounted(){
            User.bus().then(response =>{
                this.buses = response.data
            })
            User.driver().then(response =>{
                this.drivers = response.data
            })
        },
        methods: { 
            addOrder(){
                User.addOrder(this.form).then( ()=>{
                    this.$router.push({name:'Order'})
                }).catch(error =>{
                    if (error.response.status === 422){
                        this.errors= error.response.data.errors
                    }
                })       
            } 
        }
    }
</script>