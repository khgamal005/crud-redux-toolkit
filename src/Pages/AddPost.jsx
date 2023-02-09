import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { insertPost } from '../Store/PostSlice';
import { useNavigate } from 'react-router-dom';
import withGurd from './../util/withGurd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Loading from './../components/Loading';


const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});



const AddPost = () => {
  const navigate =useNavigate()
  const { loading, error } = useSelector((state) => state.posts);

  const dispatch =useDispatch()

    const formik = useFormik({
      initialValues: {
        title: '',
        description: '',
      },

      validationSchema :SignupSchema,

      onSubmit: values => {
        dispatch(insertPost(values)).unwrap().then(()=>{

          navigate('/')
    
        })
      },
    });

  return (
    <Form  onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" name='title' onChange={formik.handleChange}
         value={formik.values.title}
         isInvalid={!!formik.errors.title}
         />
         <Form.Control.Feedback type="invalid">
                {formik.errors.title}
              </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control type="text" name='description'onChange={formik.handleChange}
         value={formik.values.description}
         isInvalid={!!formik.errors.description}
         />
             <Form.Control.Feedback type="invalid">
                {formik.errors.description}
              </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>

    </Form> 
  )
}

export default withGurd(AddPost) 