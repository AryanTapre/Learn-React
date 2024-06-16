import {Header, Footer} from '../index';
import {Outlet} from 'react-router-dom';

export default function Root() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    );
}
