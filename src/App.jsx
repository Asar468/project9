import React from 'react';
import AddMarks from './Addmarks';
import MarksList from './MarksList';  

export default function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to KL University Marks Portal</h1>
      <center><h2>Md Asar (32723)</h2></center>
      <AddMarks />
      <MarksList />
    </div>
  );
}
