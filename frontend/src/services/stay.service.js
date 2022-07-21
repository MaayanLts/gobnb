import {storageService} from './async-storage.service.js'
const gStays = [
		{
			'_id': '10006546',
			'name': 'Ribeira Charming Duplex 1',
			'type': 'House',
			'imgUrls': [
				'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
				'otherImg.jpg',
			],
			'price': 80.0,
			'summary':
				'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
			'capacity': 8,
			'tags': ['snow', 'islands', 'omg'],
			'amenities': [
				'TV',
				'Wifi',
				'Kitchen',
				'Smoking allowed',
				'Pets allowed',
				'Cooking basics',
			],
			'host': {
				'_id': '51399391',
				'fullname': 'Davit Pok',
				'imgUrl':
					'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
			},
			'loc': {
				'country': 'Portugal',
				'countryCode': 'PT',
				'city': 'Porto',
				'address': '17 Kombo st',
				'lat': -8.61308,
				'lng': 41.1413,
			},
			'reviews': [
				{
					'id': 'madeId',
					'txt': 'Very helpful hosts. Cooked traditional...',
					'rate': 4,
					'by': {
						'_id': 'u102',
						'fullname': 'user2',
						'imgUrl': '/img/img2.jpg',
					},
				},
			],
			'likedByUsers': ['mini-user'], // for user-wishlist : use $in
		},
		{
			'_id': '10006547',
			'name': 'Ribeira Charming Duplex 2',
			'type': 'House',
			'imgUrls': [
				'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
				'otherImg.jpg',
			],
			'price': 80.0,
			'summary':
				'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...',
			'capacity': 8,
			'tags': ['snow', 'islands', 'omg'],
			'amenities': [
				'TV',
				'Wifi',
				'Kitchen',
				'Smoking allowed',
				'Pets allowed',
				'Cooking basics',
			],
			'host': {
				'_id': '51399391',
				'fullname': 'Davit Pok',
				'imgUrl':
					'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small',
			},
			'loc': {
				'country': 'Portugal',
				'countryCode': 'PT',
				'city': 'Porto',
				'address': '17 Kombo st',
				'lat': -8.61308,
				'lng': 41.1413,
			},
			'reviews': [
				{
					'id': 'madeId',
					'txt': 'Very helpful hosts. Cooked traditional...',
					'rate': 4,
					'by': {
						'_id': 'u102',
						'fullname': 'user2',
						'imgUrl': '/img/img2.jpg',
					},
				},
			],
			'likedByUsers': ['mini-user'], // for user-wishlist : use $in
		},
		{
			"_id": "0006548",
			"name": "Ribeira Charming Duplex",
			"type": "House",
			"imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium", "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"],
			"price": 80.00,
			"summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
			"capacity": 8,
			"tags": ['snow', 'islands', 'omg'],
			"amenities": [
				"TV",
				"Wifi",
				"Kitchen",
				"Smoking allowed",
				"Pets allowed",
				"Cooking basics"
			],
			"host": {
				"_id": "51399391",
				"fullname": "Davit Pok",
				"imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
			},
			"loc": {
				"country": "Portugal",
				"countryCode": "PT",
				"city": "Porto",
				"address": "17 Kombo st",
				"lat": -8.61308,
				"lng": 41.1413
			},
			"reviews": [
				{
					"id": "madeId",
					"txt": "Very helpful hosts. Cooked traditional...",
					"rate": 4,
					"by": {
						"_id": "u102",
						"fullname": "user2",
						"imgUrl": "/img/img2.jpg"
					}
				},
				{
					"id": "gfdgfds",
					"txt": "nice hosts. Cooked traditional...",
					"rate": 5,
					"by": {
						"_id": "u103",
						"fullname": "user2",
						"imgUrl": "/img/img2.jpg"
					}
				}
			],
			"likedByUsers": ['mini-user'] // for user-wishlist : use $in
		}
]

const ENDPOINT = 'stay'

function _creatStays() {}

async function query(filterBy) {
	if (gStays) return Promise.resolve(gStays)
	return await storageService.get(ENDPOINT, filterBy)
}

async function getStayById(stayId) {
	//return await storageService.get(`${ENDPOINT}/${stayId}`)
	return await storageService.get(ENDPOINT, stayId)
}

async function removeStay(stayId) {
	return await storageService.delete(`${ENDPOINT}/${stayId}`)
}

async function saveStay(stay) {
	var stay = JSON.parse(JSON.stringify(stay))
	if (stay._id) {
		return await storageService.put(`${ENDPOINT}/${stay._id}`, stay)
	} else {
		if (!stay.name) stay.name = 'Unknown'
		return await storageService.post(ENDPOINT, stay)
	}
}

// async function addReview(stayId, review) {
//     return await storageService.post(`${ENDPOINT}/${stayId}/review`, review);
// }

function getEmptyStay() {
	var emptyStay = {
		name: '',
		price: 0,
		type: null,
		reviews: [],
	}
	return emptyStay
}

export const stayService = {
	query,
	getStayById,
	getEmptyStay,
	removeStay,
	saveStay,
	// addReview
}
