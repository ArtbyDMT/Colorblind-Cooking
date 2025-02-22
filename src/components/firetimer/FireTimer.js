import React from "react"
import Meat from "./Meat"
import './FireTimer.css'
import FireButton from "../buttons/FireButton";


        class FireTimer extends React.Component {
            constructor(props) {
              super();
              this.updateTimer = this.updateTimer.bind(this);
              this.state = {timer: 180, lapse: 180, running: false};
            }
            componentWillReceiveProps(nextProps) {
              this.setState({lapse: nextProps.boilTime, running: nextProps.timerRunning});
            }
            updateTimer(timer) {
              clearInterval(this.timer);
              this.setState({timer: timer, lapse: timer, running: false});
            }
            handleRunClick = () => {
              this.setState(state => {
                if (state.running) {
                  clearInterval(this.timer);
                } else {
                  this.timer = setInterval(() => {
                    switch (state.lapse) {
                      case 0:
                        this.setState({running: false});
                        break;
                      default:    
                        const startTime = --state.lapse;
                        this.setState({lapse: startTime});
                    }
                  }, 1000);
                }
                return {running: !state.running}
              })
            };
            componentWillUnmount() {
              clearInterval(this.timer);
            }
            formatSeconds(lapse) {
              const minutes = parseInt(lapse / 60, 10);
              const seconds = parseInt(lapse % 60, 10);
              return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }
            render() {
              const {lapse, running} = this.state;
              const displayTime = this.formatSeconds(lapse);
              const playPauseClass = running ? 'pause' : 'start'
              
              return (
                
                <section>

<div id="grill-header">                    
<h1>Your Grilling, Your Way!</h1>
                    
                     
                     <div id="fire-button">
                      <FireButton 
                      href="timerspage"
                      className={playPauseClass} 
                      onClick={this.handleRunClick}
                      text="▶"/>
                      <label className="actualtimer">{displayTime}</label>
                      </div>
</div>                  
                  <div className="grill">
                    <Meat type="Rare" title="rare: Cool, red center" instructions="3 minutes" seconds="180" updateTimer={this.updateTimer} image={this.props.image} />
                    <Meat type="Medium Rare" title="medium-rare: warm, red center" instructions="4 minutes" seconds="240" updateTimer={this.updateTimer} image={this.props.image} />
                    <Meat type="Medium" title="medium: warm, pink center" instructions="5 minutes" seconds="300" updateTimer={this.updateTimer} image={this.props.image} />
                    <Meat type="Medium Well" title="medium-well: warm, very little pink center" instructions="6 minutes" seconds="360" updateTimer={this.updateTimer} image={this.props.image} />
                    <Meat type="Well Done" title="well-done: warm, no pink center" instructions="7 minutes" seconds="420" updateTimer={this.updateTimer} image={this.props.image} />
                  </div>
                </section>
              )
            }
          }

export default FireTimer;