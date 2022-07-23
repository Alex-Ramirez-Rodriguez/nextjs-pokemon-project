import { Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme?.colors.gray100.value,
      }}
      className="navbar-container"
    >
      <div className="pokemon-title-container">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
          alt="example"
          width={50}
          height={50}
        />

        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okemon
        </Text>
      </div>
      <div className="favorites-title-container">
        <Text color="white">Favorites</Text>
      </div>
    </div>
  );
};
