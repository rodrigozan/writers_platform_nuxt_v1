export default {
  open({ commit }) {
    commit("OPEN");
  },
  close({ commit }) {
    commit("CLOSE");
  },
  setComponent({ commit }, info) {
    commit("SET_COMPONENT", info.component_name)
    if (info.params)
      commit("SET_PARAMS", info.params)
    if (info.config)
      commit("SET_CONFIG", info.config)
  },
  clear({ commit }) {
    commit("CLEAR")
  },
  troggle({ state, commit }) {
    if (state.open) commit("CLOSE")
    else commit("OPEN")
  }
}
