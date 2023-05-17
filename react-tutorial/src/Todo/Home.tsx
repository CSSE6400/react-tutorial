import { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1>Home</h1>
      <div>
        <Link to="/create">
          <Button>Create</Button>
        </Link>
      </div>
      <div className='mt-3'>
        <Link to="/view">
          <Button>View</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
