import * as types from '../storeActionTypes'

export const state = () => ({
  page: 'index',
  isMenuOpen: false
})

export const mutations = {
  [types.UPDATE_PAGE](state, pageName) {
    state.page = pageName
  },
  [types.TOGGLE_MENU](state) {
    state.isMenuOpen = !state.isMenuOpen
  }
}

export const actions = {
  toggleMenu({ commit }) {
    commit(`${types.TOGGLE_MENU}`)
  }
}
