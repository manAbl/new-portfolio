import { UPDATE_PAGE } from '../storeActionTypes'

export default function({ store, route }) {
  // go tell the store to update the page
  store.commit(`${UPDATE_PAGE}`, route.name)
}
