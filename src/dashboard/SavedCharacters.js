// import './Characters.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, setHasError } from '../reducers/dashboardSlice';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Pagination from '../components/Pagination';
import CharacterCard from '../components/CharacterCard';

let totalPages = 0;

function SavedCharacters() {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  let hasError = useSelector(state => state.dashboard.hasError);
  const [offset, setOffset] = useState(0);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    // axios({
    //   url: `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&apikey=${process.env.REACT_APP_PUBLIC_KEY}`,
    //   method: 'GET'
    // }).then((result) => {
    //   if (result.data.code === 200) {
    //     setCurrentCharacters(result.data.data.results);
    //     totalPages = result.data.data.total;
    //     dispatch(setIsLoading(false));
    //   } else {
    //     dispatch(dispatch(setHasError(true)));
    //   }
    // }).catch((e) => {
    //   console.log(e.message);
    //   dispatch(setIsLoading(false));
    //   dispatch(dispatch(setHasError(true)));
    // });
    dispatch(setIsLoading(false));
  }, [offset]);

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <Error />
  }

  return (
    <div className="Characters">
      <h1>Saved Characters</h1>
      <div className={'d-flex flex-wrap gap-5 justify-content-center'}>
        {currentCharacters.map((character, index) => {
          return (
            <CharacterCard name={character.name} image={`${character.thumbnail.path}.${character.thumbnail.extension}`} id={character.id} index={index} />
          )
        })}
      </div>
      <Pagination offset={offset} setOffset={setOffset} totalPages={totalPages} />
    </div>
  );
}

export default SavedCharacters;
