import {makeId} from '@/services/util.service.js?t=1658850766837'

export const tripService = {
	query,
	save,
}

const entityType = 'trip'

function query() {
	let trip = JSON.parse(localStorage.getItem(entityType))
	if (!trip) trip = _getEmptyTrip()

	return trip
}

function save(trip) {
	localStorage.setItem(entityType, JSON.stringify(trip))
}

function _getEmptyTrip() {
	const trip = {
		_id: makeId(),
		stayId: '',
		dates: [new Date(), new Date()],
		price: 0,
		guests: {
			adults: 0,
			children: 0,
			infants: 0,
			pets: 0,
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
