import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

const HomePage: NextPage = ({ pokemons }: any) => {
  return (
    <Layout title="Pokemon list">
      <ul>
        {pokemons.map((pokemon: SmallPokemon, idx: any) => (
          <div key={pokemon.url}>
            <li>
              {idx + 1}.- {pokemon.name}
            </li>
          </div>
        ))}
      </ul>
    </Layout>
  );
};

// Cuando hacemos el build para producción solo se ejecuta una vez
// No se hace una petición adicional del lado del cliente
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons = data.results;

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
