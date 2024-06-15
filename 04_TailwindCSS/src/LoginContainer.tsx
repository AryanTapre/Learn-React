import './LoginContainer.css';

function LoginContainer() {
    return (
        <>
            <div id="main-login" className='rounded-md shadow-md px-4 py-4 w-72 '>
                <div className="email mb-4 text-white"  >
                    <input type="email" name="email" id="email" placeholder='email here'
                     className='rounded-md text-center font-medium size-9 w-full shadow-md bg-slate-700'autoComplete="true"
                    />       
                </div>
                <div className="password  mb-4  text-white " >
                    <input type="password" name="password" id="password" placeholder='password here'
                     className=' rounded-md text-center font-medium size-9 w-full shadow-md bg-slate-700'
                    />       
                </div>
                <div className="login-button bg-blue-600 mb-4 rounded-md mx-6 text-center text-white shadow-md   ">
                    <button className='rounded-md text-center font-medium size-9  shadow-md'>login</button>
                </div>
            </div>
        </>

    );
}
export default LoginContainer;