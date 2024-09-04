import { useState } from 'react';
import { Card } from './Card';

export const CardsGrid = () => {
  const [showCardId, setShowCardId] = useState<string | null>(null);

  const handleCardClick = (id: string | null) => {
    setShowCardId(id);
  };

  return (
    <section className="grid md:grid-cols-cardsGrid2 xl:grid-cols-cardsGrid3 w-full gap-10"></section>
  );
};
