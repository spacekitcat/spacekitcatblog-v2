import React from 'react';

class IndexPage extends React.Component {
  componentDidMount() {
    window.hacker_text_config = {
      targets: [{
        htmlId: 'hackertext',
        text: 'PROJECTS_',
        renderer: {
          strategy: 'SinePhaseFrameRenderStrategy',
        },
        framerate: 5,
        rows: 100,
      }],
    };
  }

  render() {
    return (
      <div className="gel-layout__item list">
        <div className="item gel-layout">
          <p className="item-label">
FINE.FINE.FINE.
          </p>
        </div>

        <div className="gel-layout item">
          <p className="item-label">
GOOD.GOOD.GOOD.
          </p>

        </div>

        <div className="gel-layout item">
          <p className="item-label">
OK.OK.OK.OK.OK.
          </p>

        </div>

        <div className="gel-layout item">
          <p className="item-label">
NO BAD. NOT BAD.
          </p>

        </div>
      </div>
    );
  }
}

export default IndexPage;
