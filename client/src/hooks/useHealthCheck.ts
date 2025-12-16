import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';

export const useHealthCheck = () => {
    return useQuery({
        queryKey: ['health'],
        queryFn: async () => {
            const { data } = await api.get('/');
            return data; // { message: "🚀 LifeOS-A2Z Backend is running!" }
        },
    });
};