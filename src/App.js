import logo from './logo.svg';
import './App.css';
import {React, Fragment} from 'react';
import Colaboradores from './components/colaboradores';
import Repositorios from './components/repositorios';


function App() {
  return ( 
  <Fragment>

            <div className="container m-3">
             
                <Repositorios />
            
                <Colaboradores />
            

            </div>
    </Fragment>    
  );
}

export default App;
