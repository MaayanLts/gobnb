// import {storageService} from './async-storage.service.js'
// import stayData from '@/data/stay.json'
import { httpService } from './http.service'
import {makeId} from './util.service.js'

const ENDPOINT = 'stay'


async function query(filterBy = {}) {
	return await httpService.get(ENDPOINT , filterBy)
}

async function getStayById(stayId)  {
	return await httpService.get(`${ENDPOINT}/${stayId}`)
}

async function removeStay(stayId) {
	// return await storageService.delete(`${ENDPOINT}/${stayId}`)
	return await httpService.delete(`${ENDPOINT}/${stayId}`)
}

async function saveStay(stay) {
	return stay._id
	? await httpService.put(`${ENDPOINT}/${stay._id}`, stay)
	: await httpService.post(ENDPOINT, stay)
}

// async function query(filterBy) {
	// 	let filteredStays = _buildFilterCriteria(filterBy)
	
	// 	// return Promise.resolve(filteredStays)
// 	return storageService.get(ENDPOINT)//, filterBy)
// }
// async function getStayById(stayId) {
// 	//return await storageService.get(`${ENDPOINT}/${stayId}`)
// 	//return await storageService.get(ENDPOINT, stayId)

// 	var stay = findId(stayData, stayId)
// 	return stay
// }
// //Find element by id in JSON
// function findId(data, idToLookFor) {
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i]._id == idToLookFor) {
// 			return data[i]
// 		}
// 	}
// }
// async function removeStay(stayId) {
//     return await httpService.delete(`${ENDPOINT}/${stayId}`)
// }
// async function saveStay(stay) {
// 	var stay = JSON.parse(JSON.stringify(stay))
// 	if (stay._id) {
// 		return await storageService.put(`${ENDPOINT}/${stay._id}`, stay)
// 	} else {
// 		if (!stay.name) stay.name = 'Unknown'
// 		return await storageService.post(ENDPOINT, stay)
// 	}
// }
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
function getEmptyTrip() {
	var trip = {
		_id: makeId(),
		stayId: '',
		startDate: '',
		endDate: '',
		price: 0,
		guests: {
			adults: 2,
			kids: 1,
		},
		stayIddest: {
			country: '',
			countryCode: '',
			address: '',
			lat: 0,
			lng: 0,
		},
		stayIdmainGuest: {
			_id: '',
			fullName: '',
			imgUrl: '',
		},
	}
	return trip
}

export const stayService = {
	query,
	getStayById,
	getEmptyStay,
	removeStay,
	saveStay,
	getEmptyTrip,
}
function _buildFilterCriteria(filterBy = {tag: '', country: ''}) {
	const {tag, country, byPrice} = filterBy
	let filteredStays = stayData
	if (tag) {
		const regex = new RegExp(filterBy.tag, 'i')
		filteredStays = stayData.filter((stay) => regex.test(stay.tags))
	}
	if (country) {
		const regex = new RegExp(filterBy.country, 'i')
		filteredStays = stayData.filter((stay) => regex.test(stay.address.country))
	}

	if (byPrice) {
		filteredStays = stayData.filter((stay) => stay.price > byPrice.minPrice)
		filteredStays = filteredStays.filter((stay) => stay.price < byPrice.maxPrice)
	}
	return filteredStays
}
