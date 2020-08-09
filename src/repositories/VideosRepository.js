import URL from '../config';

const URL_VIDEOS = `${URL}/videos`;

function create(dadosVideo) {
  return fetch(URL_VIDEOS, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(dadosVideo),
  }).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const categoriasComVideo = respostaDoServer.json();
      return categoriasComVideo;
    }
    throw new Error(' :z srry bout that bro but cannot register you video');
  });
}

export default {
  create,
};
