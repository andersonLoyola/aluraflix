import URL from '../config';

const URL_CATEGORIAS = `${URL}/categorias`;
const URL_CATEGORIAS_COM_VIDEOS = `${URL_CATEGORIAS}?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIAS_COM_VIDEOS).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const categoriasComVideo = respostaDoServer.json();
      return categoriasComVideo;
    }
    throw new Error(' :z srry bout that bro');
  });
}

function getAllCategories() {
  return fetch(`${URL}/categorias`).then(async (response) => {
    if (response.ok) {
      const resposta = await response.json();
      return resposta;
    }
    throw new Error(' :z srry bout that bro butt cannot fetch data from api');
  });
}

function submitCategories(dadosCategorias) {
  return fetch(`${URL}/categorias`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(dadosCategorias),
  }).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const categoriasComVideo = respostaDoServer.json();
      return categoriasComVideo;
    }
    throw new Error(' :z srry bout that bro but cannot register you video');
  });
}

export default {
  getAllWithVideos,
  getAllCategories,
  submitCategories,
};
