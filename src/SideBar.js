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
        <button disabled={isLoading} className={`sidebar-button ${view === 'comics' ? 'highlight' : ''}`} onClick={() => {
          // temporarily disable this button
          dispatch(setIsLoading(true));
          dispatch(switchView('comics'));
        }}>
          Comics
        </button>
        <button disabled={isLoading} className={`sidebar-button ${view === 'creators' ? 'highlight' : ''}`} onClick={() => {
          // temporarily disable this button
          dispatch(setIsLoading(true));
          dispatch(switchView('creators'));
        }}>
          Creators
        </button>
        <button disabled={isLoading} className={`sidebar-button ${view === 'events' ? 'highlight' : ''}`} onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(switchView('events'));
        }}>
          Events
        </button>
        <button disabled={isLoading} className={`sidebar-button ${view === 'series' ? 'highlight' : ''}`} onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(switchView('series'));
        }}>
          Series
        </button>
        <button disabled={isLoading} className={`sidebar-button ${view === 'stories' ? 'highlight' : ''}`} onClick={() => {
          dispatch(setIsLoading(true));
          dispatch(switchView('stories'));
        }}>
          Stories
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
