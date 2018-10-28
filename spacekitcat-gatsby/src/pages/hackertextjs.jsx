import React from 'react';

class A2618 extends React.Component {
  componentDidMount() {
    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'A2618_',
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
      <div><h1>HACKERTEXT.JS</h1></div>
    );
  }
}

export default A2618;
