import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, MessageSquare, Users } from 'lucide-react';

import Header from './components/layout/Header';
import HomeScreen from './components/screens/HomeScreen';
import EventsScreen from './components/screens/EventsScreen';
import ChatScreen from './components/screens/ChatScreen';

const App = () => {
  const [userName] = useState("Sarah");

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Header userName={userName} />
      
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="home" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Accueil
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Événements
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Chat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <HomeScreen />
        </TabsContent>

        <TabsContent value="events">
          <EventsScreen />
        </TabsContent>

        <TabsContent value="chat">
          <ChatScreen />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
