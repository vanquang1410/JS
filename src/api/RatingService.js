import axiosClient from './axiosClient';

const ratingApi = {
	async createRate(data) {
		try {
			const url = `vote/store`;
			const response = await axiosClient.post(url, data)

			if (response.status === 201) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- CreateRate@Error ', e);
		}
	},

	async getListRateByProducts(page, page_size, product_id, vote) {
		try {
			console.log('------- vote: ', vote);
			const url = `vote/lists/?${page && `page=${page}`}${page_size && `&page_size=${page_size}`}${product_id && `&product_id=${product_id}&number=${vote}`}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getRate@Error ', e);
		}
	},

	async updateRateByProducts(idVote, data) {
		try {
			const url = `vote/update/${idVote}`;
			const response = await axiosClient.put(url, data)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- updateRate@Error ', e);
		}
	},
}

export default ratingApi;
