import React, { Component } from 'react';
import Card from './Card';

export type CardType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

class CardsList extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((res) => res.json())
      .then((json) => this.setState({ cards: json }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.cards);
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
