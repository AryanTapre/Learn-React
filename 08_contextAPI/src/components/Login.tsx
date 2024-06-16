import { useContext, useState } from "react";
import { UserContext } from "../context/userContext"

const Login: React.FunctionComponent = () => {
    //@ts-expect-error setdata
    const {setData} = useContext(UserContext);
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();

    //@ts-expect-error event 
    const handleSubmit = (e) => {
        e.preventDefault;
        setData({username, password});
    }

    return (
        <>
        <input type="text" name="" id="" placeholder="username" onChange={(e) => {setUserName(e.target.value as string)}} /> &nbsp; &nbsp;
        <input type="password" name="" id="" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} /> <br/> <br/>
        <button onClick={handleSubmit}>submit</button> <br></br> <br></br>
        </>
    );
}

export {Login}