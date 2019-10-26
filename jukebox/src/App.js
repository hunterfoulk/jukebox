import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';


class App extends Component {

  state = {
    todos: []
  }

  render() {
    
   
      return (
      <div style={{height:'100%'}}> 

        <Navbar />
        

        <main style={{marginTop:'64px'}}>
          <p>HELLO</p>

        
        </main>
      </div>
    )
  }

  }
  

export default App;