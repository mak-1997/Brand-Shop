import {Link} from 'react-router-dom';
export const HomePage = () =>{

    return(<div>
        <h1>Home Page</h1>
        <Link to="/login" > Login </Link>
        <Link to="/admin" >Admin</Link>
    </div>)
}