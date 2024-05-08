import './App.css';
import Sidebar from './SideBar';
import Characters from './dashboard/Characters';
import { useSelector } from 'react-redux';

const renderDashboard = (view) => {
  switch(view) {
    case 'characters':
      return <Characters />
    default:
      return <Characters />
  }
}

function App() {
  let view = useSelector(state => state.dashboard.view);

  return (
    <div className="App">
      <Sidebar />
      {renderDashboard(view)}
    </div>
  );
}

export default App;
