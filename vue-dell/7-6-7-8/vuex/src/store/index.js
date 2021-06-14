import {
  createStore
} from 'vuex'
import axios from 'axios'
// VUEX 数据管理框架
// vuex创建了一个全局唯一的仓库 用来存放全局的数据
export default createStore({
  state: {
    name: 'xiaoxiaowei',
    age: '18'
  },
  mutations: {
    change(store, value) {
      setTimeout(() => {
        store.name = value
      }, 1000)
    },
    changeAge(store, value) {
      store.age = value
    }
  },
  actions: {
    change(store, value) {
      axios.get(`https://www.baidu.com`)
        .then((res) => {
          console.log('res', res)
        })
      this.commit('change', value)
    },
    changeAge(store, value) {
      this.commit('changeAge', value)
    }
  },
  modules: {}
})