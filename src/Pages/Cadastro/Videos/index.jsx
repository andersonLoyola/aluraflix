import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { Button } from '../../../components/Button';
import InputField from '../../../components/InputField';
import useForm from '../../../hooks/useForm';
import VideosRepository from '../../../repositories/VideosRepository';
import CategoriasRepository from '../../../repositories/CategoriasRepository';

function CadastroVideos() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    url: '',
    titulo: '',
    categoria: '',
  };
  const [valores, inputHandler, clearForm] = useForm(valoresIniciais);

  useEffect(() => {
    CategoriasRepository.getAllCategories().then((response) => setCategorias(response));
  }, []);

  // eslint-disable-next-line max-len
  const extractedCattegory = categorias.find((category) => category.titulo.toLowerCase() === valores.categoria.toLowerCase());

  return (
    <PageDefault>
      <h1>
        {valores.titulo === ''
          ? 'Cadastro de videos'
          : `Cadastro do video: ${valores.titulo}`}
      </h1>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          VideosRepository.create({
            url: 'https://youtu.be/hhQ3RtvmfEg',
            titulo: '#ImersaoReact Aula 5 - Gerenciador de Video Completo',
            categoriaId: extractedCattegory.id,
          }).then(
            history.push('/'),
            clearForm(),
          );
        }
      }
      >

        <InputField
          name="titulo"
          label="titulo"
          type="text"
          value={valores.titulo}
          handler={inputHandler}
        />

        <InputField
          name="url"
          label="url"
          type="text"
          value={valores.url}
          handler={inputHandler}
        />

        <InputField
          name="categoria"
          label="categoria"
          type="text"
          value={valores.categoria}
          handler={inputHandler}
        />

        {/* <select name="categoriaId" id="categorias" onChange={inputHandler}>
          {categorias.map((e) => <option value={e.id} key={e.id}>{e.titulo}</option>)}
        </select> */}
        <Button> Cadastrar </Button>
      </form>
      <Link to="/cadastro/categorias">
        Cadatro de categorias
      </Link>
    </PageDefault>
  );
}

export default CadastroVideos;
