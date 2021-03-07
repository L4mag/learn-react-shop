import React, { Fragment } from 'react';
import { ProductCard } from '../components/ProductCard';

export const Home = () =>{
  const tempData = {
    title: 'Название',
    imgUrl: 'example.jpg',
    price: '1000',
    id: '123',
  };

  return(
    <Fragment>

      <h1>Home page</h1>

      <h2>Хиты продаж</h2>

      <div className="carousel carousel-hit d-flex">

        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>

      </div>

      <h2>Новые товары</h2>

      <div className="carousel carousel-new d-flex">

        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>

      </div>

      <h2>Товары со скидкой</h2>

      <div className="carousel carousel-sale d-flex">

        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>
        <ProductCard good={ tempData }/>

      </div>

    </Fragment>
  );
}

