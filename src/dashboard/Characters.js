// import './Characters.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../reducers/dashboardSlice';
import axios from 'axios';

let totalPages = 0;

function Characters() {
  let isLoading = useSelector(state => state.dashboard.isLoading);
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
        dispatch(setIsLoading(false));
      }
    }).catch((e) => {
      console.log(e.message);
      dispatch(setIsLoading(false));
    });
  }, [offset]);

  if (isLoading) {}

  return (
    <div className="Characters">
      {currentCharacters.map((character) => {
        return <div>
          <div><img src={character.thumbnail.path} alt={character.name}/></div>
          <div>Name: {character.name}</div>
          <button onClick={() => {
            window.href = `/v1/public/characters/${character.id}`;
          }}>See Details</button>
        </div>
      })}
      <div>
        <button disabled={isLoading || offset < 20} onClick={() => setOffset(offset - 20)}>
          Previous
        </button>
        <div>
          Go to: <input disabled={isLoading} type='number' defaultValue={offset / 20} />
          <button>
            Go
          </button>
        </div>
        <button disabled={isLoading || offset > totalPages} onClick={() => setOffset(offset + 20)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;
