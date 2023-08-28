import React, { useState } from 'react';

const initialForm = {
  name: "",
  constellation: "",
};

function CrudForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones al enviar el formulario
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="constellation">Constellation:</label>
        <input
          type="text"
          id="constellation"
          name="constellation"
          value={form.constellation}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default CrudForm;
