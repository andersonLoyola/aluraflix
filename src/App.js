import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import DadosCategorias from './Data/dados_iniciais.json'
import './App.css';

function App() {
  return (
    <div style = {{background: '#141414'}}> 
      <Menu />
      <BannerMain 
        videoTitle = {DadosCategorias.categorias[0].videos[0].titulo}
        videoDescription = {"Dddddddddddddd"}
        url = {DadosCategorias.categorias[0].videos[0].url}
        
      />
      <Carousel 
        ignoreFirstVideo
        category = {DadosCategorias.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category = {DadosCategorias.categorias[1]}
      />
      <Carousel 
        ignoreFirstVideo
        category = {DadosCategorias.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category = {DadosCategorias.categorias[3]}
      />
      <Carousel 
        ignoreFirstVideo
        category = {DadosCategorias.categorias[4]}
      />
      <Footer />
    </div>
  );
}

export default App;
