fetch = require('isomorphic-fetch')
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  return new Promise((resolve, reject) => {
  const { app, router, store, apolloProvider } = createApp({
    ssr: true
  })

  // set router's location
  router.push(context.url)

  // wait until router has resolved possible async hooks
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()

    // no matched routes
    if (!matchedComponents.length) {
      reject({ code: 404 })
    }

    let js = ''

    // Call preFetch hooks on components matched by the route.
    // A preFetch hook dispatches a store action and returns a Promise,
    // which is resolved when the action is complete and store state has been
    // updated.
    Promise.all([
      // Vuex Store prefetch
      ...matchedComponents.map(component => {
        return component.preFetch && component.preFetch(store)
      }),
      // Apollo prefetch
      apolloProvider.prefetchAll({
        route: router.currentRoute,
      }, matchedComponents),
    ]).then(() => {
      // Inject the Vuex state and the Apollo cache on the page.
      // This will prevent unecessary queries.

      // Vuex
      // js += `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`

      // Apollo
      // js += apolloProvider.getStates()

      // add function to context to embed apollo state to the DOM
        context.renderApolloState = () => `
          <script>${apolloProvider.exportStates()}</script>
        `

      resolve(app)
    }).catch(reject)
  })
})
}
