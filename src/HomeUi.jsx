/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import Axios from 'axios';

import {
  Container, Col, Row, Image,
} from 'react-bootstrap';
// import CarouselCont from './Carousel.jsx';
// import CarouselContainer from './Carousel.jsx';
// import Button from 'react-bootstrap/Button';
// mport {
// Card, Button } from 'react-bootstrap';
// import image from './image.jpg';

// eslint-disable-next-line import/prefer-default-export
// import CardHome from './Card.jsx';
// import image from './image.jpg';

/* const heading = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
  columnCount: 3,
  columnGap: 40,
  columnRule: 100,
  marginTop: 300,
  //display: block,
  width: 400,
  height: 400,
  borderRadius: 50,
  //display: flex,

}; */

const pie = {
  /* pieContainer: {
    height: '150px',
    position: 'relative',
  },
  pieBackground: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '100%',
    boxShadow: '0px 0px 8px rgba(0,0,0,0.5)',
  },
  pie :{
    transition: 'all 1s',
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '100%',
    clip:'rect(0px, 75px, 150px, 0px)'
  },

  hold: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '100%',
    clip: 'rect(0px, 150px, 150px, 75px)'
  }

  #pieSlice1 .pie {
    background-color: #1b458b;
    transform:rotate(30deg);
  }

  #pieSlice2 {
    transform: rotate(30deg);
  }

  #pieSlice2 .pie {
    background-color: #0a0;
    transform: rotate(60deg);
  }

  #pieSlice3 {
    transform: rotate(90deg);
  }

  #pieSlice3 .pie {
    background-color: #f80;
    transform: rotate(120deg);
  }

  #pieSlice4 {
    transform: rotate(210deg);
  }

  #pieSlice4 .pie {
    background-color: #08f;
    transform: rotate(10deg);
  }

  #pieSlice5 {
    transform: rotate(220deg);
  }

  #pieSlice5 .pie {
    background-color: #a04;
    transform: rotate(70deg);
  }

  #pieSlice6 {
    transform: rotate(290deg);
  }

  #pieSlice6 .pie {
    background-color: #ffd700;
    transform: rotate(70deg);
  }

  .innerCircle {
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: #444;
    border-radius: 100%;
    top: 15px;
    left: 15px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.5) inset;
    color: white;
  }
  .innerCircle .content {
    position: absolute;
    display: block;
    width: 120px;
    top: 30px;
    left: 0;
    text-align: center;
    font-size: 14px;
  } */

  pie: {
    backgroundImage: 'linear-gradient(to bottom right,LightSlateGrey, black)',
  },


  row: {
    display: 'flex',
  },

  /* Create two equal columns that sits next to each other */
  column: {
    flex: '52%',
    padding: '10px',
    height: '510px',
    backgroundColor: '#999999',
  },
  column1: {
    flex: '50%',
    marginTop: '16%',
    padding: '40px',
    height: '450px',
    backgroundColor: '#595959',
  },

  maintext: {
    fontFamily: 'Lucida Console',
    fontSize: '80px',
    textAlign: 'center',
    color: 'White',

  },
  text: {
    paddingTop: '10%',
    textAlign: 'left',
    fontFamily: 'Candara',
    fontSize: '60px',
    // fontSize: 'large',
    color: 'WHITE',
  },
  text2: {
    fontFamily: 'Candara',
    fontSize: '29px',
    // fontSize: 'large',
    color: 'WHITE',
  },
  text1: {
    textAlign: 'left',
    paddingTop: '4%',
    fontFamily: 'Candara',
    // fontSize: '70%',
    // fontSize: 'large',
    color: 'WHITE',
  },
};

function HomeUi() {
  return (
    <div className="pie" style={pie.pie}>
      <h1 className="maintext" style={pie.maintext}>CryptoStockAnalyzer</h1>
      <div className="row" style={pie.row}>
        <div className="column" style={pie.column}>
          <h1 className="text" style={pie.text}>TRACK YOUR EXPENSES!</h1>
          <h2 className="text2" style={pie.text2}>EXPLORE THE WORLD OF CRYPTO, STOCKS AND CURRENCY CONVERSION HERE.</h2>
        </div>
        <div className="column1" style={pie.column1}>
          <h2 className="text1" style={pie.text1}>
            We bring you the ability to track all your transactions from income to expenses to savings. All transactions are
            displayed in a neat table with editable features! All your information is safe and secure from unauthorized access.
            Not only that, you can also search crypto-currencies and view its prices histories, health index such as its
            Fundamental Score or its Market Maturity Score. We also offer a currency converter to add convenience.
            You can also review essential information about stocks.
          </h2>

        </div>
      </div>
    </div>
  );
}
export default HomeUi;
