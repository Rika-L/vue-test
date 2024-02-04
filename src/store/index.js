//该文件用于创建Vuex中最为核心的store

//引入Vuex

import Vuex from 'vuex'
import Vue from "vue";

//准备actions 用于响应组件中的动作
const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    }
}

//准备mutations 用于操作数据
const mutations = {
    JIA(state, value){
        state.sum += value;
    }
}

//准备state 用于存储数据
const state = {
    sum: 0
}

//应用vuex插件
Vue.use(Vuex)

//准备getters 用于将state中的数据加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store并暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
