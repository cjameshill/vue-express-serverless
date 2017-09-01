import Vue from 'vue'

export default {
  SET_COMPANIES (state, companies) {
    state.companies = companies
  },  
  SET_QUERY (state, query) {
    state.query = query
  }
}
