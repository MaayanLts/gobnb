import ordersData from '@/data/orders.json'

export const orderService = {
	query,
	save,
}

const entityType = 'orders'

function query(userId) {
	let orders = JSON.parse(localStorage.getItem(entityType))
	if (!orders) orders = _getOrdersFromJson()

	return orders
}

function save(orders) {
	localStorage.setItem(entityType, JSON.stringify(orders))
}

function _getOrdersFromJson(){
    save(ordersData)
    return ordersData;
}