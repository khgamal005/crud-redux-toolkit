import Loading from '../components/Loading';
import usePostDetails from './../hooks/use-post-details';



const Details = () => {
  const { isloading, error, record } =  usePostDetails();


 
return (
  <Loading isloading={isloading} error={error}>
    <p>Title: {record?.title}</p>
        <p>Description: {record?.description}</p>
  </Loading>
);
};


export default Details