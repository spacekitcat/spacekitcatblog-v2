import React from 'react';

const getPositionClass = position => `snake__sprite snake__sprite--x${position.x}y${position.y}`;

const generateRandomPosition = () => {
  const x = Math.round(Math.random() * 100);
  const y = Math.round(Math.random() * 100);
  return { x, y };
};

const renderSnakes = (snakeState) => {
  let i = 0;
  const snakes = snakeState.map(state => (
    <div className="snake__container" key={i}>
      <div className={`${getPositionClass(state.position)} snake__sprite--number${i++}`} key={i++} />
    </div>
  ));
  return (<div className="snake__environment-container">{snakes}</div>);
};

class Snake extends React.Component {
  constructor(props) {
    super(props);

    const snakes = [];
    for (let i = 0; i < 30; ++i) {
      snakes.push({
        position: generateRandomPosition(),
      });
    }

    console.log(snakes);

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
      position.x += 2;
      if (position.x > 100 - 1) {
        position.x = 0;
      }
    });

    return renderSnakes(snakes);
  }
}

export default Snake;
