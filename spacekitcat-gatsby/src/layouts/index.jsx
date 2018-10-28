import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import TextGridBox from '../components/text-grid-box';
import '../../sass/main.scss';

const Layout = props => (
  <div>
    <Helmet
      title={props.data.site.siteMetadata.title}
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
      <Header siteTitle={props.data.site.siteMetadata.title} />
      <div className="projects__layout">
        <TextGridBox url="https://github.com/spacekitcat" revealedByDefault text="GITHUB" className="box0" />
        <TextGridBox key="hackertextjs" text="HACKERTEXT.JS" url="/hackertextjs/" revealedByDefault className="box3" />
        <TextGridBox key="Unicode table" text="UNICODE" url="/unicode-table/" revealedByDefault className="box4" />
        <TextGridBox key="spacerace" text="SPACE RACE" url="/spacerace/" revealedByDefault className="box5" />
      </div>
      {props.children()}
    </div>
  </div>
);

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
