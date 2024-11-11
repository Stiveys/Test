import './App.css';
import Users from './components/Users/Users';



function App() {
  return (
    <>
     <Users name="mike" age={2} isAdmin={true} />
    </>
  );
}

export default App;