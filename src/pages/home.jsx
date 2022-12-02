
import {Link} from 'react-router-dom';

const Home = () => {
    return (
    <div className="home">
    <h1>Hello there!</h1>

    <Link className='btn btn-primary' to="/catalog">Check out our catalog to see all of our products! &gt; </Link>

    </div>
    );

};

export default Home;