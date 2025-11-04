import React, { useCallback, useEffect, useState } from 'react';

function Password() {
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let strr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (num) {
      strr += '0123456789';
    }
    if (char) {
      strr += '!@#$%^&*()_+';
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * strr.length);
      pass += strr.charAt(randomIndex);
    }

    setPassword(pass);
  }, [num, char, length]);

  useEffect(() => {
    passwordGenerator();
  }, [num, char, length, passwordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input
        type="text"
        value={password}
        placeholder="password"
        readOnly
        style={{ width: '250px', marginRight: '10px' }}
      />
      <button onClick={copyToClipboard}>Copy</button>

      <div>
        <input
          type="checkbox"
          id="num"
          checked={num}
          onChange={() => setNum(prev => !prev)}
          style={{ cursor: 'pointer' }}
        />
        <label htmlFor="num" style={{ cursor: 'pointer' }}>
          Numbers
        </label>
      </div>

      <div>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={e => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="char"
          checked={char}
          onChange={() => setChar(prev => !prev)}
          style={{ cursor: 'pointer' }}
        />
        <label htmlFor="char" style={{ cursor: 'pointer' }}>
          Special Characters
        </label>
      </div>
    </div>
  );
}

export default Password;
