import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../../components/InputField';
import TableResponsive from '../../../components/Table';
import { Button } from '../../../components/Button';
import PageDefault from '../../../components/PageDefault/index';
import useForm from '../../../hooks/useForm';
import CategoriasRespository from '../../../repositories/CategoriasRepository';

function CadastroCategorias() {
  const tableHeaders = ['Titulo da categoria', 'Descrição da categoria', 'Cor da categoria'];

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#ffffff',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, inputHandler, clearForm] = useForm(valoresIniciais);

  useEffect(() => {
    CategoriasRespository.getAllCategories().then((resposta) => setCategorias(
      resposta,
    ));
  }, []);

  return (
    <PageDefault>
      <div id="cadastro">

        <h1>
          Cadastro de categoria:
          { valores.titulo }
        </h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          CategoriasRespository.submitCategories(valores);
          setCategorias([
            ...categorias,
            valores,
          ]);
          clearForm();
        }}
        >
          <InputField
            label="Nome da categoria"
            value={valores.titulo}
            type="text"
            name="titulo"
            handler={inputHandler}
          />

          <InputField
            type="textarea"
            label="Descrição da categoria"
            name="descricao"
            value={valores.descricao}
            handler={inputHandler}
          />

          <InputField
            type="color"
            name="cor"
            label="Cor"
            value={valores.cor}
            handler={inputHandler}
          />

          <Button className="Button">
            Cadastrar
          </Button>
        </form>
      </div>
      <br />
      <div id="categorias">
        <TableResponsive
          NomeDaTabela="Categorias"
          titulo="Categorias"
          cabecalhos={tableHeaders}
          categorias={categorias}
        />
      </div>
      <br />
      <Link to="/cadastro/videos">
        Cadastro de videos
      </Link>
      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroCategorias;
