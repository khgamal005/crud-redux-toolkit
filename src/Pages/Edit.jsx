import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { cleanRecord, editPost } from '../Store/PostSlice';
import usePostDetails from './../hooks/use-post-details';
import { useNavigate } from 'react-router-dom';
import Loading from './../components/Loading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';



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



const Edit = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      return () => {
        dispatch(cleanRecord());
      };
    }, [dispatch]);
  


    
    const { isloading, error, record } = usePostDetails();
    const formik = useFormik({
      initialValues: {
        title: record? record?.title:'',
        description: record?.description
      },
      enableReinitialize: true,

  
      validationSchema :SignupSchema,
  
     
      onSubmit: values => {
        dispatch(editPost({ id:record.id, title:values.title, description: values.description })).unwrap().then(()=>{
       
          navigate('/')
    
        })
      },
    });



  return (
    <Form onSubmit={formik.handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        name='title'
        onChange={formik.handleChange}
       value={formik.values.title}
       isInvalid={!!formik.errors.title}
      />
      <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name='description'
        onChange={formik.handleChange}
        value={formik.values.description}
        isInvalid={!!formik.errors.description}
      />
       <Form.Control.Feedback type="invalid">
              {formik.errors.description}
            </Form.Control.Feedback>
    </Form.Group>
    <Loading loading={isloading} error={error}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Loading>
  </Form>

  )
}

export default Edit





