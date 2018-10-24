import React from 'react';

class UnicodeTable extends React.Component {
  componentDidMount() {
    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'Unicode',
          renderer: {
            strategy: 'SinePhaseFrameRenderStrategy',
          },
          framerate: 1,
          rows: 42,
        },
      ],
    };
  }

  render() {
    return (
      <div className="snake__container">
        <h1>SNAKE -SNAKE +SNAKE +SNAKE</h1>
        <h1>SNAKE -SNAKE +SNAKE +SNAKE</h1>
        <h1>SNAKE--SNAKE +SNAKE++SNAKE</h1>
      </div>
    );
  }
}

export default UnicodeTable;
