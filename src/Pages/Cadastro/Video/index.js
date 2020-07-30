import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideos () {
    return  (
        <PageDefault>
            <h1> Cadastro de  videos </h1>
            <Link to = "/cadastro/videos">
                Cadatro de videos
            </Link>
        </PageDefault>
    );
}   

export default CadastroVideos;