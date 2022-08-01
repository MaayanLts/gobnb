import {orderService} from '../../services/order.service.js'
// import {socketService} from '../../services/socket.service'

export default {
	state: {
		orders: null,
		filterBy: null,
		country: '',
	},
	getters: {
		getOrdersss(state) {
			return state.orders
		},
	},
	mutations: {
		setOrders(state, {orders}) {
			state.orders = orders
			console.log('state.orders:', state.orders)
		},

		removeOrder(state, {orderId}) {
			var orders = JSON.parse(JSON.stringify(state.orders))
			var orderIdx = orders.findIndex((order) => order._id === orderId)
			orders.splice(orderIdx, 1)
			state.orders = orders
		},

		addOrder(state, {order}) {
			state.orders.push(order)
		},

		updateOrder(state, {order}) {
			const idx = state.orders.findIndex((currOrder) => currOrder._id === order._id)
			state.orders.splice(idx, 1, order)
		},
	},
	actions: {
		async loadOrders(context) {
			try {
				var filterBy = context.state.filterBy ? context.state.filterBy : ''
				const orders = await orderService.query(filterBy)
				context.commit({type: 'setOrders', orders})

				return orders
			} catch (err) {
				console.log(err)
			}
		},

		async getOrderById(context, {orderId}) {
			try {
				return await orderService.getOrderById(orderId)
			} catch (err) {
				4
				console.log(err)
			}
		},

		getEmptyOrder() {
			return orderService.getEmptyOrder()
		},

		async removeOrder(context, {orderId}) {
			try {
				await orderService.removeOrder(orderId)
				context.commit({type: 'removeOrder', orderId})
				return
			} catch (err) {
				console.log(err)
			}
		},

		async saveOrder(context, {order}) {
			try {
				const isEdit = !!order._id
				const savedOrder = await orderService.saveOrder(order)
				context.commit({type: isEdit ? 'updateOrder' : 'addOrder', order: savedOrder})
			} catch (err) {
				console.log(err)
			}
		},
	},
	modules: {},
}
