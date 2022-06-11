import React, { Component } from 'react';
import Card from './Card';

export type CardType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type CardsListPropsType = Record<string, never>;

type CardsListStateType = {
  cards: CardType[];
};

class CardsList extends Component<CardsListPropsType, CardsListStateType> {
  state = {
    cards: [],
  };

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((res) => res.json() as Promise<CardType[]>)
      .then((json) => this.setState({ cards: json }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="cards-list">
        {this.state.cards.length > 0
          ? this.state.cards.map((card: CardType) => <Card key={card.id} {...card} />)
          : 'Empty list'}
      </div>
    );
  }
}

export default CardsList;
