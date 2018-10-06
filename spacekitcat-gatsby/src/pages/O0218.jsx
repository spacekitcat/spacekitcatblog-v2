import React from 'react';
import PopUp from '../components/popup';

class A2618 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, gitHubApiUrl: 'https://api.github.com/users/spacekitcat/repos' };

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  componentDidMount() {
    const { gitHubApiUrl } = this.state;

    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'O0218_',
          renderer: {
            strategy: 'CoSinePhaseFrameRenderStrategy',
          },
          framerate: 3,
          rows: 140,
        },
      ],
    };


    let charsReceived = '';
    fetch(gitHubApiUrl).then((response) => {
      const reader = response.body.getReader();

      reader.read().then(function processText({ done, value }) {
        if (done) {
          return;
        }

        charsReceived = value.length;
        const chunk = value;
        const listItem = document.createElement('li');
        listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;

        console.log(`Received ${charsReceived} characters so far. Current chunk = ${chunk}`);

        return reader.read().then(processText);
      });

      // ().then((response) => {
      //  console.log(response.read());
      // });
      // response.forEach((item) => {
      //   console.log(item);
      // });
    }).catch((err) => {
      console.log(err);
    });
  }

  toggleHandler() {
    this.setState(state => ({ visible: !state.visible }));
  }

  clickHandler() {
    this.setState(state => ({ visible: !state.visible }));
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        <h1>PROJECT.O0218</h1>
        <PopUp visibe={visible} />
      </div>
    );
  }
}

export default A2618;
