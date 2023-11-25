import './App.css';
import Button from './components/Button/Button';
import { Large as LargeInput } from './components/Input/Input.stories';

function App() {
  return (
    <>
      <Button variant='primary'>Submit</Button>
      <LargeInput />
    </>
  );
}

export default App;
