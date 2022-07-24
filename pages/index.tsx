import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Pokemon list">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

// Cuando hacemos el build para producción solo se ejecuta una vez
// No se hace una petición adicional del lado del cliente
export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('Hello world');
  return {
    props: {
      name: 'Alex',
    },
  };
};

export default HomePage;
