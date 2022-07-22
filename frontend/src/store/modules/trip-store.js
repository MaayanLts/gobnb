import {stayService} from '../../services/stay.service.js'
// import {socketService} from '../../services/socket.service'

export default {
	state: {
		trip: null,
	},
	getters: {},
	mutations: {
		setTrip(state, {trip}) {
			state.trip = stayService.getEmptyTrip
			const {startDate, endDate} = trip
			state.trip.startDate = startDate
			state.trip.endDate = endDate
		},
	},
	actions: {
		setTrip(context, {trip}) {
			context.commit({type: 'setTrip', trip})
		},
	},
	modules: {},
}
