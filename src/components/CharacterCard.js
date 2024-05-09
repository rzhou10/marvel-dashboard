
import { Button, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentId } from '../reducers/dashboardSlice';

function CharacterCard({ name, image, id, index }) {
  const view = useSelector(state => state.dashboard.view);
  const dispatch = useDispatch()

  return (
    <Col md={2} sm={4} key={index} className='info-card'>
      <div><img style={{maxWidth: '100px'}} src={image} alt={name} /></div>
      <div className={'fw-bold'}>{name}</div>
      <Button className={'mt-3'} onClick={(e) => {
        e.preventDefault();
        if (view === 'saved') {
          dispatch(setCurrentId(id));
        } else {}
      }}>
        {view === 'saved' ? 'See Details' : 'Add'}
      </Button>
    </Col>
  )
}

export default CharacterCard;