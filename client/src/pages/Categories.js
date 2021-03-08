import React from 'react';
import { CatCard } from '../components/CatCard';

export const Categories = () => {
  const tempData = {
    title: 'Название',
    imgUrl: 'example.jpg',
    id: '123',
  };

  return(
    <>
      <h1>Categories</h1>
      <br/>
      <div className="d-flex">
        <CatCard category={tempData} />
        <CatCard category={tempData} />
        <CatCard category={tempData} />
        <CatCard category={tempData} />
      </div>
    </>
  );
}