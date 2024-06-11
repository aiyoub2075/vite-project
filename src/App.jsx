import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`E-Mail-Adresse ${email} wurde erfolgreich angemeldet!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mit E-Mail Adressse melden</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder='email-11.06.2024@aiyoub.reichert'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Anmelden</button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
