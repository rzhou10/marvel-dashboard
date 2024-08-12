import './App.css';
import './css/DashboardComponent.css';
import Sidebar from './SideBar';
import SelectCharacterDashboard from './dashboard/SelectCharacterDashboard';
import { useSelector } from 'react-redux';
import CharacterPage from './individualPages/CharacterPage';
import SavedCharactersDashboard from './dashboard/SavedCharactersDashboard';


const renderDashboard = (view) => {
  switch (view) {
    case 'characters':
      return <SelectCharacterDashboard />
    case 'saved':
      return <SavedCharactersDashboard />
      case 'characterPage':
        return <CharacterPage />
    default:
      return <SelectCharacterDashboard />
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
