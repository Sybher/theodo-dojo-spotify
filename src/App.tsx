import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';

const App = () => {
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  console.log(tracks);
  const [trackIndex, setTrackIndex] = useState(0);
  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test de Sybher</h1>
      </header>
      <div className="App-images">
        <p>Test hgcf</p>
      </div>
      <div className="App-buttons">
        {tracks !== undefined &&
          tracks[trackIndex].track.preview_url !== null && (
            <audio
              src={tracks[trackIndex].track.preview_url}
              autoPlay
              controls
            />
          )}
        <button onClick={goToNextTrack}>Next track</button>
      </div>
    </div>
  );
};

export default App;
