import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon list">
      <ul>
        {pokemons.map((pokemon: SmallPokemon, idx: any) => (
          <div key={pokemon.url}>
            <li>
              {pokemon.id}.- {pokemon.name}
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
  const pokemons = data.results.map((poke, idx) => ({
    ...poke,
    id: idx,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx}.svg`,
  }));
  console.log('🚀 ~ file: index.tsx ~ line 35 ~ pokemons ~ pokemons', pokemons);

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
