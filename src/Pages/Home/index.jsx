import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

// import DadosCategorias from '../../Data/dados_iniciais.json';
import CategoriasRepository from '../../repositories/CategoriasRepository';
import './index.css';

function Home() {
  const [DadosCategorias, setDadosCategorias] = useState([]);

  useEffect(() => {
    CategoriasRepository.getAllWithVideos().then((resposta) => {
      setDadosCategorias(resposta);
    }).catch((e) => console.log(e.message));
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {DadosCategorias.length === 0 && (
      <div>
        ...loading
      </div>
      )}
      {DadosCategorias.length >= 1 && (
        <BannerMain
          videoTitle="O que faz uma desenvolvedora front-end? #HipstersPontoTube"
          url="https://www.youtube.com/watch?v=ZY3-MFxVdEw"
          videoDescription="O que é fontend? Trabalhando na área os termo HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        />
      )}

      {DadosCategorias.map((e) => (
        <Carousel ignoreFirstVideo category={e} key={e.titulo} />
      ))}
    </PageDefault>
  );
}

export default Home;
