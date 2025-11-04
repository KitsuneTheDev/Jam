import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import Main from './components/main/Main.jsx';
import Events from './components/events/Events.jsx';
import MyEvents from './components/myEvents/MyEvents.jsx';
import Tickets from './components/tickets/Tickets.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import ThemeDataProvider from './contexts/ThemeDataContext.jsx';
import EventProvider from './contexts/Events.context.jsx';
import UserTicketProvider from './contexts/UserTickets.context.jsx';


function App() {

  return(
    <EventProvider>
      <UserTicketProvider>
        <ThemeDataProvider>
          <BrowserRouter>
              <Layout>
                <Navbar />
                <Profile />
                <Routes>
                  <Route index element={ <Main />} />
                  <Route path='/myevents' element={ <MyEvents /> } />
                </Routes>
                <Events />
                <Tickets />
                <Calendar />
              </Layout>
          </BrowserRouter>
        </ThemeDataProvider>
      </UserTicketProvider>
    </EventProvider>
  );
}

export default App
