const content = {
  namespaced: true,
  state: {
    location: {
      topNav: {
        tabIndex: "projectManage0"
      },
      leftNav: {
        tabIndex: "totalShow"
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
          desc: "desc" + b,
          createTime: "2017年8月29日 11:05:48",
          content: Array(20)
            .fill(10)
            .map((item, index) => {
              return {
                name: "Try tro" + index,
                plainDesc: "PlainDesc",
                createTime: "2017年9月1日 09:17:39",
                global: {
                  method: "GET",
                  version: "1.1"
                },
                request: {
                  url: "",
                  exampleData: "{work:12321}",
                  contentType: "X-WWW-FORM-URLENCODED"
                },
                response: {
                  exampleData: "{work:12321}",
                  contentType: "X-WWW-FORM-URLENCODED"
                }
              };
            })
        };
      })
  },
  getters: {
    currentProject: state => state.project[state.location.project.projectIndex],
    currentContent: state =>
      state.project[state.location.project.projectIndex].content[
        state.location.project.contentIndex
      ],
    currentContentList: state =>
      state.project[state.location.project.projectIndex].content,
    currentContentIndex: state => state.location.project.contentIndex,
    isTotalShow: state => state.location.project.isTotalShow
  },
  mutations: {
    changeTabIndex(state, { name, index }) {
      state.location[name].tabIndex = index;
    },
    changeLeftNavIndex(state, { index }) {
      state.location.leftNav.tabIndex = index;
    },
    changeProjectIndex(state, { index }) {
      state.location.project.projectIndex = index;
    },
    changeContentIndex(state, { index }) {
      state.location.project.contentIndex = index;
    }
  }
};

export default content;