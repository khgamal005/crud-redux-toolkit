import { useCallback, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,

} from "react-bootstrap";
import { deleteUser, fetchPosts } from "./Store/PostSlice";
import PostBody from './components/PostBody';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loading from "./components/Loading";



function App() {
  const dispatch =useDispatch()
  const { records, isloading, error } = useSelector((state) => state.posts);

  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])
  
  const deleteRecord = useCallback(
    (id) => dispatch(deleteUser(id)),
    
    
    [dispatch]
  );

    


  return (
   <Loading isloading={isloading} error={error} >
     <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ width: "70%" }}>Title</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
            <PostBody data={records} deleteRecord={deleteRecord} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
   </Loading>
  );
}

export default App;
