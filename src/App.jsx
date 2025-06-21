import { Routes, Route } from 'react-router-dom'
import Layout from './components/ui/Layout'
import NewTask from './components/ui/NewTask'
import SalesValues from './components/ui/SalesValues'
import Chart from './components/ui/Chart'
import Card from './components/ui/Cards'
import PageVisits from './components/ui/PageVisits'
import TotalOrders from './components/ui/TotalOrders'
import TeamMembers from './components/ui/TeamMembers'
import ProgressTrack from './components/ui/ProgressTrack'
import Acquisition from './components/ui/Acquisition'
import Account from './components/ui/Account'
import Job from './components/ui/Jobs'
import SubmittedApplications from './components/ui/SubmittedApplications';
import Overview from './components/ui/Overview'
import Messages from './components/ui/Messages'
import Transactions from './components/ui/Transaction'
import Analytics from './components/ui/Analytics'
import Settings from './components/ui/Settings'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <>
            <div className="py-2"><NewTask /></div>
            <SalesValues />
            <div className="px-4 pb-4"><Chart /></div>
            <div className="px-2 pb-4"><Card /></div>
            <div className="px-4 pb-4 flex justify-center">
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="w-full lg:w-[67%]"><PageVisits /></div>
                <div className="w-full lg:w-[33%]"><TotalOrders /></div>
              </div>
            </div>
            <div className="px-4 pb-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <TeamMembers />
              <ProgressTrack />
              <Acquisition />
            </div>
          </>
        } />
        <Route path="account" element={<Account />} />
        <Route path="jobs" element={<Job />} />
        <Route path="submitted" element={<SubmittedApplications />} />
        <Route path="overview" element={<Overview/>}/>
        <Route path="messages" element={<Messages/>}/>
        <Route path="transaction" element={<Transactions/>}/>
        <Route path="analytics" element={<Analytics/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
    </Routes>
  )
}

export default App;
