import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import DadosCategorias from '../../Data/dados_iniciais.json';
import './index.css';

function Home() {
  return (
    <div style = {{background: '#141414'}}> 
      <Menu />
      <BannerMain 
        videoTitle = {DadosCategorias.categorias[0].videos[0].titulo}
        videoDescription = {"O que é fontend? Trabalhando na área os termo HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
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

export default Home;
