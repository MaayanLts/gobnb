import { orderService } from '../../services/order.service.js'

export default {
	state: {
		orders: null,
		currentUserId: 2, //hostUser - Does't matter right now All orders is belong to one user
	},
	getters: {
		orders(state) {
			return state.orders
		},
	},
	mutations: {
		loadOrders(state) {
			state.orders = orderService.query(this.currentUserId)
			//.filter(orders => orders.hostId === userId)
		},

		saveOrder(state, {trip}){
			if(!state.orders){
				state.orders = orderService.query(this.currentUserId) //For local storage I need all orders
			}
			state.orders.push(trip)
			orderService.save(state.orders)
		},
		// approveOrder(state, { orderId }){
		// 	let order = state.orders.find(order => order._id === orderId)
		// 	order.orderStatus = "approved"

		// 	orderService.save(state.orders)
		// },
		// declineOrder(state, { orderId }){
		// 	let order = state.orders.find(order => order._id === orderId)
		// 	order.orderStatus = "declined"

		// 	orderService.save(state.orders)
		// },
		changeOrderOrder(state, { orderId, status }){
			let order = state.orders.find(order => order._id === orderId)
			order.orderStatus = status

			orderService.save(state.orders)
		},
	},

	modules: {},
}