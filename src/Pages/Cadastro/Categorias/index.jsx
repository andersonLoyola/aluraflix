import React, { useState, useEffect } from 'react';
import InputField from '../../../components/InputField';
import Table from '../../../components/Table';
import PageDefault from '../../../components/PageDefault/index';

function CadastroCategorias() {
  const tableHeaders = ['Nome da categoria', 'Descrição da categoria', 'Cor da categoria'];
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [valores, setValores] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,

    });
  };
  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (valor) => {
      try {
        const resposta = await valor.json();
        setCategorias([
          ...resposta,
        ]);
      } catch (error) {
        console.error(error);
      }
    }).catch((e) => {
      console.error(e);
    });
  }, []);

  const inputHandler = ({ target }) => {
    setValue(
      target.getAttribute('name'),
      target.value,
    );
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        { valores.nome }
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >
        <InputField
          label="Nome da categoria"
          value={valores.nome}
          type="text"
          name="nome"
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
        <button type="submit">
          Cadastrar
        </button>
      </form>

      <Table
        titulo="Categorias"
        cabecalhos={tableHeaders}
        categorias={categorias}
      />
    </PageDefault>
  );
}

export default CadastroCategorias;
