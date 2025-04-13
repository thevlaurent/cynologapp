import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    if (username === 'formateur' && password === '1234') router.push('/dashboard/formateur');
    else if (username === 'agent' && password === '1234') router.push('/dashboard/agent');
    else if (username === 'employeur' && password === '1234') router.push('/dashboard/employeur');
    else alert('Identifiants incorrects');
  }

  return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'Arial' }}>
      <img src="/logo.png" alt="logo" width="100" />
      <h1>Connexion à CynoLogApp</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}