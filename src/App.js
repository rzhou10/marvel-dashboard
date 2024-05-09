import './App.css';
import './css/DashboardComponent.css';
import Sidebar from './SideBar';
import Characters from './dashboard/Characters';
import { useSelector } from 'react-redux';
import CharacterPage from './individualPages/CharacterPage';
import SavedCharacters from './dashboard/SavedCharacters';


const renderDashboard = (view) => {
  switch (view) {
    case 'characters':
      return <Characters />
    case 'saved':
      return <SavedCharacters />
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
