import './App.css'
import Layout from './components/layout/Layout.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import Main from './components/main/Main.jsx';
import Events from './components/events/Events.jsx';
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
          <Layout>
            <Navbar />
            <Profile />
            <Main />
            <Events />
            <Tickets />
            <Calendar />
          </Layout>
        </ThemeDataProvider>
      </UserTicketProvider>
    </EventProvider>
  );
}

export default App
