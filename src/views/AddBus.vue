<template>
    <div class="home col-5 mx-auto py-5 mt-5">
        <div class="card">
            <div class="card-header text-center">Add new Bus</div>

            <div class="card-body">
                <div class="form-group">
                    <label for="plate_number">Plate Number :</label>
                    <input
                    type="text"
                    class="form-control"
                    id="plate_number"
                    v-model="form.plate_number"
                    placeholder="Input Bus plate number"
                    />
                    <span class="text-danger" v-if="errors.plate_number">
                        {{errors.plate_number[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="brand">Brand :</label>
                    <input
                    type="text"
                    class="form-control"
                    id="brand"
                    v-model="form.brand"
                    placeholder="Input Bus Brand"
                    />
                    <span class="text-danger" v-if="errors.brand">
                        {{errors.brand[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="seat">Seat:</label>
                    <input
                    type="number"
                    class="form-control"
                    id="seat"
                    v-model="form.seat"
                    placeholder="Input Bus seat"
                    />
                    <span class="text-danger" v-if="errors.seat">
                        {{errors.seat[0]}}
                    </span>
                </div>
                <div class="form-group">
                    <label for="price_per_day">Price Per Day:</label>
                    <input
                    type="nunber"
                    class="form-control"
                    id="price_per_day"
                    v-model="form.price_per_day"
                    placeholder="Input Bus price per day"
                    />
                    <span class="text-danger" v-if="errors.price_per_day">
                        {{errors.price_per_day[0]}}
                    </span>
                </div>
                <button
                type="submit"
                class="btn btn-primary btn-block"
                @click.prevent="addBuses"
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
                    plate_number: '',
                    brand: '',
                    seat: '',
                    price_per_day: ''
                },
                errors: []
            }
        },
        methods: { 
            addBuses(){
                User.addBus(this.form).then( ()=>{
                    this.$router.push({name:'Bus'})
                }).catch(error =>{
                    if (error.response.status === 422){
                        this.errors= error.response.data.errors
                    }
                })       
            } 
        }
    }
</script>