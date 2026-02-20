import { useState, useEffect } from 'react';


function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

      useEffect(() => {
      document.title = "Contato | Locadora Tacolar";
    }, []);

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  function validate() {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = 'O nome é obrigatório.';
  }

  if (!formData.email.trim()) {
    newErrors.email = 'O e-mail é obrigatório.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'E-mail inválido.';
  }

  if (!formData.message.trim()) {
    newErrors.message = 'A mensagem é obrigatória.';
  } else if (formData.message.length < 10) {
    newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
  }

  return newErrors;
}

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);


    setTimeout(() => {
      console.log('Dados enviados:', formData);

      setSubmitted(true);
      setIsLoading(false);
    
      //limpar formulário
      setFormData({
      name: '',
      email: '',
      message: ''
    });

      setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    }, 1500);
 
  }
  return (
    <main>
      <h1>Entre em Contato</h1>
      {
        submitted && (
          <p className="success-message">
            Mensagem enviada com sucesso!
          </p>
        )
      }
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
         {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
         {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
       

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea 
          id="message" 
          name="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      
      </form>
    </main>
  );
}

export default Contact;
