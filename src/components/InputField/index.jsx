import React from 'react';
import PropTypes from 'prop-types';

function InputField(
  {
    tituloDoCampo,
    tipoDoCampo,
    nomeDoCampo,
    valor,
    handler,
  },
) {
  const id = `id_${nomeDoCampo}`;
  return (
    <div>
      <label htmlFor={id}>
        {tituloDoCampo}
        <input
          id={id}
          type={tipoDoCampo}
          value={valor}
          name={nomeDoCampo}
          onChange={handler}
        />
      </label>
    </div>
  );
}

InputField.defaultProps = {
  tipoDoCampo: 'text',
};

InputField.propTypes = {
  tituloDoCampo: PropTypes.string.isRequired,
  tipoDoCampo: PropTypes.string,
  nomeDoCampo: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default InputField;
