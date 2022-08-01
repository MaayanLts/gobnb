import {makeId} from '@/services/util.service.js?t=1658850766837'

export const tripService = {
	query,
	getEmptyTrip,
	save,
}

function query(entityType) {
	let myTrips = JSON.parse(localStorage.getItem(entityType))
	return myTrips
}

function save(entityType, trip) {
	localStorage.setItem(entityType, JSON.stringify(trip))
}

function getEmptyTrip() {
	const trip = {
		_id: makeId(),
		stayId: '',
		//dates: [new Date(), new Date()],
		dates: [],
		price: 0,
		guests: {
			adults: 0,
			children: 0,
			infants: 0,
			pets: 0,
		},
		destination: {
			country: '',
			countryCode: '',
			address: '',
			lat: 0,
			lng: 0,
		},
		mainGuest: {
			_id: '',
			fullName: '',
			imgUrl: '',
		},
	}

	return trip
}
