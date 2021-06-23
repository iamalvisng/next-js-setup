import useSWR from 'swr';
import axios from 'axios';
import { BASE_URL } from '../constants';

const fetcher = (url: string) =>
  axios({
    method: 'GET',
    url,
    withCredentials: true,
  }).then((res) => res.data);

function useGetDataFromEndPoint(endpoint: string) {
  const url = `${BASE_URL}${endpoint}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGetDataFromEndPoint;
