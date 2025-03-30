import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right,rgb(180, 219, 254),rgb(98, 155, 235))' }}>
      <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.7)', width: '400px' }}>
        <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '600', marginBottom: '10px', textAlign: 'center' }}>Sign Up</h2>
        <p style={{ color: '#60a5fa', textAlign: 'center', marginBottom: '20px' }}>Create a new account</p>

        <div style={{ marginBottom: '15px' }}>
          <input type="text" placeholder="Name" style={{ width: '96%', padding: '10px', borderRadius: '8px', backgroundColor: '#2e2e3a', color: 'white', border: 'none', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '96%', padding: '10px', borderRadius: '8px', backgroundColor: '#2e2e3a', color: 'white', border: 'none', outline: 'none' }} />
        </div>

        <button style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'linear-gradient(to right, #60a5fa, rgb(110, 92, 246))', color: 'white', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>

        <p style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '15px' }}>
          Already have an account? <Link to="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
