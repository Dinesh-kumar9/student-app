import './App.css';
import Navbar from './Navbar';
import StudentForm from './StudentForm';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Student App</h1>
        <p>Developed by Pathipati Dinesh Kumar (23091A3227)</p>
      </div>
      <div id="register">
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
