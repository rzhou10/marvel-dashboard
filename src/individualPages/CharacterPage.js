
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, switchView, setHasError } from '../reducers/dashboardSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';

const teams = ["Alpha Flight", "Avengers", "Big Hero 6", "Brotherhood of Mutants", "Dark Avengers", "Daughters of the Dragon", "Defenders", "Fantastic Four", "Great Lakes Avengers", "Guardians of the Galaxy", "Hellfire Club", "Howling Commandos", "Hydra", "Illuminati", "Marauders", "Power Pack", "Ravagers", "S.H.I.E.L.D.", "Sinister Six", "Thunderbolts", "West Coast Avengers", "X-Force", "X-Men", "Young Avengers"];

/************************************************
  Detailed view of the character you selected
*************************************************/
const CharacterPage = () => {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  let hasError = useSelector(state => state.dashboard.hasError);
  const characterId = useSelector(state => state.dashboard.currentId);
  const pageView = useSelector(state => state.dashboard.view);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    dispatch(setIsLoading(true));
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/single-character`,
      method: 'GET',
      data: { characterId: characterId }
    }).then(res => {
      if (res.status === 200) {
        setCharacter(res.data);
      } else {
        // do something with error
        console.log('error: ', e)
        dispatch(setHasError(true));
      }
    }).catch((e) => {
      console.log('Issue with fetching character: ', e)
    })
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
            <Form.Text className='fw-bolder'>Team(s): </Form.Text>
            <Form.Control as="select" multiple defaultValue={character.teams} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
              {teams.map((t, index) => {
                return <option key={index} value={index}>{t}</option>
              })}
            </Form.Control>
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
        dispatch(switchView('saved'));
        axios({
          url: `${process.env.REACT_APP_BACKEND_URL}/single-character`,
          method: 'GET',
          data: character
        }).then(res => {
          if (res.status === 200) {
            setCharacter(res.data);
          } else {
            // do something with error
            console.log('error: ', e)
          }
        }).catch((e) => {
          console.log('Issue with fetching character: ', e)
        })
      }}>Update Character</Button>
    </div>
  )
}

export default CharacterPage;