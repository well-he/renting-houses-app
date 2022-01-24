const TOKEN_NAME = 'hkzf_token'

// 获取 token
const getToken = () => localStorage.getItem(TOKEN_NAME)

// 设置 token
const setToken = value => localStorage.setItem(TOKEN_NAME, value)

// 删除 token
const removeToken = () => localStorage.removeItem(TOKEN_NAME)

// 是否登录（有权限）
const isAuth = () => !!getToken()

export { getToken, setToken, removeToken, isAuth }
