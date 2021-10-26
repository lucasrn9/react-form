/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Wrapper, Formulary, Field, Personal, Idade, Sexo, Title, Select, Button, Message,
} from './FormStyle';
import { schema } from '../../validations/FormValidation';

const Form = () => {
  const [validationMessage, setValidationMessage] = useState({
    type: '',
    message: '',
  });
  const formValuesInitialState = {
    name: '',
    email: '',
    cep: '',
    uf: '',
    cidade: '',
    logradouro: '',
    idade: '',
    sexo: 'M',
  };

  const [formValues, setFormValues] = useState(formValuesInitialState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const isValid = await schema.validate(data).catch((err) => setValidationMessage({ type: 'error', message: err.errors }));
    if (isValid === undefined) { return null; } if (isValid) {
      setValidationMessage({
        type: 'success',
        message: 'Formulario enviado com sucesso',
      });
      console.log(isValid);
      setFormValues(formValuesInitialState);
    }
  };

  return (
    <Wrapper className="form-wrapper">
      <Formulary className="form" onSubmit={handleFormSubmit}>
        <Field type="text" name="name" id="name" placeholder="Nome" onChange={handleFormChange} value={formValues.name} />
        <Field type="email" name="email" id="email" placeholder="Email" onChange={handleFormChange} value={formValues.email} />
        <Field type="text" name="cep" id="cep" placeholder="CEP" onChange={handleFormChange} value={formValues.cep} />
        <Field type="text" name="uf" id="uf" placeholder="UF" onChange={handleFormChange} value={formValues.uf} />
        <Field type="text" name="cidade" id="cidade" placeholder="Cidade" onChange={handleFormChange} value={formValues.cidade} />
        <Field type="text" name="logradouro" id="logradouro" placeholder="Logradouro" onChange={handleFormChange} value={formValues.logradouro} />

        <Personal className="personal">
          <Idade className="idade">
            <Title>Idade: </Title>
            <Select name="idade" id="idade">
              <option value="menos_de_18">Menos de 18</option>
              <option value="entre_18_e_26">Entre 18 e 26</option>
              <option value="entre_26_e_36">Entre 26 e 36</option>
              <option value="entre_36_e_50">Entre 36 e 50</option>
              <option value="mais_de_50">Mais de 50</option>
            </Select>
          </Idade>
          <Sexo className="sexo">
            <Title>Sexo: </Title>
            <label>
              M
              <input type="radio" name="sexo" id="sexo" value="M" onChange={handleFormChange} checked={formValues.sexo === 'M'} />
            </label>

            <label>
              F
              <input type="radio" name="sexo" id="sexo" value="F" onChange={handleFormChange} checked={formValues.sexo === 'F'} />
            </label>
          </Sexo>
        </Personal>

        <Button className="button" type="submit">Enviar</Button>

        {validationMessage.type === 'error' ? (
          <Message className="message" style={{ color: validationMessage.type === 'error' ? 'red' : 'green' }}>{validationMessage.message}</Message>
        ) : <Message className="message" style={{ color: 'green' }}>{validationMessage.message}</Message>}

      </Formulary>
    </Wrapper>
  );
};

export default Form;
