import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValores({
      ...valores,
      [chave]: valor,
    });
  };

  const inputHandler = ({ target }) => {
    setValue(
      target.getAttribute('name'),
      target.value,
    );
  };

  const clearForm = () => {
    setValores(valoresIniciais);
  };

  return [
    valores,
    inputHandler,
    clearForm,
  ];
}

export default useForm;
