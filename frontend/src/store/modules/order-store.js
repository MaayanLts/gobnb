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
	},

	modules: {},
}