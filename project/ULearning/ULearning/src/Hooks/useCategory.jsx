import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
const useCategory = () => {
    const user = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const axiosSecure = useAxiosSecure();
    const { refetch, data: categories = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            // const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            const res = await axiosSecure.get('/formCourses')
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [categories, refetch]

}
export default useCategory;