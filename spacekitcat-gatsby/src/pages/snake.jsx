import React from 'react';

class UnicodeTable extends React.Component {
  constructor(props) {
    super(props);


    const unicodeTable = [];
    for (let i = 33; i < 127; ++i) {
      let UnicodeRepresentation = String.fromCodePoint(i);
      if (`${UnicodeRepresentation[0]}` === '') {
        UnicodeRepresentation = undefined;
      }
      unicodeTable.push({ UnicodeCode: i, UnicodeRepresentation });
    }

    for (let i = 161; i < 1025; ++i) {
      let UnicodeRepresentation = String.fromCodePoint(i);
      if (`${UnicodeRepresentation[0]}` === '') {
        UnicodeRepresentation = undefined;
      }
      unicodeTable.push({ UnicodeCode: i, UnicodeRepresentation });
    }

    this.state = {
      unicodeTable,
    };
  }

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
    const { unicodeTable } = this.state;

    return (
      <div className="unicode-table__container gel-layout">
        SNAKE -SNAKE +SNAKE +SNAKE; SNAKE -SNAKE +SNAKE +SNAKE; +SNAKE --SNAKE +SNAKE ++SNAKE
      </div>
    );
  }
}

export default UnicodeTable;
