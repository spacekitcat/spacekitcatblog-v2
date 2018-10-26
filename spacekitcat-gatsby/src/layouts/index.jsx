import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import shuffle from 'lodash/shuffle';

import Header from '../components/header';
import TextGridBox from '../components/text-grid-box';
import '../../sass/main.scss';

const generateBoxValues = (from, to, denomination) => {
  const values = [];
  for (let i = from; i < to; i += 1) {
    values.push(i * denomination);
  }

  return shuffle(values);
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    const boxes = generateBoxValues(5, 20, 1).map(item => (<TextGridBox key={item} text={item.toString()} className={`box${item.toString()}`} />));
    this.state = { boxes };
  }

  componentDidMount() {

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
          <script src="/jquery.min.js" />
          <script src="/hackertext.js" />
        </Helmet>
        <div className="hackertext-isolation-container">
          <div className="hackertext-background">
            <div className="hackertext" id="hackertext" />
          </div>
        </div>
        <div className="gel-wrap">
          <Header siteTitle={this.props.data.site.siteMetadata.title} />
          <div className="projects__layout">
            <TextGridBox url="https://github.com/spacekitcat" revealedByDefault text="GitHub" className="box0" />
            <TextGridBox key="A2618" text="A2618" url="/A2618/" revealedByDefault className="box2" />
            <TextGridBox key="A2718" text="A2718" url="/A2719/" revealedByDefault className="box3" />
            <TextGridBox key="Unicode table" text="Unicode table" url="/unicode-table/" revealedByDefault className="box4" />
            <TextGridBox key="snake" text="gambling" url="/snake/" revealedByDefault className="box5" />
          </div>
          {this.props.children()}
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
