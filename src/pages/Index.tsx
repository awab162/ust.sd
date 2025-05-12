
import React from 'react';
import Header from '@/components/Header';
import StudentInfo from '@/components/StudentInfo';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="flex-1 min-w-[200px] p-3 bg-blue-100 hover:bg-blue-200 cursor-pointer rounded-md text-center">
                  <p className="font-medium">Student Information</p>
                </div>
                <div className="flex-1 min-w-[200px] p-3 bg-green-100 hover:bg-green-200 cursor-pointer rounded-md text-center">
                  <p className="font-medium">Schedule</p>
                </div>
                <div className="flex-1 min-w-[200px] p-3 bg-purple-100 hover:bg-purple-200 cursor-pointer rounded-md text-center">
                  <p className="font-medium">Exams</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <StudentInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
