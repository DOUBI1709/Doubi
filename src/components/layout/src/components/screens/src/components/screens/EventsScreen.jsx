import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EventsScreen = () => {
  const events = [
    {
      id: 1,
      title: "ECOSTEP Challenge",
      date: "5 juin 2024",
      description: "Journée internationale de l'environnement",
      type: "Challenge"
    },
    {
      id: 2,
      title: "Atelier créatif",
      date: "3 juillet 2024",
      description: "Journée mondiale sans sac plastique",
      type: "Atelier"
    },
    {
      id: 3,
      title: "Team building eco responsable",
      date: "21 juin 2024",
      description: "Activité d'équipe éco-responsable",
      type: "Team Building"
    }
  ];

  const handleSubscribe = (eventId) => {
    console.log(`Inscription à l'événement ${eventId}`);
    // Implémentation de l'inscription
  };

  return (
    <div className="space-y-4">
      {events.map(event => (
        <Card key={event.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-green-800">{event.title}</h3>
                <p className="text-sm text-green-600">{event.date}</p>
                <p className="text-sm mt-2">{event.description}</p>
              </div>
              <button 
                onClick={() => handleSubscribe(event.id)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                S'inscrire
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventsScreen;
