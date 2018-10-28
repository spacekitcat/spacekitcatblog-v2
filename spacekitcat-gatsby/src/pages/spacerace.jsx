import React from 'react';
import sortBy from 'lodash/sortBy';

const getPositionClass = position => `spacerace__sprite spacerace__sprite--x${position.x}y${position.y}`;

let numberCounter = 0;
const generateRandomPosition = () => {
  const x = Math.ceil((Math.round(Math.random() * 1200)) / 20) * 20;
  const y = Math.ceil((Math.round(Math.random() * 350)) / 20) * 20;
  return { position: { x, y }, number: numberCounter++ };
};

let stateVisibilityCounterRegister = true;
const renderSnakes = (snakeState) => {
  let i = 0;
  let statclass = 'snake__environment-stats';
  if (!stateVisibilityCounterRegister) {
    statclass += ' snake__environment-stats--alt';
  }
  stateVisibilityCounterRegister = !stateVisibilityCounterRegister;

  const snakes = snakeState.map(state => (
    <div className="snake__container" key={i}>
      <div className={`${getPositionClass(state.position)} spacerace__sprite--number${i}`} key={i++} />
    </div>
  ));
  return (
    <div className="snake__environment-wrapper">
      <div className="snake__environment-wrongscreensize">
        <h1>Your browser isn&#39;t wide enough for this jelly.</h1>
        <h3>The width should be at least 1280px, i.e. Desktop, extra wide tablet etc.</h3>
        <p>This is an experimental project prototype space for probability based games.</p>
        <p>The nature of prototyping allows for this to have very minimal thought towards interoperability.</p>

      </div>
      <div className="snake__environment-container">
        <div className={statclass}>
          {snakeState[0].position
          && `${sortBy(snakeState, o => o.position.x)[snakeState.length - 1].number} IS WINNING THE SPACE RACE`
        }
        </div>
        <div className="snake__environmentstartlineleft">START</div>
        <div className="snake__environmentfinishline">FINISH</div>
        {snakes}
        <div className="snake__environmentstartlineright">START</div>
        <div className="snake__environmentfinishlinebottom">FINISH</div>
      </div>
    </div>
  );
};

class Snake extends React.Component {
  constructor(props) {
    super(props);

    const snakes = [];
    for (let i = 0; i < 16; i += 1) {
      snakes.push(generateRandomPosition());
    }

    this.state = { snakes };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentDidUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { snakes } = this.state;


    snakes.forEach((item) => {
      const { position } = item;
      position.x += 20 * Math.round(Math.random() * 3);
      if (position.x > 1200) {
        position.x = 0;
      }
    });

    return renderSnakes(snakes);
  }
}

export default Snake;
