import axios from 'axios';
import { Formik } from 'formik';
import { FunctionComponent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
interface CreateProps {}

interface Todo {
  title: string;
  description: string;
}


const Create: FunctionComponent<CreateProps> = () => {

const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios.post(`${import.meta.env.VITE_API_URL}/todo`, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-50 m-auto mt-4">
        <h1>Create Todo</h1>

        <Formik
          initialValues={{ title: '', description: '' }}
          onSubmit={(values) => {
            console.log(values);

            console.log(values);
            createTodo.mutate(values);

            navigate('/view');
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,

            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={values.description}
                  onChange={handleChange}
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Create;
