import { useSelector } from "react-redux";


const withGurd=(Componant)=>{

const Wrapper = (props)=>{

    const { isLoggedIn } = useSelector((state) => state.auth);

   return  isLoggedIn ? (<Componant {...props}/>) :  <div>Please login in first!</div>
}

return Wrapper
}
export default withGurd;




