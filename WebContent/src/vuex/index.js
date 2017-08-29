const user = {
  state: {
    info: {
      isLogin: false,
      username: '',
      lastLoginTime: ''
    }
  },
  mutations: {}
}

const content = {
  state: {
    location: {
      topNav: {
        tabIndex: 'projectManage/0'
      }
    },
    project: [
      {
        name: '智慧专柜',
        createTime: "2017年8月29日 11:05:48",
        data: {
          indexDoc: "zheshi IndexDoc",
          list: [
            
          ]
        }
      }, {
        name: '智慧e家',
        createTime: "2017年8月29日 11:05:53",
        data: {
          indexDoc: "zheshi IndexDoc",
          list: []
        }
      }, {
        name: '无人商店',
        createTime: "2017年8月29日 11:06:00",
        data: {
          indexDoc: "zheshi IndexDoc",
          list: []
        }
      }, {
        name: '智能水机',
        createTime: "2017年8月29日 11:06:05",
        data: {
          indexDoc: "zheshi IndexDoc",
          list: []
        }
      }
    ]
  },
  mutations: {
    changeTabIndex(state, {name, index}) {
      state.location[name].tabIndex = index
    }
  }
}

export default {
  modules : {
    user,
    content
  }
}
