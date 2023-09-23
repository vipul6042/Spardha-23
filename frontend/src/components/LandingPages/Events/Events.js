import React, { useState } from 'react';
// import aquatics from './aquatics.png';
import athletics from './image/athletics.png';
import athleticshover from './image/athleticshover.png';
import basketball from './image/basketball.png';
import basketballhover from './image/basketballhover.png';
import badminton from './image/badminton.png';
import badmintonhover from './image/badmintonhover.png';
import boxing from './image/boxing.png';
import boxinghover from './image/boxinghover.png';
// import carrom from './carrom.png'
import chess from './image/chess.png';
import chesshover from './image/chesshover.png';
import cricket from './image/cricket.png';
import crickethover from './image/crickethover.png';
import football from './image/football.png';
import footballhover from './image/footballhover.png';
import handball from './image/handball.png';
import handballhover from './image/handballhover.png';
//import question from './question.png';
import hockey from './image/hockey.png';
import hockeyhover from './image/hockeyhover.png';
import kabaddi from './image/kabaddi.png';
import kabaddihover from './image/kabaddihover.png';
import khokho from './image/kho-kho.png';
import khokhohover from './image/kho-khohover.png';
import cycling from './image/cycling.png';
import cyclinghover from './image/cyclinghover.png';
import squash from './image/squash.png';
import squashhover from './image/squashhover.png';
import powerlifting from './image/powerlifting.png';
import powerliftinghover from './image/powerliftinghover.png';
import tabletennis from './image/table-tennis.png';
import tabletennishover from './image/tabletennishover.png';
import taekwondo from './image/taekwondo.png';
import taekwondohover from './image/taekwondohover.png';
import tennis from './image/tennis.png';
import tennishover from './image/tennishover.png';
import volleyball from './image/volleyball.png';
import volleyballhover from './image/volleyballhover.png';
import weightlifting from './image/weightlifting.png';
import weightliftinghover from './image/weightliftinghover.png';
import styles from './Events.module.css';
import { Link } from 'react-router-dom';
import Carousel from '../Home/Carousel/Carouselhp';
import {
  // Aqautics,
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  // Carrom,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Powerlifting,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
} from './Events_Components.js';

