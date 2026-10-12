const repository = require('./utils/repository')

App({
  globalData: {
    user: null
  },

  onLaunch() {
    repository.initialize()
    this.globalData.user = repository.getCurrentUser()
  },

  refreshUser() {
    this.globalData.user = repository.getCurrentUser()
    return this.globalData.user
  }
})
