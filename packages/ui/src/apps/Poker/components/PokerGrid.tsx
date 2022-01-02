import React, { FC } from 'react';
import { Button, Text, View } from '../../../elements';
import { PokerCard } from './PokerCard';

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
        <PokerCard key={card} onPress={() => onClick(card)}>
          {card}
        </PokerCard>
      ))}
    </View>
  );
};

export type { CardValue, IPokerGrid };
export { PokerGrid };
