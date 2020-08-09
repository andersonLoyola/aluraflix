import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, Td, Tr, Th,
} from './styles';

function TableResponsive({ NomeDaTabela, cabecalhos, categorias }) {
  const key = ({ titulo, descricao, cor }, index) => `${titulo}${cor}${descricao}${index}`;
  return (
    <Table>
      <thead>
        <Tr key="title-container">
          <Th colSpan="3" key={NomeDaTabela}>
            <h1>{NomeDaTabela}</h1>
          </Th>
        </Tr>
        <Tr key="headers-container">
          {cabecalhos.map((cabecalho) => (
            <Th key={cabecalho}>{cabecalho}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {categorias.map((categoria, index) => (
          <Tr key={key(categoria, index)}>
            <Td>{ categoria.titulo }</Td>
            <Td>{ categoria.descricao }</Td>
            <Td style={{
              backgroundColor: categoria.cor,
              color: 'white',
            }}
            >
              {categoria.cor}
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

TableResponsive.propTypes = {
  NomeDaTabela: PropTypes.string.isRequired,
  cabecalhos: PropTypes.arrayOf(PropTypes.string).isRequired,
  categorias: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string,
    cor: PropTypes.string.isRequired,
  })).isRequired,

};

export default TableResponsive;
