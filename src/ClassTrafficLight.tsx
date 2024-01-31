import { Component } from 'react';

interface State {
  activeLight: 'red' | 'green' | 'yellow';
}

export class ClassTrafficLight extends Component<
  Record<string, unknown>,
  State
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      activeLight: 'red',
    };
  }

  changeLight = () => {
    let nextLight;
    switch (this.state.activeLight) {
      case 'red':
        nextLight = 'green';
        break;
      case 'green':
        nextLight = 'yellow';
        break;
      case 'yellow':
      default:
        nextLight = 'red';
        break;
    }
    this.setState({ activeLight: nextLight as 'red' | 'green' | 'yellow' });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${
              this.state.activeLight === 'red' ? 'red' : 'black'
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeLight === 'yellow' ? 'yellow' : 'black'
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeLight === 'green' ? 'green' : 'black'
            }`}
          ></div>
        </div>
        <button
          className="next-state-button"
          onClick={this.changeLight}
        >
          Next State
        </button>
      </div>
    );
  }
}
