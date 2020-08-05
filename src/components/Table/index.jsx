import React from 'react';
import PropTypes from 'prop-types';

function Table({ titulo, cabecalhos, categorias }) {
  return (
    <table>
      <caption>{titulo}</caption>
      <thead>
        <tr>
          {cabecalhos.map((cabecalho) => (
            <th key={cabecalho}>{cabecalho}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={`${categoria}`}>
            <td>{ categoria.nome }</td>
            <td>{ categoria.descricao }</td>
            <td style={{
              backgroundColor: categoria.cor,
              color: 'white',
            }}
            >
              {categoria.cor}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  titulo: PropTypes.string.isRequired,
  cabecalhos: PropTypes.arrayOf(PropTypes.string).isRequired,
  categorias: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
  })).isRequired,

};

export default Table;
