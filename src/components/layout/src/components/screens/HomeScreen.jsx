import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const HomeScreen = () => {
  const topWalkers = [
    { name: "Sophie Martin", steps: 12500 },
    { name: "Lucas Dubois", steps: 11200 },
    { name: "Marie Lambert", steps: 10800 },
    { name: "Thomas Bernard", steps: 9900 },
    { name: "Claire Petit", steps: 9500 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-800">8,547</div>
          <div className="text-sm text-green-600">Pas aujourd'hui</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-800">3</div>
          <div className="text-sm text-green-600">Arbres plantés</div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-green-600" />
            Top Marcheurs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topWalkers.map((walker, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-green-700">#{index + 1}</span>
                  <span>{walker.name}</span>
                </div>
                <span className="text-green-600">{walker.steps} pas</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeScreen;
