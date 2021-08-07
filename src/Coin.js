import React from 'react';
//require('./style.css');
//import './Coin.css';

const cc = {
  coinContainer: {
    display: "flex",
    justifyContent: "center"
  },
  
   coinRow: {
     display: "flex",
     flexDirection: "row",
     justifyContent: "start",
     alignItems: "center",
     height: "80px",
     borderBottom: "1px solid #d7d7d7",
     width: "900px"
   },
  
   coin: {
     display: "flex",
     alignItems: "center",
     paddingRight: "24px", 
     minWidth: "300px"
   },
  
   coinp: {
     fontSize: "16px",
     width: "150px"
   },
  
   coinImg: {
     height: "30px",
     width: "30px",
     marginRight: "10px"
   },
  
  coinSymbol: {
     textTransform: "uppercase"
   },
  
  coinData: {
    display: "flex",
     textAlign: "right",
     justifyContent: "space-between",
     width: "100%"
   },
  
  coinPrice: {
     width: "110px"
   },
  
  coinVolume: {
    width: "155px"
   },
  
  coinMarketcap: {
     width: "230px"
   },
  
   coinPercent: {
     width: "100px"
   }
  
  // .red {
  //   color: #f00606;
  // }
  
  // .green {
  //   color: #11d811;
  // }
};
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coinContainer' style = {cc.coinContainer}>
      <div className='coinRow' style={cc.coinRow}>
        <div className='coin' style={cc.coin}>
          <img src={image} style={cc.coinImg} alt='crypto' />
          <p>{name}</p>
          <p className='coinSymbol' style={cc.coinSymbol}>{symbol}</p>
        </div>
        <div className='coinData' style={cc.coinData}>
          <p className='coinPrice' style={cc.coinPrice}>${price}</p>
          <p className='coinVolume' style={cc.coinVolume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coinMarketcap' style={cc.coinMarketcap}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
