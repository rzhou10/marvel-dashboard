
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, switchView, setHasError } from '../reducers/dashboardSlice';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';

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
      <div>
        <h1>{character.name}</h1>
        <div>{character.description ?? "Marvel character"}</div>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}></img>
      </div>
      <Button onClick={(e) => {
        e.preventDefault();
        dispatch(switchView('saved'));
      }}>Save Character</Button>
    </div>
  )
}

export default CharacterPage;