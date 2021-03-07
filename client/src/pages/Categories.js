import React, { Fragment } from 'react';
import { CatCard } from '../components/CatCard';

export const Categories = () => {
  const tempData = {
    title: 'Название',
    imgUrl: 'example.jpg',
    id: '123',
  };

  return(
    <Fragment>
      <h1>Categories</h1>
      <br/>
      <div className="container d-flex">
        <CatCard category={tempData} />
        <CatCard category={tempData} />
        <CatCard category={tempData} />
        <CatCard category={tempData} />
      </div>

    </Fragment>
  );
}