import Vue from 'vue'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Install the vue plugin
Vue.use(VueApollo)

// Create the apollo client
export function createApolloClient (ssr = false) {
  let initialState

  // If on the client, recover the injected state
  if (!ssr && typeof window !== 'undefined') {
    const state = window.__APOLLO_STATE__
    if (state) {
      console.log('sstate loaded')
      // If you have multiple clients, use `state.<client_id>`
      initialState = state.defaultClient
    }
  }

  const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
      // You should use an absolute URL here
      uri: 'https://psnfqoyumf.execute-api.us-east-1.amazonaws.com/dev/graphql',
      transportBatching: true,
    }),
    ...(ssr ? {
      // Set this on the server to optimize queries when SSR
      ssrMode: true,
    } : {
      // Inject the state on the client
      initialState,
      // This will temporary disable query force-fetching
      ssrForceFetchDelay: 100,
    }),
  })

  return apolloClient
}