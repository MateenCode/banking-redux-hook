import React from 'react';
import Auth from "./components/Auth";
import Balance from './components/Balance';
import Banking from './components/Banking'
import AccountStatus from './components/AccountStatus'

const App = () => {
    return (
        <div>
           <Auth />
           <Balance/>
           <Banking />
           <AccountStatus />
        </div>
    )
}

export default App

