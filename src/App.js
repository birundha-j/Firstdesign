import logo from './logo.svg';
import './App.css';
import { Input, Space, Progress } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Home from './Home.png';

function App() {
  const { Search } = Input;
  const onSearch = value => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 10,
        color: 'gray'

      }}
    />
  );

  return (
    <div className="main">
      <div className="master">
        <div className="header">
          <div className="headermenus">
            <div className="homestyle">Home</div>
            <div className="shopstyle">Shopping</div>
          </div>
          <div className="searchbar">
            <div >
              <Space direction="vertical">
                <Search placeholder="Doctor or speciality,clinic" enterButton />

                {/* <Search placeholder="input search text" onSearch={onSearch} enterButton size="large"/> */}

              </Space>
            </div>
          </div>
          <div className="calender"> 🗓️ </div>

        </div>
        <div className="maincontent">
          <div className="leftsiecontent">
            <div className="topleft">
              <div className="Goalweight">Goal Weight Calculator</div>
            </div>
            <div className="bottomleft">
              <div className="bottom1">
                <div>
                  <div className="datal">Dadal</div>
                  <div className="goalsarrow">
                    <div className="gwc">Goal weight Calculator</div>
                    <div className="arrow">v</div>
                  </div>
                  <div className="heightweight">
                    <div className="HFC">
                      <div className="height">Height</div>
                      <div className="feetcms">
                        <div className="feet">Feet</div>
                        <div className="cms">cms</div>
                      </div>
                    </div>
                    <div className="WKL">
                      <div className="weight">Weight</div>
                      <div className="kgslbs">
                        <div className="kgs">kgs</div>
                        <div className="lbs">lbs</div>
                      </div>
                    </div>

                  </div>
                  <div className="inputbox2">
                    <div className="input1">
                      <div className="inputcms">Cms</div>
                      <div className="input165"><Input style={{ width: '70%', height: '25px', border: 'white' }} /></div>
                    </div>
                    <div>
                      <div className="inputcms">Kgs</div>
                      <div className="input165"><Input style={{ width: '70%', height: '25px', border: 'white' }} /></div>
                    </div>
                  </div>
                  <div className="circledata">
                    <div className="dot">
                      <div className="dot1">
                        <div className="insidecircle">
                          <div className="number264">26.4</div>
                          <div className="kgm"> kg/m</div>
                        </div>
                        <div className="bmi">BMI</div>
                      </div>
                    </div>
                    <div className="overweight">OVER WEIGHT</div>
                    <div className="aboveweight">You are 4kgs above normal weight</div>
                    <div className="goals">Goal Weight*</div>
                    <div>
                      <div className="inputcmsagain">Kgs</div>
                      <div className="input165again"><Input style={{ width: '20%', height: '25px', border: 'white' }} /></div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="progress1">
                      <div className="line1" >
                        <div className="duration">Duration Days</div>
                        <div className="days30">30 Days</div>
                      </div>
                      <div ><Progress strokeLinecap="square" percent={10} status="active" /></div>
                    </div>
                    <div className="progress2">
                      <div className="line1" >
                        <div className="duration">Intakecalories/Days</div>
                        <div className="days30">1200 cal</div>
                      </div>
                      <div ><Progress strokeLinecap="square" percent={10} status="active" /></div>
                    </div>
                  </div>
                </div>
                <div className="bottom2"></div>
              </div>
              <div className="bottom3">
                <div className="abovename">Any Medication</div>
                <div className="ibox1"><Input style={{ width: '83%', height: '25px', border: 'white' }} /></div><br />
                <div className="abovename">Any Disease</div>
                <div><Input style={{ width: '83%', height: '25px', border: 'white' }} /></div><br />
                <div className="abovename">Any Surgery</div>
                <div><Input style={{ width: '83%', height: '25px', border: 'white' }} /></div><br />
                <div className="abovename">Any Habits</div>
                <div><Input style={{ width: '83%', height: '25px', border: 'white' }} /></div><br />
              </div>


            </div>
          </div>
          <div className="rightsidecontent">
            <div className="topright">
              <div className="images">

              </div>
              <div className="booking">
                <div>Booking Confirmation</div>
                <div className="burnhome">
                  <div>Burn It</div>
                  <div ><img src={Home} className="homeimg"/></div>
                  
                </div>
              </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
