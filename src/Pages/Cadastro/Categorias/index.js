import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategorias () {
    return  (
        <PageDefault>
            <h1> Cadastro de  Categorias </h1>
            <Link to = "/cadastro/categorias">
                Cadatro de categorias
            </Link>
        </PageDefault>
    );
}   

export default CadastroCategorias;