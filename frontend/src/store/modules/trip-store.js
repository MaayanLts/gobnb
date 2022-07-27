import {tripService} from '../../services/trip.service.js'

export default {
	state: {
		trip: null,
	},
	getters: {
		getTrip(state) {
			return tripService.query()
		},
	},
	mutations: {
		loadTrip() {
			state.trip = tripService.query()
		},
		setTripDates(state, dates) {
			let trip = Store.getters.getTrip(state)
			trip.dates = dates

			tripService.save('trip', trip)
		},
		setTripGuests(state, {adults, kids}) {
			let trip = getTrip(state)
			//trip.guests = { adults: 2, kids: 1} -- ???
			tripService.save('trip', trip)
		},
	},

	modules: {},
}
