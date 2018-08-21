import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import TextGridBox from '../components/text-grid-box';
import '../../sass/main.scss';

class Layout extends React.Component {
  constructor(props) {
    super(props);
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
          framerate: 5,
          rows: 100,
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
            <TextGridBox text="MEN CAN" />
            <TextGridBox text="SABOTAGE ME ALL" />
            <TextGridBox text="THEY WANT, IT" />
            <TextGridBox text="WON'T FIX THEIR" />
            <TextGridBox text="MEDIOCRITY." />
            <TextGridBox text="CHOOSE" />
            <TextGridBox text="GOOD." />
            <TextGridBox text="CHOOSE" />
            <TextGridBox text="COOPERATION." />
            <TextGridBox text="CHOOSE" />
            <TextGridBox text="DOING" />
            <TextGridBox text="YOUR BIT FOR" />
            <TextGridBox text="OUR FUTURE." />
            <TextGridBox text="CHOOSE" />
            <TextGridBox text="FOCUSING" />
            <TextGridBox text="YOUR ENERGY ON" />
            <TextGridBox text="SELF" />
            <TextGridBox text="IMPROVEMENT." />
            <TextGridBox text="CHOOSE" />
            <TextGridBox text="EARNING THE" />
            <TextGridBox text="RIGHT TO CALL" />
            <TextGridBox text="YOURSELF AN" />
            <TextGridBox text="ENGINEER." />
            <TextGridBox text="LEARN TO" />
            <TextGridBox text="OVERCOME YOUR" />
            <TextGridBox text="MEDIOCRITY." />
            <TextGridBox text={new Date().getUTCFullYear()} />
            <TextGridBox text="GitHub" />
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
