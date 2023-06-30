import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Products from './components/Products';
import PaymentPage from './components/PaymentPage';
import Team from './components/Team';
import Reffer from './components/Reffer';
import Private from './components/Private';
import Protected from './components/Protected';
import Transactions from './components/Transactions';
import User from './components/User';
import AdHome from './admin/AdHome';
import DepositTransactionDetail from './components/DepositTransactionDetail';
import WithdrawTransactionDetail from './components/WithdraTransactionDetail';

function App() {

  return (

    <ChakraProvider theme={theme}>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Private />}>
            <Route path='/' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Route>
          <Route element={<Protected />}>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/products' element={<Products />} />
            <Route path='/pay/' element={<PaymentPage />} />
            <Route path='/team/' element={<Team />} />
            <Route path='/reffer/' element={<Reffer />} />
            <Route path='/user/' element={<User />} />
            <Route path='/transactions/' element={<Transactions />} />
            <Route path='/transactions/deposit/:deposit_id' element={<DepositTransactionDetail />} />
            <Route path='/transactions/withdraw/:withdraw_id' element={<WithdrawTransactionDetail />} />
            {/* <Route path='/transactions/' element={<Reffer />} /> */}
          </Route>
          <Route path='/admin/' element={<AdHome />} />
        </Routes>

      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
