const user = {
  namespaced: true,
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
  namespaced: true,
  state: {
    location: {
      topNav: {
        tabIndex: "projectManage0"
      },
      project: {
        projectIndex: 0,
        contentIndex: 0,
        isTotalShow: true
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
  getters: {
    currentProject: state => state.project[state.location.project.projectIndex],
    currentContent: state =>
      state.project[state.location.project.projectIndex].content.list[
        state.location.project.contentIndex
      ],
    currentContentList: state =>
      state.project[state.location.project.projectIndex].content.list,
    currentContentIndex: state => state.location.project.contentIndex,
    isTotalShow: state => state.location.project.isTotalShow
  },
  mutations: {
    changeTabIndex(state, { name, index }) {
      state.location[name].tabIndex = index;
    },
    changeProjectIndex(state, { index }) {
      state.location.project.projectIndex = index;
      state.location.project.isTotalShow = true;
    },
    changeContentIndex(state, { index }) {
      state.location.project.contentIndex = index;
    },
    setTotalShow(state,{status}){
      state.location.project.isTotalShow = status;
    }
  }
};

export default {
  modules: {
    user,
    content
  }
};
