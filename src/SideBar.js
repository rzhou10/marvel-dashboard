// import './Sidebar.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, switchView } from './reducers/dashboardSlice';

function Sidebar() {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  let view = useSelector(state => state.dashboard.view);
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div>
        <button disabled={isLoading} className={`sidebar-button ${view === 'characters' ? 'highlight' : ''}`} onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(switchView('characters'));
        }}>
          Characters
        </button>
        <button disabled={isLoading} className={`sidebar-button ${view === 'saved' ? 'highlight' : ''}`} onClick={() => {
          // temporarily disable this button
          dispatch(setIsLoading(true));
          dispatch(switchView('saved'));
        }}>
          Saved Characters
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
