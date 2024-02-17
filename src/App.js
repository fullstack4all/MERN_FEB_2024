import Header from './modules/header.js'
import './App.css'
import './components.css'

import MainSection from './Pages/section1/mianSection.js'

import Counter from './count.js'

function App() {

  // const group = [{
  //   name:'ankit',
  //   age:'23'
  // }]


  return (
    <div className="App">
      <Header/>
  
      <MainSection/>
    <Counter/>
    </div>
  );
}

export default App;
