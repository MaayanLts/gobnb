import { tripService } from '../../services/trip.service.js'

export default {
	state: {
	},
	getters: {
		getTrip(state) {
			return tripService.query()
		},
	},
	mutations: {
		setTrip(state, {trip}) {
			tripService.save('trip', trip)
		},
	},

	modules: {},
}
