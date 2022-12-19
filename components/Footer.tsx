import React from 'react';

export default function Footer() {
  let footerStyle = {
    position: 'relative',
    top: '100vh',
    width: '100%',
  };
  return (
    <footer className="bg-dark text-light py3" style={footerStyle}>
      <p className="text-center">Copyright 2022</p>
    </footer>
  );
}
