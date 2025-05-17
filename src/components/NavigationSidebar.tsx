
import React from 'react';
import { Home, Contact, LogIn, List } from 'lucide-react';
import { 
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const NavigationSidebar: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center justify-center">
          <List size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px]">
        <div className="p-4 grid gap-4 mt-6">
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/', '_blank', 'noopener,noreferrer')}
          >
            <Home size={18} />
            <span>Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/contactus', '_blank', 'noopener,noreferrer')}
          >
            <Contact size={18} />
            <span>Contact Us</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/web/login', '_blank', 'noopener,noreferrer')}
          >
            <LogIn size={18} />
            <span>Sign In</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSidebar;
