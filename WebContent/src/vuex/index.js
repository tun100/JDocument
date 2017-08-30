const user = {
  state: {
    info: {
      isLogin: false,
      username: "",
      lastLoginTime: ""
    }
  },
  mutations: {}
};

const content = {
  state: {
    location: {
      topNav: {
        tabIndex: "projectManage0"
      },
      project: {
        projectIndex: 0,
        contentIndex: 0
      }
    },
    project: Array(4)
      .fill("")
      .map((a, b) => {
        return {
          name: "智慧专柜" + b,
          createTime: "2017年8月29日 11:05:48",
          content: {
            desc: "zheshi IndexDoc",
            list: Array(6)
              .fill(10)
              .map((item, index) => {
                return {
                  name: "安卓屏显示接口" + index,
                  method: "POST",
                  params: {
                    ID: {
                      default: "12231",
                      type: "number"
                    }
                  }
                };
              })
          }
        };
      })
  },
  mutations: {
    changeTabIndex(state, { name, index }) {
      state.location[name].tabIndex = index;
    },
    changeProjectIndex(state, { index }) {
      state.location.project.projectIndex = index;
    },
    changeContentIndex(state,{index}){
      state.location.project.contentIndex = index;
    }
  }
};

export default {
  modules: {
    user,
    content
  }
};
