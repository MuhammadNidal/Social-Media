
import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { MantineProvider } from '@mantine/core';
function App() {
  return (
    
    
    <MantineProvider>
    <div className="app">
     
     <div className="blur" style={{top:'-18%', right:'0'}}></div>
     <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
     {/* <Home/> */}
     <Profile/>
     {/* <Auth/> */}
     
  </div>
  </MantineProvider>
    
  );
}

export default App;
