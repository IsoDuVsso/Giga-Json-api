import React from 'react';
//import Table from '../Table/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/G1qNLlaY_400x400.jpg'
import Map from '../Map/Map.js'


//const API_HOST = "http://localhost:3000";
const API_URL = 'http://localhost:3000/projectConnect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount() {

    // GET request function to the API
    const fetchApi = () => {
      fetch(API_URL)
          .then(res => res.json())
          .then(json => this.setState({data : json}).catch((error) => console.error(error)));
    }
    fetchApi();

    
    
    
  }
  
  render() {
    return (
          <div className="App">
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="./">
              <img src={logo} alt="logo" width="40" /> Project Connect
            </a>
          </nav>
          <table className="table">
          <thead>
            <tr>
              <th>School Name</th>
              <th>Country</th>       
              <th>Connectivity Status</th>
              <th>lattitude</th>
              <th>longitude</th>
            </tr>
          </thead>
          <tbody>
          {
              this.state.data.map((item) => (
                  <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.country}</td>
                      <td>{item.connected}</td>
                      <th>{item.lat}</th>
                      <th>{item.lng}</th>
                      <td><a href={<Map coordonates={item.coord} />}>In maps</a></td>
                      <td/>
                  </tr>
              ))
          }          
          </tbody>
        </table>
          </div>
      );
    }
}

/*function App() {
   
  const [data, setData] = useState([]);

  // GET request function to your API
  const fetchApi = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(json => setData(json));
  }

  useEffect(() => {
    fetchApi();
}, []);


    return (
        <div className="App">
          <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="logo" width="40" /> Project Connect
          </a>
        </nav>
        <table className="table">
        <thead>
          <tr>
            <th>School Name</th>
            <th>Country</th>       
            <th>Connectivity Status</th>
            <th>Coordionates</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.connected}</td>
                    <td>{item.coord}</td>
                    <td/>
                </tr>
            ))
        }          
        </tbody>
      </table>
        </div>
    );
};*/

export default App;
