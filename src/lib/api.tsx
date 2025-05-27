// lib/api.ts
import { hostUrl } from '@/utils/baseUrl';
import axios from 'axios';

const BaseURL =hostUrl;

const defaultHeaders = {
  'Content-Type': 'application/json',
};

interface HttpOptions {
  headers: Record<string, string | boolean>;
}

const getHttpOptions = (headers: Record<string, any>): HttpOptions => ({
  headers,
});

export const ApiPostNoAuth = (endpoint: string, data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseURL + endpoint, data, getHttpOptions({ ...defaultHeaders, isAuth: false }))
      .then((response) => resolve(response))
      .catch((error) => {
        if (error?.response?.data?.error) {
          reject(error.response.data.error);
        } else {
          reject(error);
        }
      });
  });
};
