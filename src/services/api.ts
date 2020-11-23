import http from './http'

export const test = (data = {}) => {
    return http.get('article/list', data)
}