const Events = () => {
  const [showResults0, setShowResults0] = useState(false);
  const [showResults1, setShowResults1] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [showResults3, setShowResults3] = useState(false);
  const [showResults4, setShowResults4] = useState(false);
  const [showResults5, setShowResults5] = useState(false);
  const [showResults6, setShowResults6] = useState(false);
  const [showResults7, setShowResults7] = useState(false);
  const [showResults8, setShowResults8] = useState(false);
  const [showResults9, setShowResults9] = useState(false);
  const [showResults10, setShowResults10] = useState(false);
  const [showResults11, setShowResults11] = useState(false);
  const [showResults12, setShowResults12] = useState(false);
  const [showResults13, setShowResults13] = useState(false);
  const [showResults14, setShowResults14] = useState(false);
  const [showResults15, setShowResults15] = useState(false);
  const [showResults16, setShowResults16] = useState(false);
  const [showResults17, setShowResults17] = useState(false);
  const [showResults18, setShowResults18] = useState(false);
const[athletics1,setathletics1]=useState(athletics);
const athleticsMouseEnter = () => {
  setathletics1(athleticshover);
};
const athleticsMouseLeave = () => {
  setathletics1(athletics);
};
const[basketball1,setbasketball1]=useState(basketball);
const basketballMouseEnter = () => {
  setbasketball1(basketballhover);
};
const basketballMouseLeave = () => {
  setbasketball1(basketball);
};
const[badminton1,setbadminton1]=useState(badminton);
const badmintonMouseEnter = () => {
  setbadminton1(badmintonhover);
};
const badmintonMouseLeave = () => {
  setbadminton1(badminton);
};
const[boxing1,setboxing1]=useState(boxing);
const boxingMouseEnter = () => {
  setboxing1(boxinghover);
};
const boxingMouseLeave = () => {
  setboxing1(boxing);
};
const[cricket1,setcricket1]=useState(cricket);
const cricketMouseEnter = () => {
  setcricket1(crickethover);
};
const cricketMouseLeave = () => {
  setcricket1(cricket);
};
const[football1,setfootball1]=useState(football);
const footballMouseEnter = () => {
  setfootball1(footballhover);
};
const footballMouseLeave = () => {
  setfootball1(football);
};
const[handball1,sethandball1]=useState(handball);
const handballMouseEnter = () => {
  sethandball1(handballhover);
};
const handballMouseLeave = () => {
  sethandball1(handball);
};
const[hockey1,sethockey1]=useState(hockey);
const hockeyMouseEnter = () => {
  sethockey1(hockeyhover);
};
const hockeyMouseLeave = () => {
  sethockey1(hockey);
};
const[kabaddi1,setkabaddi1]=useState(kabaddi);
const kabaddiMouseEnter = () => {
  setkabaddi1(kabaddihover);
};
const kabaddiMouseLeave = () => {
  setkabaddi1(kabaddi);
};
const[khokho1,setkhokho1]=useState(khokho);
const khokhoMouseEnter = () => {
  setkhokho1(khokhohover);
};
const khokhoMouseLeave = () => {
  setkhokho1(khokho);
};
const[cycling1,setcycling1]=useState(cycling);
const cyclingMouseEnter = () => {
  setcycling1(cyclinghover);
};
const cyclingMouseLeave = () => {
  setcycling1(cycling);
};
const[squash1,setsquash1]=useState(squash);
const squashMouseEnter = () => {
  setsquash1(squashhover);
};
const squashMouseLeave = () => {
  setsquash1(squash);
};
const[tabletennis1,settabletennis1]=useState(tabletennis);
const tabletennisMouseEnter = () => {
  settabletennis1(tabletennishover);
};
const tabletennisMouseLeave = () => {
  settabletennis1(tabletennis);
};
const[powerlifting1,setpowerlifting1]=useState(powerlifting);
const powerliftingMouseEnter = () => {
  setpowerlifting1(powerliftinghover);
};
const powerliftingMouseLeave = () => {
  setpowerlifting1(powerlifting);
};
const[weightlifting1,setweightlifting1]=useState(weightlifting);
const weightliftingMouseEnter = () => {
  setweightlifting1(weightliftinghover);
};
const weightliftingMouseLeave = () => {
  setweightlifting1(weightlifting);
};
const[taekwondo1,settaekwondo1]=useState(taekwondo);
const taekwondoMouseEnter = () => {
  settaekwondo1(taekwondohover);
};
const taekwondoMouseLeave = () => {
  settaekwondo1(taekwondo);
};
const[tennis1,settennis1]=useState(tennis);
const tennisMouseEnter = () => {
  settennis1(tennishover);
};
const tennisMouseLeave = () => {
  settennis1(tennis);
};
const[volleyball1,setvolleyball1]=useState(volleyball);
const volleyballMouseEnter = () => {
  setvolleyball1(volleyballhover);
};
const volleyballMouseLeave = () => {
  setvolleyball1(volleyball);
};
const[chess1,setchess1]=useState(volleyball);
const chessMouseEnter = () => {
  setchess1(chesshover);
};
const chessMouseLeave = () => {
  setchess1(chess);
};


  const onClick0 = () => {
    setShowResults0(!showResults0);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick1 = () => {
    setShowResults0(false);
    setShowResults1(!showResults1);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick2 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(!showResults2);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick3 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(!showResults3);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick4 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(!showResults4);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick5 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(!showResults5);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick6 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(!showResults6);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick7 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(!showResults7);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick8 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(!showResults8);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick9 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(!showResults9);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick10 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(!showResults10);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick11 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(!showResults11);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick12 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(!showResults12);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick13 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(!showResults13);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick14 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(!showResults14);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick15 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(!showResults15);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick16 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(!showResults16);
    setShowResults17(false);
    setShowResults18(false);
  };
  const onClick17 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(!showResults17);
    setShowResults18(false);
  };
  const onClick18 = () => {
    setShowResults0(false);
    setShowResults1(false);
    setShowResults2(false);
    setShowResults3(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults6(false);
    setShowResults7(false);
    setShowResults8(false);
    setShowResults9(false);
    setShowResults10(false);
    setShowResults11(false);
    setShowResults12(false);
    setShowResults13(false);
    setShowResults14(false);
    setShowResults15(false);
    setShowResults16(false);
    setShowResults17(false);
    setShowResults18(!showResults18);
  };

  return (
    <section id="events" className={`${styles.ftco_section} ${styles.events}`}>
      <div className='bg'>
        <Carousel />
      </div>
      <div className={`${styles.container} ${styles.pb_1}`}>
        <div
          className={`${styles.row} ${styles.justify_content_center} ${styles.mb_5}`}
        >
          <div
            className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
          >
            {/* <h3
              className={`${styles.subheading}`}
              style={{ color: '#6db549', fontWeight: 'bold' }}
            >
              Find Your Interest
            </h3> */}
           
          </div>
        </div>
      <div className={styles.maindiv}>
        <div className={styles.title}>
      
          <div><h2 className={`${styles.mb_1} ${styles.H2}`} >
            Sports &amp; Games
            </h2></div>
          <div>
            <Link to="/register/signup/" className={styles.registerbtn}>Register Now</Link>
          </div>
        </div>
            <div className={styles.scrollablediv}>
        <div className={`${styles.row}`}>
          {/* <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={aquatics}
              alt=""
              onClick={onClick0}
            />
          </div> */}

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"      onMouseEnter={athleticsMouseEnter}
            onMouseLeave={athleticsMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={athletics1}
              alt=""
              onClick={onClick0}
            />
            <p>Athletics</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
            onMouseEnter={badmintonMouseEnter}
            onMouseLeave={badmintonMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={badminton1}
              alt=""
              onClick={onClick1}
            />
             <p>Badminton</p>

                
          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
            onMouseEnter={basketballMouseEnter}
            onMouseLeave={basketballMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={basketball1}
              alt=""
              onClick={onClick2}
            />
          <p>Basketball</p>
          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
            onMouseEnter={boxingMouseEnter}
            onMouseLeave={boxingMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={boxing1}
              alt=""
              onClick={onClick3}
            />
                 <p>Boxing</p>
          </div>
          {/*<div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={chess}
              alt=""
              onClick={onClick4}
            />
          </div>*/}

          {/* {showResults0 ? (
            <Aqautics changeState={(showResult0) => setShowResults0(false)} />
          ) : null} */}
          {showResults0 ? (
            <Athletics changeState={(showResult0) => setShowResults0(false)} />
          ) : null}
          {showResults1 ? (
            <Badminton changeState={(showResult1) => setShowResults1(false)} />
          ) : null}
          {showResults2 ? (
            <Basketball changeState={(showResult2) => setShowResults2(false)} />
          ) : null}
          {showResults3 ? (
            <Boxing changeState={(showResult3) => setShowResults3(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          {/* <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={boxing}
              alt=""
              onClick={onClick4}
            />
          </div> */}

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
            onMouseEnter={chessMouseEnter}
            onMouseLeave={chessMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={chess1}
              alt=""
              onClick={onClick4}
            />
             <p>Chess</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
            onMouseEnter={cricketMouseEnter}
            onMouseLeave={cricketMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={cricket1}
              alt=""
              onClick={onClick5}
            />
             <p>Cricket</p>
          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
            onMouseEnter={cyclingMouseEnter}
            onMouseLeave={cyclingMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={cycling1}
              alt=""
              onClick={onClick6}
            />
             <p>Cycling</p>

          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
            onMouseEnter={footballMouseEnter}
            onMouseLeave={footballMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={football1}
              alt=""
              onClick={onClick7}
            />
             <p>Football</p>

          </div>

          {/*<div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={handball}
              alt=""
              onClick={onClick8}
            />
          </div>*/}
          {/* {showResults4 ? (
            <Boxing changeState={(showResult4) => setShowResults4(false)} />
          ) : null} */}
          {/* {showResults4 ? (
            <Squash changeState={(showResult5) => setShowResults5(false)} />
          ) : null} */}
          {showResults4 ? (
            <Chess changeState={(showResult4) => setShowResults4(false)} />
          ) : null}
          {showResults5 ? (
            <Cricket changeState={(showResult5) => setShowResults5(false)} />
          ) : null}
          {showResults6 ? (
            <Cycling changeState={(showResult6) => setShowResults6(false)} />
          ) : null}
          {showResults7 ? (
            <Football changeState={(showResult7) => setShowResults7(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
            onMouseEnter={handballMouseEnter}
            onMouseLeave={handballMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={handball1}
              alt=""
              onClick={onClick8}
            />
             <p>Handball</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
            onMouseEnter={hockeyMouseEnter}
            onMouseLeave={hockeyMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={hockey1}
              alt=""
              onClick={onClick9}
            />
             <p>Hockey</p>

          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
            onMouseEnter={kabaddiMouseEnter}
            onMouseLeave={kabaddiMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={kabaddi1}
              alt=""
              onClick={onClick10}
            />
             <p>Kabaddi</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
            onMouseEnter={khokhoMouseEnter}
            onMouseLeave={khokhoMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={khokho1}
              alt=""
              onClick={onClick11}
            />
             <p>kho-kho</p>

          </div>
          {/*<div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tabletennis}
              alt=""
              onClick={onClick13}
            />
          </div>*/}
          {/*<div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="3"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tennis}
              alt=""
              onClick={onClick15}
            />
          </div>*/}
          {/* {showResults8 ? (
            <Cycling changeState={(showResult8) => setShowResults8(false)} />
          ) : null} */}

          {showResults8 ? (
            <Handball changeState={(showResult8) => setShowResults8(false)} />
          ) : null}
          {showResults9 ? (
            <Hockey changeState={(showResult9) => setShowResults9(false)} />
          ) : null}
          {showResults10 ? (
            <Kabbadi changeState={(showResult10) => setShowResults10(false)} />
          ) : null}
          {showResults11 ? (
            <Khokho changeState={(showResult11) => setShowResults11(false)} />
          ) : null}
        </div>

        <div className={`${styles.row}`}>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
            onMouseEnter={powerliftingMouseEnter}
            onMouseLeave={powerliftingMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={powerlifting1}
              alt=""
              onClick={onClick12}
            />
             <p>Powerlifting</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
            onMouseEnter={squashMouseEnter}
            onMouseLeave={squashMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={squash1}
              alt=""
              onClick={onClick13}
            />
             <p>Squash</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
            onMouseEnter={tabletennisMouseEnter}
            onMouseLeave={tabletennisMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tabletennis1}
              alt=""
              onClick={onClick14}
            />
             <p>TableTennis</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
            onMouseEnter={taekwondoMouseEnter}
            onMouseLeave={taekwondoMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={taekwondo1}
              alt=""
              onClick={onClick15}
            />
             <p>Taekwondo</p>

          </div>
          {/* {showResults12 ? (
            <Kabbadi changeState={(showResult12) => setShowResults12(false)} />
          ) : null}
          {showResults13 ? (
            <Khokho changeState={(showResult13) => setShowResults13(false)} />
          ) : null} */}
          {showResults12 ? (
            <Powerlifting
              changeState={(showResult12) => setShowResults12(false)}
            />
          ) : null}
          {showResults13 ? (
            <Squash changeState={(showResult13) => setShowResults13(false)} />
          ) : null}
          {showResults14 ? (
            <TableTennis
              changeState={(showResult14) => setShowResults14(false)}
            />
          ) : null}
          {showResults15 ? (
            <Taekwondo
              changeState={(showResult15) => setShowResults15(false)}
            />
          ) : null}
        </div>

        <div className={`${styles.row} ${styles.lastrow} `}>
          {/*<div
            className={`${styles.col_2} ${styles.padding1} ${styles.shake}`}
            id="0"
         ></div> */}

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
            onMouseEnter={tennisMouseEnter}
            onMouseLeave={tennisMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tennis1}
              alt=""
              onClick={onClick16}
            />
             <p>Tennis</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
            onMouseEnter={volleyballMouseEnter}
            onMouseLeave={volleyballMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={volleyball1}
              alt=""
              onClick={onClick17}
            />
             <p>Volleyball</p>

          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
            onMouseEnter={weightliftingMouseEnter}
            onMouseLeave={weightliftingMouseLeave}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={weightlifting1}
              alt=""
              onClick={onClick18}
            />
             <p>Weightlifting</p>

          </div>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.emptyblock} `} style={{backgroundColor:'transparent'}}></div>

          {/* <div
            className={`${styles.col_2} ${styles.padding1} ${styles.shake}`}
            id="3"
          ></div> */}

          {/* {showResults16 ? (
            <Tennis changeState={(showResult0) => setShowResults16(false)} />
          ) : null} */}
          {showResults16 ? (
            <Tennis changeState={(showResult16) => setShowResults16(false)} />
          ) : null}
          {showResults17 ? (
            <Volleyball
              changeState={(showResult17) => setShowResults17(false)}
            />
          ) : null}
          {showResults18 ? (
            <WeightLifting
              changeState={(showResult18) => setShowResults18(false)}
            />
          ) : null}
        </div>
      </div>
      </div>
      </div>
   
    </section>
  );
};

export default Events;
