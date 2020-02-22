import Vue from 'vue' // 引用vue
import Vuex from 'vuex' // 引用vuex

// 使用vuex
Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: true},
      {id: 3, text: '...', done: false},
      {id: 4, text: '...', done: true},
      {id: 5, text: '...', done: false},
      {id: 6, text: '...', done: false},
      {id: 7, text: '...', done: true}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

// 导出vuex中的sotre
export default store
