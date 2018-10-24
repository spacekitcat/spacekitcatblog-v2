import React from 'react';

class A2718 extends React.Component {
  componentDidMount() {
    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'A2718_',
          renderer: {
            strategy: 'SinePhaseFrameRenderStrategy',
          },
          framerate: 3,
          rows: 140,
        },
      ],
    };
  }

  render() {
    return (
      <div><h1>PROJECT.A2718</h1></div>
    );
  }
}

export default A2718;