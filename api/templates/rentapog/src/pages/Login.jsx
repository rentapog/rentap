import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // Simulate login
    alert('Logged in!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-slate-100">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </div>
  );
}
