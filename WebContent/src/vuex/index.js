const user = {
  state: {
    info: {
      isLogin: false,
      username: '',
      lastLoginTime: ''
    },
    project: [
      {
        name: '智慧专柜'
      },
      {
        name: '智慧e家'
      },
      {
        name: '无人商店'
      },
      {
        name: '智能水机'
      }
    ]
  },
  mutations: {

  }
}

const content = {
  state: {
    location: {
      topNav: {
        tabIndex: 'projectManage'
      }
    }
  },
  mutations: {
    changeTabIndex(state,{name,index}) {
      state.location[name].tabIndex = index
    }
  }
}

export default {
  modules: {
  user,content}
}
