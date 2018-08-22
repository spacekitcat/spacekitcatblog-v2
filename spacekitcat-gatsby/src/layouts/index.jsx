import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import shuffle from 'lodash/shuffle';

import Header from '../components/header';
import TextGridBox from '../components/text-grid-box';
import '../../sass/main.scss';

const generateBoxValues = (boxCount, denomination) => {
  const values = [];
  for (let i = 0; i < boxCount; i += 1) {
    values[i] = i * denomination;
  }

  return shuffle(values);
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    const boxes = generateBoxValues(12, 1).map(item => (<TextGridBox key={item} text={item.toString()} />));
    this.state = { boxes };
  }

  componentDidMount() {
    window.hacker_text_config = {
      targets: [
        {
          htmlId: 'hackertext',
          text: 'Feelin',
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
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A personal blog and creative space' },
            {
              name: 'keywords',
              content: 'portfolio, spacekitcat, projects, creative, blog',
            },
          ]}
        >
          <script src="jquery.min.js" />
          <script src="hackertext.js" />
        </Helmet>
        <div className="hackertext-isolation-container">
          <div className="hackertext-background">
            <div className="hackertext" id="hackertext" />
          </div>
        </div>
        <div className="gel-wrap">
          <Header siteTitle={this.props.data.site.siteMetadata.title} />
          <div className="questionboxwallrack">
            <TextGridBox url="https://github.com/spacekitcat" text="GitHub" />
            <TextGridBox url="https://github.com/spacekitcat" text="GitHub" />
            <div className="questionbox">
              <div className="questionboxcontent">
                <iframe width="100%" height="100%" title="Arcade unit 2701" src="https://www.youtube.com/embed/WiWiTXq4yYY?autoplay=1&mute=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
              </div>
            </div>
            <TextGridBox url="https://github.com/spacekitcat" text="GitHub" />
            {this.state.boxes}
          </div>
        </div>
      </div>
    );
  }
}

Layout.defaultProps = {
  children: () => ({}),
  data: {},
};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.any.isRequired,
  }),
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
