import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { hostUrl } from '@/utils/baseUrl';

export const QuizAdminApi = createApi({
    reducerPath: 'QuizAdminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: hostUrl,
        prepareHeaders: (headers) => {
            if (typeof window !== 'undefined') {
                const tokenString = localStorage.getItem('token');
                if (tokenString) {
                    try {
                        const currentToken: string = JSON.parse(tokenString);
                        headers.set('Authorization', `Bearer ${currentToken}`);
                    } catch (e) {
                        console.warn('Token parsing failed:', e);
                    }
                }
            }
            headers.set('Content-Type', 'application/json');
            headers.set('ngrok-skip-browser-warning', 'true');
            return headers;
        },
    }),
    tagTypes: ['QuizType'],
    endpoints: (builder) => ({
      
    }),
});
export const {

} = QuizAdminApi;
