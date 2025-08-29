import React, { useState, useEffect } from 'react';
import { getTrendingTracks } from '../services/audioDbApi.js';
import { usePlayerStore } from '../stores/playerStore.js';
import SongCard from '../components/SongCard.jsx';

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);

  useEffect(() => {
    const fetchTrending = async () => {
      const tracks = await getTrendingTracks();
      setTrending(tracks.slice(0, 6));
    };
    fetchTrending();
  }, []);

  const handlePlay = (song) => {
    setCurrentSong(song, trending);
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="font-libre text-3xl font-bold mb-6 text-gray-800">Trending</h2>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-[121px]">
        {trending.map((song) => (
          <SongCard 
            key={song.id}
            song={song} 
            onPlay={() => handlePlay(song)} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;