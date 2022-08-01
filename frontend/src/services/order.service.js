// import {storageService} from './async-storage.service.js'
// import orderData from '@/data/order.json'
import {httpService} from './http.service'
import {makeId} from './util.service.js'
const ENDPOINT = 'order'
async function query(filterBy = {}) {
	return await httpService.get(ENDPOINT, filterBy)
}
async function getOrderById(orderId) {
	return await httpService.get(`${ENDPOINT}/${orderId}`)
}
async function removeOrder(orderId) {
	// return await storageService.delete(`${ENDPOINT}/${orderId}`)
	return await httpService.delete(`${ENDPOINT}/${orderId}`)
}
async function saveOrder(order) {
	return order._id
		? await httpService.put(`${ENDPOINT}/${order._id}`, order)
		: await httpService.post(ENDPOINT, order)
}
function getEmptyOrder() {
	var emptyOrder = {
		_id: '1',
		stayId: '',
		orderDate: '',
		dates: [],
		price: 0,
		guests: {
			adults: 0,
			children: 0,
			infants: 0,
			pets: 0,
		},
		destinatio: {
			country: '',
			countryCode: 'Sp',
			address: '',
			lat: 0,
			lng: 0,
		},
		mainGuest: {
			_id: '',
			fullName: '',
			imgUrl: '',
		},
		orderStatus: '',
	}

	return emptyOrder
}
export const orderService = {
	query,
	getOrderById,
	getEmptyOrder,
	removeOrder,
	saveOrder,
}
