import logo from './logo.svg';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginalsUrl,actionUrl} from './Components/Urls/urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title = "Netflix Originals" url = {orginalsUrl}/>
        <RowPost title = "Other Shows" isSmall url = {actionUrl}/>
    </div>
  );
}

export default App;
