import {tripService} from '../../services/trip.service.js'

export default {
	state: {
		myTrips: [],
		currentTrip: null,
		currentUser: { _id: 1, name: "Maayan"} //serService.getLoggedinUser()._id
	},
	getters: {
		currentTrip(state) {
			return state.currentTrip
		},
		myTrips(state){
			return state.myTrips
		}
	},
	mutations: {
		loadTrip(state) {
			state.currentTrip = tripService.query('currentTrip')
			if(!state.currentTrip)
				state.currentTrip = tripService.getEmptyTrip()
		},
		loadMyTrips(state){
			const trips = tripService.query('myTrips')
			if(!trips)
				state.myTrips = []
			else{
				state.myTrips = trips.filter(trip => trip.mainGuest._id === state.currentUser._id)
			}	
		},
		setTripDates(state, { dates }) {
			state.currentTrip.dates = dates
		},
		setTripGuests(state, {adults, kids}) {
			let currentTrip = currentTrip(state)
			//trip.guests = { adults: 2, kids: 1} -- ???
			tripService.save('trip', currentTrip)
		},
		saveCurrentTrip(state, {trip}){
			state.trip = trip
			tripService.save(state.trip, 'currentTrip')
		},
		reserve(state, {trip}) {
			state.myTrips = tripService.query('myTrips')
			if(!state.myTrips)
				state.myTrips = []

			state.myTrips.push(trip)
			//state.currentTrip = null

			tripService.save('myTrips',state.myTrips)
		},
	},

	modules: {},
}
