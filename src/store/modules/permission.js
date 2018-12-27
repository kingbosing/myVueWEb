import { convertToRouters, constantRouterMap } from '@/router'
import request from '@/utils/request'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    permissions: [],
    // 是否存在管理菜单
    hasManager: false
  },
  mutations: {
    SET_ROUTERS: (state, permissions) => {
      state.permissions = permissions.sort(c => c.SortId)
      var routers = convertToRouters(state)
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        request.get('apix/v2/auth/my').then(c => {
          var res = c.data
          if (!res.Code) {
            const data = res.Data

            commit('SET_ROUTERS', data)
            if (resolve) resolve()
          }
        })
      })
    }
  }
}

export default permission
