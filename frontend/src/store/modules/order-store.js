import { orderService } from '../../services/order.service.js'

export default {
	state: {
		orders: null,
	},
	getters: {
		orders(state) {
			return state.orders
		},
	},
	mutations: {
		loadOrders(state) {
			state.orders = orderService.query()
		},
		approveOrder(state, { orderId }){
			let order = state.orders.find(order => order._id === orderId)
			order.orderStatus = "approved"

			orderService.save(state.orders)
		},
		declineOrder(state, { orderId }){
			let orderIndex = state.orders.findIndex(order => order._id === orderId)
			state.orders.splice(orderIndex, 1)

			orderService.save(state.orders)
		},
	},

	modules: {},
}