import React from 'react';
import { CardType } from './CardsList';

const Card = ({ thumbnailUrl, title, albumId }: CardType) => {
  return (
    <div className="card">
      <div className="card-thumb" style={{ backgroundImage: `url(${thumbnailUrl})` }}></div>
      <div className="card-title">{title}</div>
      <div className="card-album">Album id: {albumId}</div>
    </div>
  );
};

export default Card;
