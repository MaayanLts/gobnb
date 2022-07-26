import {makeId} from '/src/services/util.service.js?t=1658850766837'

export const tripService = {
	query,
    save,
}

const entityType = 'trip'

function query() {
    let trip = JSON.parse(localStorage.getItem(entityType))
    if(!trip)
        trip = _getEmptyTrip()

	return trip
}

function save(trip) {
	localStorage.setItem(entityType, JSON.stringify(trip))
}

function _getEmptyTrip() {
	const trip = {
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