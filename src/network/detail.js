import request from './request'

//detail页面请求后端数据
export function getDetailTnfo(id) {
    return request({
        url: '/detail?' + { id: id },
        params: {
            id
        }
    })
}