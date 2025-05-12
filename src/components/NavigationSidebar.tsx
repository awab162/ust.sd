
import React from 'react';
import { Home, Contact, LogIn } from 'lucide-react';
import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const NavigationSidebar: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <span>Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 grid gap-4">
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/', '_blank')}
          >
            <Home size={18} />
            <span>Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/contactus', '_blank')}
          >
            <Contact size={18} />
            <span>Contact Us</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex justify-start gap-2 w-full"
            onClick={() => window.open('https://acs.ust.edu.sd/web/login', '_blank')}
          >
            <LogIn size={18} />
            <span>Sign In</span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationSidebar;
