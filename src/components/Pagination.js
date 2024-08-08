import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/******************************************************
  Controls pagination for the character select screen
*******************************************************/
const Pagination = ({ offset, setOffset, totalPages }) => {
  let isLoading = useSelector(state => state.dashboard.isLoading);
  return (
    <div className={'d-flex justify-content-center my-4'}>
      <Button disabled={isLoading || offset < 20} onClick={() => setOffset(offset - 20)}>
        Previous
      </Button>
      <div className={'d-flex mx-4 justify-content-center'}>
        {/* Go to specific page */}
        <span style={{ whiteSpace: 'nowrap', lineHeight: '2.5' }}>Go to:&nbsp;&nbsp;</span>
        <Form.Control className={'w-25'} id='page-input' disabled={isLoading} type='number' defaultValue={offset / 20} />
        &nbsp;
        <Button onClick={(e) => {
          e.preventDefault();
          const page = document.getElementById('page-input').value;
          setOffset(Number(page) * 20);
        }}>
          Go
        </Button>
      </div>
      <Button disabled={isLoading || offset > totalPages} onClick={() => setOffset(offset + 20)}>
        Next
      </Button>
    </div>
  )
}

export default Pagination;