import React from 'react';

import './Card.css';

export const CatCard = ({category}) => {
  const {imgUrl, title, id} = category;

  return(
    <div className="card col-3">
      <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
        </div>
    </div>
  );
}