import Vue from 'vue'
import VueApollo from 'vue-apollo'
import 'cross-fetch/polyfill'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import Cookie from 'universal-cookie'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

export default (ctx, inject) => {
  const providerOptions = { clients: {} }
  const { app, beforeNuxtRender, req } = ctx
  const AUTH_TOKEN_NAME = 'manAbl-667:YAsSnr0FUb9vLX7K89XiZg'
  const COOKIE_ATTRIBUTES = {"secure":false}
  const AUTH_TYPE = 'Bearer '
  const cookies = new Cookie(req && req.headers.cookie)

  // Config

      const defaultTokenName = 'apollo-token'  || AUTH_TOKEN_NAME
      const defaultCookieAttributes = ''  || COOKIE_ATTRIBUTES

      function defaultGetAuth () {
        const token = cookies.get(defaultTokenName)
        return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : ''
      }

      let defaultClientConfig

        defaultClientConfig = {
  "httpEndpoint": "http://localhost:4000",
  "httpLinkOptions": {
    "credentials": "same-origin"
  },
  "tokenName": "apollo-token",
  "persisting": false,
  "websocketsOnly": false
}

      const defaultValidateToken = () => true

      if (!defaultClientConfig.validateToken) {
        defaultClientConfig.validateToken = defaultValidateToken
      }

      const defaultCache = defaultClientConfig.cache
        ? defaultClientConfig.cache
        : new InMemoryCache(defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions: undefined)

      if (!process.server) {
        defaultCache.restore(window.__NUXT__ ? window.__NUXT__.apollo.defaultClient : null)
      }

      if (!defaultClientConfig.getAuth) {
        defaultClientConfig.getAuth = defaultGetAuth
      }
      defaultClientConfig.ssr = !!process.server
      defaultClientConfig.cache = defaultCache
      defaultClientConfig.tokenName = defaultTokenName

      // Create apollo client
      let defaultApolloCreation = createApolloClient({
        ...defaultClientConfig
      })
      defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient

          providerOptions.defaultClient = defaultApolloCreation.apolloClient

      const testTokenName = 'apollo-token'  || AUTH_TOKEN_NAME
      const testCookieAttributes = ''  || COOKIE_ATTRIBUTES

      function testGetAuth () {
        const token = cookies.get(testTokenName)
        return token && testClientConfig.validateToken(token) ? AUTH_TYPE + token : ''
      }

      let testClientConfig

        testClientConfig = {
  "httpEndpoint": "http://localhost:5000",
  "wsEndpoint": "ws://localhost:5000",
  "tokenName": "apollo-token"
}

      const testValidateToken = () => true

      if (!testClientConfig.validateToken) {
        testClientConfig.validateToken = testValidateToken
      }

      const testCache = testClientConfig.cache
        ? testClientConfig.cache
        : new InMemoryCache(testClientConfig.inMemoryCacheOptions ? testClientConfig.inMemoryCacheOptions: undefined)

      if (!process.server) {
        testCache.restore(window.__NUXT__ ? window.__NUXT__.apollo.test : null)
      }

      if (!testClientConfig.getAuth) {
        testClientConfig.getAuth = testGetAuth
      }
      testClientConfig.ssr = !!process.server
      testClientConfig.cache = testCache
      testClientConfig.tokenName = testTokenName

      // Create apollo client
      let testApolloCreation = createApolloClient({
        ...testClientConfig
      })
      testApolloCreation.apolloClient.wsClient = testApolloCreation.wsClient

          providerOptions.clients.test = testApolloCreation.apolloClient

  const vueApolloOptions = Object.assign(providerOptions, {
        defaultOptions: {"$query":{"loadingKey":"loading","fetchPolicy":"cache-and-network"}},

      errorHandler (error) {
          require('~/plugins/apollo-error-handler.js').default(error, ctx)
      }
  })

  const apolloProvider = new VueApollo(vueApolloOptions)
  // Allow access to the provider in the context
  app.apolloProvider = apolloProvider

  if (process.server) {
    const ApolloSSR = require('vue-apollo/ssr')
    beforeNuxtRender(({ nuxtState }) => {
      nuxtState.apollo = ApolloSSR.getStates(apolloProvider)
    })
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
      // Fallback for tokenExpires param
      if (typeof cookieAttributes === 'number') cookieAttributes = { expires: cookieAttributes }

      if (typeof cookieAttributes.expires === 'number') {
        cookieAttributes.expires = new Date(Date.now()+ 86400*1000*cookieAttributes.expires)
      }

      if (token) {
        cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes)
      } else {
        cookies.remove(AUTH_TOKEN_NAME, cookieAttributes)
      }
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
      if (!skipResetStore) {
        try {
          await apolloClient.resetStore()
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (setToken)', 'color: orange;', e.message)
        }
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
      cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES)
      if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
      if (!skipResetStore) {
        try {
          await apolloClient.resetStore()
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
        }
      }
    },
    getToken: (tokenName = AUTH_TOKEN_NAME) => {
      return cookies.get(tokenName)
    }
  })
}
