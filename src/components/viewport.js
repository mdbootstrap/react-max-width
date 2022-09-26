import React from 'react';

export default function Viewport() {
  return (
    <>
      <div className="min-vw-100">Min-width 100vw</div>
      <div className="min-vh-100">Min-height 100vh</div>
      <div className="vw-100">Width 100vw</div>
      <div className="vh-100">Height 100vh</div>
    </>
  );
}