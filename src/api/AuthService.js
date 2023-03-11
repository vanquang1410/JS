import axiosClient from "./axiosClient";

const authApi = {
    async getProfile() {
        try {
            const url = `auth/profile`;
            const response = await axiosClient.get(url)
            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- getProfile@Error ', e);
            return {
                status: 501,
                data: []
            }
        }
    },

    async login(data) {
        try {
            const url = `auth/login`;
            const response = await axiosClient.post(url, data)
            console.log('----------- login: ', response);
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- login@E ', e);
        }

        return {
            status: 501,
            message: 'Đăng nhập thất bại'
        };
    },

    async register(data) {
        try {
            const url = `auth/register`;
            const response = await axiosClient.post(url, data)

            if (response.data.status === 200) {
                return response.data;
            }

            if (response.data.status === 501) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- E ', e);
        }
    },

    async updateEmail(data) {
        try {
            const url = `user/update-email`;
            const response = await axiosClient.put(url, data)

            if (response.data.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- E ', e);
        }
    },

    async updatePassword(data) {
        try {
            const url = `user/update-password`;
            const response = await axiosClient.put(url, data)

            if (response.data.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- E ', e);
        }
    },

    async updatePhone(data) {
        try {
            const url = `user/update-phone`;
            const response = await axiosClient.put(url, data)

            if (response.data.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- E ', e);
        }
    },

    async updateInfo(data) {
        try {
            const url = `user/update-info`;
            const response = await axiosClient.put(url, data)

            if (response.data.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log('--------------- E ', e);
        }
    },
};

export default authApi;
