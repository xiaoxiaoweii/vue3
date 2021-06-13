import {
  createStore
} from 'vuex'
// VUEX 数据管理框架
// vuex创建了一个全局唯一的仓库 用来存放全局的数据
export default createStore({
  state: {
    name: 'xiaoxiaowei'
  },
  mutations: {
    change(store,value) {
      setTimeout(() => {
        store.name = value
      }, 1000)
    }
  },
  actions: {
    change(store,value) {
      this.commit('change',value)
    }
  },
  modules: {}
})