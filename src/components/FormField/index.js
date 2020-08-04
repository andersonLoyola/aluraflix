import React from 'react';


function FormField(
    {
        tituloDoCampo,
        tipoDoCampo,
        nomeDoCampo,
        valor,
        handler
    }
) {
    return (
        <div>
            <label>
                {tituloDoCampo}
                <input 
                    type= {tipoDoCampo}
                    value = { valor }
                    name = { nomeDoCampo }
                    onChange = { handler }
                />
            </label>
        </div>
    );
}

export default FormField;