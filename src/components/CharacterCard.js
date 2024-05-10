
import { Button, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentId, switchView, setSelectedCharacters } from '../reducers/dashboardSlice';
import { useState } from 'react';

function CharacterCard({ name, image, id }) {
  const view = useSelector(state => state.dashboard.view);
  const selectedCharacters = useSelector(state => state.dashboard.selectedCharacters);
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(selectedCharacters.filter(x => x.id === id).length > 0);

  return (
    <Col md={2} sm={4} className='info-card'>
      <div><img style={{ maxWidth: '100px' }} src={image} alt={name} /></div>
      <div className={'fw-bold'}>{name}</div>
      <Button className={'mt-3'} style={{ width: '140px' }} onClick={(e) => {
        e.preventDefault();
        if (view === 'saved') {
          dispatch(setCurrentId(id));
          dispatch(switchView('characterPage'));
        } else if (view === 'characters') {
          if (isSelected) {
            dispatch(setSelectedCharacters({ id: id, add: false }));
            setIsSelected(false);
          } else {
            dispatch(setSelectedCharacters({ character: { name, image, id }, add: true }));
            setIsSelected(true);
          }
        }
      }}>
        {view === 'saved' ? 'See Details' : isSelected ? 'Remove' : 'Add'}
      </Button>
    </Col>
  )
}

export default CharacterCard;