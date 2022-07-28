import {tripService} from '../../services/trip.service.js'

export default {
	state: {
		trip: null,
	},
	getters: {
		getTrip(state) {
			return state.trip
		},
	},
	mutations: {
		loadTrip(state) {
			state.trip = tripService.query()
		},
		setTripDates(state, dates) {
			console.log('dates:', dates)
			// trip.dates = dates

			// tripService.save('trip', trip)
		},
		setTripGuests(state, {adults, kids}) {
			let trip = getTrip(state)
			//trip.guests = { adults: 2, kids: 1} -- ???
			tripService.save('trip', trip)
		},

		reserve(state, {trip}) {
			state.trip = trip
			tripService.save(state.trip, 'trip')
		},
	},

	modules: {},
}
