
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from './../Store/PostSlice';

const usePostDetails = () => {  
  const { id } = useParams();
  const dispatch = useDispatch();
  const {record,isloading,error}= useSelector(state=>state.posts)

  useEffect(() => {
    dispatch(fetchPost(id));
    
  }, [dispatch, id]);

  return { isloading, error, record };
};

export default usePostDetails;