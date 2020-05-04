import request from './request'
//list页面请求后端数据
export function getIndexList() {
    return request({
        url: '/getlist'
    })
}