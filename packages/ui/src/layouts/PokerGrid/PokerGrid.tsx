import React, { FC } from 'react';
import { Button, Text, View } from '../../elements';
import tw from 'twrnc';

enum TShirts {
  'xs' = 'xs',
  's' = 's',
  'm' = 'm',
  'l' = 'l',
  'xl' = 'xl',
  'xxl' = 'xxl',
}

type CardValue = number | TShirts;

interface IPokerGrid {
  deck?: CardValue[];

  onClick(card: CardValue): void;
}

const defaultDeck: CardValue[] = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 90, 100];

const PokerGrid: FC<IPokerGrid> = ({ deck = defaultDeck, onClick }) => {
  return (
    <View tw={'flex flex-row flex-wrap justify-evenly px-3'}>
      {deck.map((card) => (
        <View key={card} tw="w-1/3 px-3 py-3">
          <Button tw={`border bg-gray-900`} onPress={() => onClick(card)}>
            <Text tw={'px-4 py-5 text-md text-center font-bold bg-pink-200 dark:bg-gray-900'}>{card}</Text>
          </Button>
        </View>
      ))}
    </View>
  );
};

export type { CardValue, TShirts, IPokerGrid };
export { PokerGrid };
