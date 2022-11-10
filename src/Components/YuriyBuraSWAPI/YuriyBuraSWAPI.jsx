import './library/bootstrap.min.css';
import './YuriyBuraSWAPI.scss';

import SwapiServices from './services/SwapiServices/SwapiServices';
import App from './components/app/App';

export default function YuriyBuraSWAPI() {


  return (
    <div>
      <App/>
      <SwapiServices />
    </div>
  )
}