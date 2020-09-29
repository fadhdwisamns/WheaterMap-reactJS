import React ,{Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
      }
    
      tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      render(){
        return(
            <React.Fragment>
         <div>
        Seconds: {this.state.seconds}
        </div>
            </React.Fragment>
        );
    }
}
export default Clock;