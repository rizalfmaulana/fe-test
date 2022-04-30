import Cookies from "js-cookie";

export default {
  state: {
    token: "",
    user: {},
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload;
      Cookies.set("token", payload, { expires: 1 });
    },
    setUser: (state, payload) => {
      state.user = payload;
      Cookies.set("user", payload, { expires: 1 });
    },
  },
  actions: {
    setToken: ({ commit }, payload) => {
      commit("setToken", payload);
    },
    setUser: ({ commit }, payload) => {
      commit("setUser", payload);
    },
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
  },
};
