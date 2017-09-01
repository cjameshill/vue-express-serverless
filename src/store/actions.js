import axios from 'axios'
const http = axios.create({
	headers: {'Content-Type': 'application/javascript'}
})
export default {
  FETCH_COMPANIES: ({ commit, state }) => {
  	return axios.get('https://hx9r0g5j5j.execute-api.us-east-1.amazonaws.com/dev/companies/')
  			.then((response) => {
  				commit('SET_COMPANIES', response.data)
  			})
  },

  FETCH_QUERY: ({ commit, state }) => {
      let query = `
      { 
        users { 
          name
        }
        companies {
          name
        }
      }
      `;
    let data = {"query": query }
  	return http.post('https://psnfqoyumf.execute-api.us-east-1.amazonaws.com/dev/graphql', data)
  				.then((response) => {
  					commit('SET_QUERY', response.data.data)
  				}).catch((error) => console.log(error.response.data))
  }

}
