import React from 'react';

export default function App() {
  return (
    <>
      <div className="w-25 p-3" style={{ backgroundColor: "#eee" }}>Width 25%</div>
      <div className="w-50 p-3" style={{ backgroundColor: "#eee" }}>Width 50%</div>
      <div className="w-75 p-3" style={{ backgroundColor: "#eee" }}>Width 75%</div>
      <div className="w-100 p-3" style={{ backgroundColor: "#eee" }}>Width 100%</div>
      <div className="w-auto p-3" style={{ backgroundColor: "#eee" }}>Width auto</div>
    </>
  );
}