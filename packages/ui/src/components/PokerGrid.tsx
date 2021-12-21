import React, { FC } from 'react';
import { Button, Text, View } from '../elements';

type CardValue = number | string;

interface IPokerGrid {
  deck?: CardValue[];

  onClick(card: CardValue): void;
}

const defaultDeck: CardValue[] = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 90, 100];

const PokerGrid: FC<IPokerGrid> = ({ deck = defaultDeck, onClick }) => {
  return (
    <View
      tw={`
        flex-row flex-wrap justify-between items-center
        -mx-2 
        border-red-300
      `}
    >
      {deck.map((card) => (
        <Button
          key={card}
          tw={`
            w-25 h-25 mt-1 mb-6 mx-2 justify-center items-center
            border-2 border-gray-500 rounded-xl
            bg-pink-200 dark:bg-gray-900
          `}
          onPress={() => onClick(card)}
        >
          <Text tw={`text-xl text-center font-medium bg-transparent`}>{card}</Text>
        </Button>
      ))}
    </View>
  );
};

export type { CardValue, IPokerGrid };
export { PokerGrid };
