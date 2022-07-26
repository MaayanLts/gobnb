import { tripService } from '../../services/trip.service.js'

export default {
	state: {
		//trip: null,
	},
	getters: {
	},
	mutations: {
		setTrip(state, {trip}) {
			//if(!state.trip)
				//state.trip = tripService.getEmptyTrip
			
			//state.trip = trip

			//const { dates } = trip
			//state.trip.startDate = startDate
			//state.trip.endDate = endDate
			//state.trip.dates = dates

			tripService.save('trip', trip)
		},
		//setEmptyTrip(state){
			//tripService.save(tripService.getEmptyTrip())
		//},
		//getTrip(state) {
			// try{
			// 	const trip = tripService.query()
			// 	if(!trip){
			// 		trip = tripService.getEmptyTrip()
			// 	}
			// }catch{

			// }
			// if(!state.trip){
			// 	const trip = tripService.query().then((trip) => {
			// 		context.commit({type: 'setTrip', trip})
			// 	})		
			// }

			// return state.trip
		//},
	},
	actions: {
	    setTrip(context, {trip}) {
			context.commit({type: 'setTrip', trip})
		},
		getTrip(state) {
			return tripService.query()		
		},
		//async setEmptyTrip(context) {
		// 	context.commit({type: 'setEmptyTrip', trip})
		//},
	},

	modules: {},
}
