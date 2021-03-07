import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

export const ProductCard = ({good}) => {
  const {imgUrl, title, price, id} = good;

  return(
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <div className="d-flex justify-content-between">
          <span className="price">{ price }</span>
          <NavLink to="#" className="btn btn-primary">
            <FontAwesomeIcon icon={faCartPlus} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}