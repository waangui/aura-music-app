import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentSong: null,
  playlist: [],

  setCurrentSong: (song, playlist) => set({ 
    currentSong: song, 
    playlist: playlist, 
    isPlaying: true 
  }),

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),

  playNext: () => set((state) => {
    if (!state.currentSong || state.playlist.length === 0) return {};
    const currentIndex = state.playlist.findIndex(track => track.id === state.currentSong.id);
    const nextIndex = (currentIndex + 1) % state.playlist.length; 
    return { currentSong: state.playlist[nextIndex], isPlaying: true };
  }),

  playPrev: () => set((state) => {
    if (!state.currentSong || state.playlist.length === 0) return {};
    const currentIndex = state.playlist.findIndex(track => track.id === state.currentSong.id);
    const prevIndex = (currentIndex - 1 + state.playlist.length) % state.playlist.length; 
    return { currentSong: state.playlist[prevIndex], isPlaying: true };
  }),
}));