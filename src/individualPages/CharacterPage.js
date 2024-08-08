
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, switchView, setHasError } from '../reducers/dashboardSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';

/************************************************
  Detailed view of the character you selected
*************************************************/
const CharacterPage = () => {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  let hasError = useSelector(state => state.dashboard.hasError);
  let currentId = useSelector(state => state.dashboard.currentId);
  const pageView = useSelector(state => state.dashboard.view);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    dispatch(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <Error />
  }

  return (
    <div className={'d-flex justify-content-center my-4'}>
      <Row>
        <Col sm={12} md={3}>
          {/* Make these inputs */}
          <img alt={character.name} src={`${character.image}`}></img>
          <div>
            <Form.Text className='fw-bolder'>Name: </Form.Text>
            <Form.Control type='text' defaultValue={character.name} />
          </div>
          <div>
            <Form.Text className='fw-bolder'>Description: </Form.Text>
            <Form.Control type='text' defaultValue={character.description} />
          </div>
          <div>
            <Form.Text className='fw-bolder'>Year of Debut: </Form.Text>
            <Form.Control type='number' defaultValue={character.year} />
          </div>
          <div>
            <Form.Text className='fw-bolder'>Team(s): </Form.Text>
            <Form.Control type='text' defaultValue={character.teams} />
          </div>
          <div>
            <Form.Text className='fw-bolder'>Powers/Abilities: </Form.Text>
            <Form.Control type='text' defaultValue={character.powers} />
          </div>
        </Col>
        <Col sm={12} md={9}>
          <div>
            <h2>Series</h2>
          </div>
          <div>
            <h2>Stories</h2>
          </div>
          <div>
            <h2>Events</h2>
          </div>
        </Col>
      </Row>
      <Button onClick={(e) => {
        e.preventDefault();
        // dispatch(switchView('saved'));
      }}>Save Character</Button>
    </div>
  )
}

export default CharacterPage;