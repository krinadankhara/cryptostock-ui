import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

const outer = {
  backgroundImage: 'linear-gradient(to bottom right,LightSlateGrey, lightgrey)',
};

const heading = {
  textAlign: 'center',
  color: 'darkblue',
};

function Stock() {
  const [resp, setResp] = useState({
    columns: [
      {
        label: 'Open',
        field: '1. open',
      },
      {
        label: 'High',
        field: '2. high',
      },
      {
        label: 'Low',
        field: '3. low',
      },
      {
        label: 'Close',
        field: '4. close',
      },
      {
        label: 'Volume',
        field: '5. volume',
      },
    ],
  });

  useEffect(() => {
    if (resp) console.log(resp);
  }, [resp]);
  useEffect(() => {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=demo')
      .then((response) => {
        setResp({ columns: resp.columns, rows: (Object.values(response.data['Time Series (5min)'])).map(item => item) });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 style={heading}>IBM Stock Data</h1>
      <div style={outer}>
        <MDBDataTable
          data={resp}
          striped
          bordered
          hover
        />
      </div>
    </div>
  );
}

export default Stock;
