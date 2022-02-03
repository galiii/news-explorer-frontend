import { Link } from 'react-router-dom';
import './NotFound.css';
import Bye from '../../images/not-found.svg';

function PageNotFound () {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span>Page Not Found!
      </h3>
      <img className="not-found__image" src={Bye} alt=""/>
      <p className="not-found__text">
       We don't want to ruffle your feathers, but this page doesn't exist!
      </p>
      <Link className="button button_type_to-main" to="/">Try Main Page</Link>
    </div>
  )
}

export default PageNotFound;