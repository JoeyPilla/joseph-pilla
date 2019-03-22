import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import About from './About';
import Footer from './Footer';
import background from './background.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './Projects';
import Cooking from './Cooking';
import Contact from './Contact';
import {animated, useTransition} from 'react-spring'

const colors = [
  '#00000000',
  '#FFCC54',
  '#0DD269',
  '#FF5F5F',
  '#913CFF',
]

export default function App() {
  const [ toggle, setToggle ] = useState(false);

  const transitions = useTransition(toggle, p => p, {
    from: { backgroundColor: 'black'},
    enter: { backgroundColor: 'white'},
    leave: { backgroundColor: 'blue'},
  })
  return (
    <div>
      {transitions.map(({ props }) => {
        return (
          <div style={props}>
            <button onClick={() => setToggle(!toggle)}>
              click me
            </button>
          </div>
        )
      })}
    </div>
  )

}

// class App extends Component {
//   render() {
//     return (
//       <Router basename={process.env.PUBLIC_URL}>
//         <AppContainer>
//           <Header />
//           <Switch>

//           <Route exact path='/about' component={About}/>
//           <Route exact path='/projects' component={Projects}/>
//           <Route exact path='/cooking' component={Cooking}/>
//           <Route exact path='/contact' component={Contact}/>
//           <Route component={Body}/>
//           </Switch>
//           <Footer />
//           <Background src={background} />
//           <Overlay/>
//         </AppContainer>
//       </Router>
//     );
//   }
// }

// const AppContainer = styled.div`
//   display: grid;
//   color: white;
//   grid-template: 75px 1fr 50px / auto;
//   height: 100vh;
//   width: 100vw;
// `

// const Background = styled.img`
//   grid-area: 1 / 1 / -1 / -1;
//   height: 100%;
//   width: 100%;
//   filter: contrast(1);
//   z-index: -2;
//   object-fit: cover;
// `
// const Overlay = styled.div`
//   grid-area: 1 / 1 / -1 / -1;
//   height: 100%;
//   width: 100%;
//   opacity: .7;
// background-color: black;
//   z-index: -1;
// `
// export default App;
