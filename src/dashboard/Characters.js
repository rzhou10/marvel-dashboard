// import './Characters.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, setHasError } from '../reducers/dashboardSlice';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Pagination from '../components/Pagination';
import CharacterCard from '../components/CharacterCard';
import { Button } from 'react-bootstrap';

let totalPages = 0;

function Characters() {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  let hasError = useSelector(state => state.dashboard.hasError);
  const [offset, setOffset] = useState(0);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    axios({
      url: `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&apikey=${process.env.REACT_APP_PUBLIC_KEY}`,
      method: 'GET'
    }).then((result) => {
      if (result.data.code === 200) {
        setCurrentCharacters(result.data.data.results);
        totalPages = result.data.data.total;
        // add timeout to allow state to propogate properly
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      } else {
        dispatch(dispatch(setHasError(true)));
      }
    }).catch((e) => {
      console.log(e.message);
      dispatch(setIsLoading(false));
      dispatch(dispatch(setHasError(true)));
    });
  }, [offset]);

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <Error />
  }

  return (
    <div className="Characters">
      <h1>Characters</h1>
      <div className={'d-flex flex-wrap gap-5 justify-content-center'}>
        {currentCharacters.map((character, index) => {
          return (
            <CharacterCard name={character.name} image={`${character.thumbnail.path}.${character.thumbnail.extension}`} id={character.id} key={index} />
          )
        })}
      </div>
      <Pagination offset={offset} setOffset={setOffset} totalPages={totalPages} />
      <div className={'position-absolute'}>
        <Button>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Characters;
