import React,  { useState } from 'react';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategorias () {

    const [categorias, setCategorias] =  useState([]);
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const [valores, setValores] = useState(valoresIniciais);

    const setValue = (chave, valor) => {
        setValores({
            ...valores,
            [chave] : valor
            
        })
    }
    
    const inputHandler = ({target}) => {
        setValue(
            target.getAttribute('name'),
            target.value
        )
    }

    return  (
        <PageDefault>
            <h1>Cadastro de categoria: { valores.nome }</h1>
            <form onSubmit= {(e) => {
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
                setValores(valoresIniciais);
                
            }}>
                <fieldset>
                    <FormField
                        tituloDoCampo = "Nome da categoria: "
                        valor = { valores.nome }
                        tipoDoCampo = "text"
                        nomeDoCampo = "nome"
                        handler = { inputHandler }
                    />
                    <div>
                        <label>
                            Descrição da categoria: 
                            <textarea 
                                value = { valores.descricao }
                                name = "descricao"
                                onChange = { inputHandler }
                            />
                        </label>
                    </div>
                    <FormField 
                        tituloDoCampo = "Cor da categoria:"
                        tipoDoCampo = "color"
                        nomeDoCampo = "cor"
                        valor = {valores.cor}
                        onChange = { inputHandler }
                    />
                    <button type="submit">
                        Cadastrar
                    </button>
                </fieldset>
            </form>
            <table>
                <caption>Categorias cadastradas</caption>
                <thead>
                    <tr>
                        <th>Nome da categoria:</th>
                        <th>Descrição da categoria:</th>
                        <th>Cor da categoria:</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria, index) => {
                        return (
                            <tr key = { index }>
                                <td>{ categoria.nome }</td> 
                                <td>{ categoria.descricao }</td>
                                <td style = { {
                                    backgroundColor: categoria.cor,
                                    color: 'white'
                                } }>
                                    {categoria.cor}
                                </td>
                            </tr>
                        ); 
                    })}
                </tbody>
            </table>   
        </PageDefault>
    );
}   

export default CadastroCategorias;