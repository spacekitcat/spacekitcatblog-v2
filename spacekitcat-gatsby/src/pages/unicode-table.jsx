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
        <div className="unicode-table__header"><h1>Character conversion table</h1></div>
        <div className="unicode-table__detail gel-layout-item gel-2/12"><h2>ENCODING</h2></div>
        <div className="unicode-table__detail gel-layout-item gel-10/12"><h2>UTF-8</h2></div>
        <div className="unicode-table__detail gel-layout-item gel-2/12"><h2>RANGES</h2></div>
        <div className="unicode-table__detail unicode-table__detail--range gel-layout-item gel-1/12"><h2>33-127</h2></div>
        <div className="unicode-table__detail unicode-table__detail--range-last-child gel-layout-item gel-2/12"><h2>161-1025</h2></div>
        <div className="unicode-table__conversion-table-container">
          {unicodeTable.map((item, idx) => (
            <div className="unicode-table__conversion-item gel-layout-item gel-1/12" key={item.UnicodeCode} tabIndex="0">
              <p className="unicode-table__Unicode-string">{!item.UnicodeRepresentation ? '??' : item.UnicodeRepresentation}</p>
              <p className="unicode-table__Unicode-code">{item.UnicodeCode}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UnicodeTable;
