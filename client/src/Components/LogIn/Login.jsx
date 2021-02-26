import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    });
  }
  const { email, password } = inputs;
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      return history.push('/game');
    }
    return setError('Повторите попытку входа');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Email:</h4>
      <input id="email" name="email" type="email" onChange={handleChange} value={email} require />
      <h4>Password:</h4>
      <input id="password" name="password" type="password" onChange={handleChange} value={password} require />
      <button type="submit">Войти</button>
      <div className="error">{error}</div>
    </form>
  );
}

export default Login;
