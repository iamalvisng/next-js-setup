/* eslint-disable camelcase */
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import usePokemon from '../services/usePokemon';

type TStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

function Pokemon() {
  const { query } = useRouter();
  const { pokemon, isError, isLoading } = usePokemon(query.name || 'bulbasaur');

  return (
    <>
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && (
        <div className="container mx-auto justify-center flex">
          <div className="mx-auto my-32">
            <div className="flex max-w-2xl bg-white p-12 rounded-3xl">
              <h2 className="text-blue-500 capitalize text-2xl font-bold">Loading...</h2>
            </div>
          </div>
        </div>
      )}

      {(isError || !pokemon) && !isLoading && (
        <div className="container mx-auto justify-center flex">
          <div className="mx-auto my-32">
            <div className="flex max-w-2xl bg-white p-12 rounded-3xl">
              <h2 className="text-red-600 capitalize text-2xl font-bold">Nothing here!</h2>
            </div>
          </div>
        </div>
      )}

      {pokemon && !isError && !isLoading && (
        <section className="container mx-auto justify-center flex">
          <div className="mx-auto my-32">
            <div className="flex max-w-2xl bg-white p-12 rounded-3xl relative">
              <div
                className="absolute bg-pink-500 rounded-3xl"
                css={{
                  top: 24,
                  left: -24,
                  right: 24,
                  bottom: -24,
                  zIndex: -1,
                }}
              />

              <div className="flex flex-col pr-8 space-y-8">
                <div>
                  <Image
                    src={pokemon?.sprites?.front_shiny}
                    height={80}
                    width={80}
                    alt={pokemon?.name}
                  />
                </div>
                <div>
                  <Image
                    src={pokemon?.sprites?.back_shiny}
                    height={80}
                    width={80}
                    alt={pokemon?.name}
                  />
                </div>
              </div>

              <div>
                <div className="pb-4">
                  <h1 className="text-gray-800 capitalize text-2xl font-bold">{pokemon?.name}</h1>
                </div>

                <div className="flex space-x-24">
                  <ul>
                    {pokemon?.stats.slice(0, 3).map((stat: TStat) => (
                      <li className="mb-3" key={stat.stat.name}>
                        <div className="mb-1 text-sm text-gray-700 font-semibold uppercase">
                          {stat?.stat.name}
                        </div>
                        <div className="text-gray-600 text-sm">{stat?.base_stat}</div>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {pokemon?.stats.slice(3, 6).map((stat: TStat) => (
                      <li className="mb-3" key={stat.stat.name}>
                        <div className="mb-1 text-sm text-gray-700 font-semibold uppercase">
                          {stat?.stat.name}
                        </div>
                        <div className="text-gray-600 text-sm">{stat?.base_stat}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Pokemon;
