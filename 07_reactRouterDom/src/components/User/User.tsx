import { useParams } from "react-router-dom";

const User : React.FunctionComponent = () => {
   const {data} = useParams();
    return(
        <>
        <div className='bg-slate-700 h-screen w-screen flex font-medium justify-center items-center text-white shadow-xl'>
            <div className="text-3xl">
                data: {data}
            </div> 
        </div>
        </>
    );
}
export default User;