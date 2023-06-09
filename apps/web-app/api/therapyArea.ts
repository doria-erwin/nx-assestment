import axios, { AxiosInstance, AxiosResponse } from 'axios';
interface ResponseError extends Error {
    response: AxiosResponse
}

export const axiosInstanceTherapy: AxiosInstance = axios.create({
    baseURL: process.env.NX_API_URL_THERAPY,
    timeout: 150000,
    timeoutErrorMessage: 'Time out!',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstanceTherapy.interceptors.response.use(function (response) {
    if (response.status === 200) {
        return response.data;
    } else {
        const error: ResponseError = {
            ...new Error(response.statusText),
            response
        }

        throw error;
    }
}, function (error) {
    if (error?.response?.status === 401) {
        window.location.href = '/auth/login';
    }
    return Promise.reject(error);
});