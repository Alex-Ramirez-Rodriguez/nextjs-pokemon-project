import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Pokemon list">
      <Button color="gradient">Click me</Button>
      <h1>Hello world from NextUI</h1>
    </Layout>
  );
};

export default HomePage;
