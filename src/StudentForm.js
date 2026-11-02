import { useState } from 'react';
import './StudentForm.css';

function StudentForm() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [branch, setBranch] = useState('CSE (Data Science)');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Name and Roll No must not be empty
    if (name.trim() === '' || rollNo.trim() === '') {
      setError('Name and Roll No are required');
      setMessage('');
      return;
    }

    setError('');
    setMessage(`Student ${name} (${rollNo}) registered in ${branch}`);
    setName('');
    setRollNo('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />

      <label>Roll No</label>
      <input
        type="text"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        placeholder="Enter roll number"
      />

      <label>Branch</label>
      <select value={branch} onChange={(e) => setBranch(e.target.value)}>
        <option>CSE (Data Science)</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
      </select>

      <button type="submit">Register</button>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
    </form>
  );
}

export default StudentForm;
