import React, {useEffect, useState} from 'react';
import './App.css';
import usePersistState from "./store/usePersistState";

function App() {
  const {state, onChangeValue} = usePersistState()
  const { song_name, volume, analytics } = state

  return (
    <div className="App">
      <div>
          <input type="text" name='song_name' placeholder='song name' onChange={onChangeValue} value={song_name}/>
          <input type="range" name='volume' placeholder='volume' onChange={onChangeValue} min={0} max={100} value={+volume}/>
          <input type="checkbox" name='analytics' placeholder='analytics' defaultChecked={analytics} onChange={onChangeValue}/>
      </div>
    </div>
  );
}

export default App;
