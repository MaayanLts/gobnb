import {stayService} from '../../services/stay.service.js'
// import {socketService} from '../../services/socket.service'

export default {
	state: {
		stays: null,
		filterBy: null,
	},
	getters: {
		getStays(state) {
			return state.stays
		},

		getPrices(state) {
			const prices = state.stays.map((stay) => stay.price)
			const count = {}
			for (const element of prices) {
				if (count[element]) {
					count[element] += 1
				} else {
					count[element] = 1
				}
			}
			return count
		},
	},
	mutations: {
		setStays(state, {stays}) {
			state.stays = stays
		},

		setFilterBy(state, {filterBy}) {
			state.filterBy = filterBy
			// this.loasStays()
		},

		removeStay(state, {stayId}) {
			var stays = JSON.parse(JSON.stringify(state.stays))
			var stayIdx = stays.findIndex((stay) => stay._id === stayId)
			stays.splice(stayIdx, 1)
			state.stays = stays
		},

		addStay(state, {stay}) {
			state.stays.push(stay)
		},

		updateStay(state, {stay}) {
			const idx = state.stays.findIndex((currStay) => currStay._id === stay._id)
			state.stays.splice(idx, 1, stay)
		},
	},
	actions: {
		async loadStays(context) {
			try {
				var filterBy = context.state.filterBy ? context.state.filterBy : ''
				const stays = await stayService.query(filterBy)
				context.commit({type: 'setStays', stays: stays})

				return stays
			} catch (err) {
				console.log(err)
			}
		},

		async getStayById(context, {stayId}) {
			try {
				return  await stayService.getStayById(stayId)
				
			} catch (err) {
				console.log(err)
			}
		},

		getEmptyStay() {
			return stayService.getEmptyStay()
		},

		async removeStay(context, {stayId}) {
			try {
				await stayService.removeStay(stayId)
				context.commit({type: 'removeStay', stayId})
				// socketService.emit('deleteStay', stayId)
				return
			} catch (err) {
				console.log(err)
			}
		},

		async saveStay(context, {stay}) {
			try {
				// if (!context.state.stays) await context.dispatch({ type: 'loadStays' })
				const isEdit = !!stay._id
				const savedStay = await stayService.saveStay(stay)
				context.commit({type: isEdit ? 'updateStay' : 'addStay', stay: savedStay})
			} catch (err) {
				console.log(err)
			}
		},
		async setFilterBy(context, {filterBy}) {
			console.log('filterBy:', filterBy)
			try {
				context.commit({type: 'setFilterBy', filterBy})
				const stays = await stayService.query(filterBy)
				context.commit({type: 'setStays', stays: stays})
			} catch (err) {
				console.log(err)
			}
		},

		// async addReview(context, { stayId, reviewTxt }) {
		//   const user = context.rootGetters.getUser;
		//   if (!user) return router.push('/login');
		//   const review = {
		//     txt: reviewTxt,
		//     miniUser: {
		//       id: user._id,
		//       username: user.username
		//     }
		//   }
		//   const updatedStay = await stayService.addReview(stayId, review)
		//   context.commit({ type: 'updateStay', stay: updatedStay })
		// }
	},
	modules: {},
}
