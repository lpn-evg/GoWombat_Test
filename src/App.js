import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import { getData, changeData } from './api';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data.users);
      setLoading(false);
    });
  }, [0]);

  const saveChange = (obj) => {
    changeData(obj).then((res) => {
      setData(res.data.users);
    });
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="App">
      <Table
        data={data}
        saveChange={saveChange}
      />
    </div>
  );
}

export default App;
