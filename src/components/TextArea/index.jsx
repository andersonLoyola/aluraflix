import React from 'react';
import PropTypes from 'prop-types';

function TextArea({
  tituloDoCampo,
  nomeDoCampo,
  valor,
  handler,
}) {
  const id = `id_${nomeDoCampo}`;
  return (
    <div>
      <label htmlFor={id}>
        {tituloDoCampo}
        <textarea
          id={id}
          value={valor}
          name={nomeDoCampo}
          onChange={handler}
        />
      </label>
    </div>
  );
}

TextArea.propTypes = {
  tituloDoCampo: PropTypes.string.isRequired,
  nomeDoCampo: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default TextArea;
