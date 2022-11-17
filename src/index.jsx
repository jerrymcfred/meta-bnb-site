import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import PlacesToStay from './pages/PlacesToStay';
import Header from './components/Header';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/place-to-stay", element: <PlacesToStay /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className='sm:pt-10'>
      <Header />
      <RouterProvider router={router} />
      {/* modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="p-0 modal-box">
          <div className='flex justify-between px-4 py-3 sm:px-8 sm:py-6 border-b border-[#CFD8DC]'>
            <h3 className="text-lg font-bold">Connect Wallet</h3>
            <label htmlFor="my-modal-3" className="text-black bg-white btn btn-sm hover:bg-white">✕</label>
          </div>
          
          <div className='flex flex-col px-4 py-3 sm:px-8 sm:py-6 gap-y-2'>
            <p>Choose your preferred wallet</p>
            <div className="flex justify-between hover:bg-[#CFD8DC] cursor-pointer rounded-xl border border-[#CFD8DC] p-2">
              <div className='flex items-center gap-x-2'>
                <img src="metamask-small.png" alt="metamask" />
                <p>Metamask</p>
              </div>
              <button className="text-2xl">&gt;</button>
            </div>
            <div className="flex p-2 justify-between hover:bg-[#CFD8DC] cursor-pointer rounded-xl border border-[#CFD8DC]">
              <div className='flex items-center gap-x-2'>
                <img src="wconnect.png" alt="walletconnect" />
                <p>WalletConnect</p>
              </div>
              <button className="text-2xl">&gt;</button>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
