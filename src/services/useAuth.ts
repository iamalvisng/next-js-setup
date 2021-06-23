import FormData from 'form-data';
import useSWR from 'swr';
import axios from 'axios';
import { BASE_URL } from '../constants';

const fetcher = (url: string, data: FormData) =>
  axios({
    method: 'POST',
    url,
    data,
  }).then((res) => res.data);

type TForm = {
  email: string;
  password: string;
};

function useAuth(shouldFetch = false, endpoint: string, formData: TForm | undefined) {
  const url = `${BASE_URL}${endpoint}`;

  const bodyFormData = new FormData();
  bodyFormData.append('email', formData?.email);
  bodyFormData.append('password', formData?.password);

  const { data, error } = useSWR(!shouldFetch ? null : url, () => fetcher(url, bodyFormData));

  return {
    auth: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useAuth;
