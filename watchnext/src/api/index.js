import axios from 'axios';

import { API_URL } from "../constants/api";


const getHeaders = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return {
            Authorization: `Bearer ${token}` 
        }
    }
    return {}
}

const createApiRequest = async ({method, data, params, url, errorHandler, afterSuccess}) => {
    try {
        const config = {};
        const headers = getHeaders();
        config.headers = headers;

        const requestData = method === 'get' ? params : data

        const response = await axios[method](`${API_URL}${url}`, requestData, config);
        if (afterSuccess) {
             console.log(response)
            afterSuccess(response);
        }

        return response;
    } catch (err) {
        if (errorHandler) {
            errorHandler(err);
        }

        return err;
    }
}

export default createApiRequest;