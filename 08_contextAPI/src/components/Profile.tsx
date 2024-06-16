import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Profile:React.FunctionComponent = () => {
    //@ts-expect-error data
    const {data} = useContext(UserContext);
    
    if(!data) return <div>Please, Login</div>
    return <div>Welcome.{data.username}</div>
}
export {Profile};