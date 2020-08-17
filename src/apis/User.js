import Api from './Api'
import Csrf from './Csrf'
import "regenerator-runtime/runtime.js";
export default{
	async register(form){
		await Csrf.getCookie();
		return Api.post('/register',form)
	},
	async login(form){
		await Csrf.getCookie();
		return Api.post('/login',form)
	},
	async logout(){
		await Csrf.getCookie();
		return Api.post('/logout')
	},
	auth(){
		return Api.get('/user')
	},
	bus(){
		return Api.get('/bus')
	},
	addBus(form){
		return Api.post('/add/bus',form)
	},
	driver(){
		return Api.get('/driver')
	},
	addDriver(form){
		return Api.post('/add/driver',form)
	},
	order(){
		return Api.get('/order')
	},
	addOrder(form){
		return Api.post('/add/order',form)
	}
}