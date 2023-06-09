/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
interface ResponseError extends Error {
    response: AxiosResponse
}

// const API_METRIC = '/metric';
class User {
    protected axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.NX_API_URL_USER,
            timeout: 150000,
            timeoutErrorMessage: 'Time out!',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.addInterceptor(this.axiosInstance)
    }

    protected addInterceptor(instance: AxiosInstance): void {
        instance.interceptors.request.use(async (config) => {
            const accessToken = await this.getAccessTokenAsync()
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config
        }, async (error) => {
            return await Promise.reject(error)
        })
        instance.interceptors.response.use(function (response) {
            if (response.status === 200) {
                return response.data;
            } else {
                const error: ResponseError = { ...new Error(response.statusText), response }
                throw error;
            }
        }, function (error) {
            if (error?.response?.status === 401) {
                window.location.href = '/auth/login';
            }
            return Promise.reject(error);
        });
    }

    protected async getAccessTokenAsync(): Promise<string> {
        // TODO replace
        return ''
    }
}

export default new User();