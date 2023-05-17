import axios from 'axios';
import { FunctionComponent } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';

interface ViewProps {}

const View: FunctionComponent<ViewProps> = () => {
  console.log(`${import.meta.env.VITE_API_URL}/todo`);
  const getTodos = useQuery('todos', () =>
    axios.get(`${import.meta.env.VITE_API_URL}/todo`),
  );

  return (
    <div>
      <div className="w-50 m-auto">
        <h1>View Todos</h1>
        {getTodos.isLoading ? <Spinner></Spinner> : <> </>}

        {getTodos.data?.data.map((todo: any) => (
          <Card key={todo.id} className="mt-3">
            <Card.Title className="m-2">{todo.title}</Card.Title>
            <Card.Text className="m-3">{todo.description}</Card.Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default View;
