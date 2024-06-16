import { useState } from "react";
import { UserContext } from "./userContext";
//@ts-expect-error child

const UserContextProvider:React.FunctionComponent = ({child}) => {
    const [data, setData] = useState();
    
    return (
        //@ts-expect-error value
        <UserContext.Provider value={{data, setData}}>
            {child}
        </UserContext.Provider>
    );

}
export{ UserContextProvider };