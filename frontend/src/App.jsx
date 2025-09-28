import './App.css'
import Layout from './components/layout/Layout.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import Main from './components/main/Main.jsx';
import Events from './components/events/Events.jsx';
import Tickets from './components/tickets/Tickets.jsx';

function App() {

  return(
    <Layout>
      <Navbar />
      <Profile />
      <Main />
      <Events />
      <Tickets />
    </Layout>
  );
}

export default App
