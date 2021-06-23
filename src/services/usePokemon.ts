import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { POKEMON_BASE_URL } from '../constants';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function prefetch(name: string) {
  mutate(
    `${POKEMON_BASE_URL}${name}`,
    axios.get(`${POKEMON_BASE_URL}${name}`).then((res) => res.data)
  );
}

function usePokemon(name: string[] | string) {
  const url = POKEMON_BASE_URL;
  const { data, error } = useSWR(`${url}${name}`, fetcher);

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePokemon;
