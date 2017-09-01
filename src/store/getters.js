export default {
	companies(state) {
		return state.companies;
	},
	query(state) {
		return state.query;
	},
	users(state) {
		return state.query.users;
	},
	getCompany: (state, getters) => (company) => {
		return state.companies.find(c => c.Company === company)
	}
}