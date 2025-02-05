import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const friends = [
    { id: 1, name: "Alice Johnson", city: "New York", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60" },
    { id: 2, name: "Bob Smith", city: "Los Angeles", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=60" },
    { id: 3, name: "Carol White", city: "Chicago", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=60" },
    { id: 4, name: "David Brown", city: "Houston", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60" },
    { id: 5, name: "Eva Green", city: "Phoenix", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=60" },
    { id: 6, name: "Frank Miller", city: "Philadelphia", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=60" },
    { id: 7, name: "Grace Lee", city: "San Antonio", photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=100&q=60" },
    { id: 8, name: "Henry Wilson", city: "San Diego", photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&q=60" },
    { id: 9, name: "Ivy Chen", city: "Dallas", photo: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=100&q=60" },
    { id: 10, name: "Jack Davis", city: "San Jose", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=60" },
  ];

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Friends</h1>
      
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search friends..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFriends.map((friend) => (
          <Card key={friend.id}>
            <CardContent className="flex items-center space-x-4 p-4">
              <img
                src={friend.photo}
                alt={friend.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{friend.name}</h3>
                <p className="text-sm text-muted-foreground">{friend.city}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Friends;