const state = {
    items: [{
        id: 'jitui'
    }, ],
    num: 1,
}



// mutations
const mutations = {
    addNum(state) {
        state.num++
    },

}

export default {
    namespaced: false,
    state,
    mutations
}