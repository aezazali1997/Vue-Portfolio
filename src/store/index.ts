import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { IState } from "@/interfaces/State.interface";
import { IProjectYear } from "@/interfaces/ProjectsYear.interface";
export const key: InjectionKey<Store<IState>> = Symbol();
export const store = createStore<IState>({
  state: {
    projects: [],
  },
  mutations: {
    FETCH_PROJECTS(state: IState, projects: IProjectYear[]) {
      state.projects = projects;
    },
  },
  actions: {
    projects({ commit }, timelineObj: IProjectYear[]) {
      commit("FETCH_PROJECTS", timelineObj);
    },
  },
});
