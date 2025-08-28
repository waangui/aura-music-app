import axios from 'axios';

const API_URL = '/api/api/v1/json/523532';

const transformTrackData = (track) => ({
  id: track.idTrack,
  title: track.strTrack,
  artist: { name: track.strArtist },
  album: { 
    title: track.strAlbum,
    cover_small: `${track.strTrackThumb}/preview`, 
    cover_medium: track.strTrackThumb,
  },
  preview: track.strMusicVid, 
});

export const getTrendingTracks = async () => {
  try {
    const response = await axios.get(`${API_URL}/mostloved.php?format=track`);
    const tracks = response.data.loved;
    return tracks.map(transformTrackData);
  } catch (error) {
    console.error("Error fetching trending tracks from AudioDB:", error);
    return [];
  }
};