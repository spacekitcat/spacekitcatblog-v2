import React from 'react';

class IndexPage extends React.Component {
  componentDidMount() {
    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'spacekitcat_',
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
      <div><h1>spacekitcat() ........</h1></div>
    );
  }
}

export default IndexPage;
