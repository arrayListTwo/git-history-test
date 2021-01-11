const state = {
  schoolInfo: null
}

const mutations = {
  SET_SCHOOL_INFO: (state, schoolInfo) => {
    state.schoolInfo = schoolInfo
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
