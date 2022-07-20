import {createStore} from 'vuex'
import stayStore from './modules/stay-store.js'
// import userStore from './modules/user-store.js'
// import reviewStore from './modules/review-store.js'

const store = createStore({
	strict: true,
	modules: {
		stayStore,
		// userStore,
		// reviewStore,
	},
})

export default store
