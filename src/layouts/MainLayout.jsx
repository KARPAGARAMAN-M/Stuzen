import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-default text-body-default text-on-surface antialiased overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1 w-full pt-20 bg-surface">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

