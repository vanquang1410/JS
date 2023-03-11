import axios from 'axios';
import * as process from 'process';

const axiosClient = axios.create({
	// baseURL: `https://api-ecm.123code.net/api`,
	baseURL: process.env.REACT_APP_URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(),
})

// let infoToken = getDataLocalStorageByKey('data');
// console.log('infoToken', infoToken);
// let token = (infoToken && infoToken.accessToken) ? infoToken.accessToken : ''

if (localStorage.getItem('accessToken')) {
	axiosClient.defaults.headers.common['Authorization'] =  'Bearer ' + localStorage.getItem('accessToken');
}

// axiosClient.interceptors.response.use(
// 	function (response) {
// 		if (
// 			(response.data && response.data.error_code === 401) ||
// 			(response.data && response.data.code === 401) ||
// 			(response.data && response.data.statusCode === 401) ||
// 			(response.data && response.data.status === 401)
// 		) {
// 			console.log('----------axiosClient@response ', response);
// 			remoteDataLocalStorageByKey('data');
// 		}
// 		return response
// 	},
// 	function (error) {
// 		if (error?.response?.status === 401 && error?.response?.data?.statusCode === 401) {
// 			console.log('---------- hết hạn token hoạc chưa login => axiosClient@response ', error);
// 			// remoteDataLocalStorageByKey('data')
// 		}
// 		return Promise.reject(error)
// 	}
// )



export default axiosClient;
