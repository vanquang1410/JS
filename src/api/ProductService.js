import axiosClient from './axiosClient';

const productApi = {
	async getListsProducts(params) {
		try {
			const newParams = { ...params }
			const url = `product/lists`;
			console.log('--------- newParams: ', newParams);
			const response = await axiosClient.get(url, {
				params: {...newParams},
			})

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getListsProducts@Error ', e);
		}

		return  {
			status: 501
		}
	},

	async getListsProductsByPage(page, page_size) {
		try {
			const url = `product/lists?page=${page}&page_size=${page_size}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- getListsProducts@Error ', e);
		}

		return  {
			status: 501
		}
	},

	async findById(id) {
		try {
			const url = `product/show/${id}`;
			const response = await axiosClient.get(url)

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log('--------------- findById@Error ', e);
		}

		return  {
			status: 501
		}
	},
}

export default productApi;
