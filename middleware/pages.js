export default function({ store, route }) {
  // go tell the store to update the page
  store.commit('updatePage', route.name)
}
