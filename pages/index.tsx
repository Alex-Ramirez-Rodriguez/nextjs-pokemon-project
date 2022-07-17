import { NextPage } from 'next';
import { Button } from '@nextui-org/react';

const HomePage: NextPage = () => {
  return (
    <>
      <Button color="gradient">Click me</Button>
      <h1>Hello world from NextUI</h1>
    </>
  );
};

export default HomePage;
