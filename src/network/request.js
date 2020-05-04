import axios from 'axios'
export default function request(config) {
	return new Promise((resolve, reject) => {
		const instance = axios.create({
			baseURL: 'http://127.0.0.1:8000/hongshu',
			timeout: 5000
		})
		instance(config).then((res) => {
			resolve(res)
		}).catch((err) => {
			reject(err)
		})
	})
}