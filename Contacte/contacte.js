const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  React.useEffect(() => {
    // Carrega os dados do armazenamento local ao montar o componente
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Exibe mensagem de sucesso
    alert('Formulário enviado com sucesso!');
    // Limpa os dados do formulário
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    // Salva os dados do formulário no armazenamento local
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div class="oupa">
      <h1>Contacte-nos!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apelido:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mensagem:
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button id="a" type="submit">Enviar</button>
      </form>
    </div>
  );
};

ReactDOM.render(<ContactForm />, document.getElementById('root'));
  