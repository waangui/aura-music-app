import React from 'react';

const SongCard = ({ song, onPlay }) => {
  if (!song || !song.album || !song.artist) {
    return null;
  }

  return (
    <div 
      onClick={onPlay} 
      className="flex flex-col w-[196px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer hover:bg-white/20 transition-all"
    >
      <div className="relative w-full h-[196px] group">
        <img 
          alt="song_album_art" 
          src={song.album.cover_medium} 
          className="w-full h-full object-cover rounded-[9px]" 
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/BFACC8/FFFFFF?text=Music'; }}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-black truncate">{song.title}</p>
        <p className="text-sm truncate text-gray-600 mt-1">{song.artist.name}</p>
      </div>
    </div>
  );
};

export default SongCard;