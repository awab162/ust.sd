
import React from 'react';
import Header from '@/components/Header';
import StudentInfo from '@/components/StudentInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <StudentInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
