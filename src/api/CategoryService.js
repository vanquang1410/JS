import axiosClient from './axiosClient';

const categoryApi = {
	async getListsCategory(params) {
		try {
			const newParams = { ...params }
			const url = `category/lists`;
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- E ', e);
		}
	},

	async findById(id) {
		try {
			const url = `category/show/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
			return {};
		}
	},
}

export default categoryApi;
