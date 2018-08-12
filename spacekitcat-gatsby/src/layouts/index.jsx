import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import '../../sass/main.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A personal blog and creative space' },
        { name: 'keywords', content: 'portfolio, spacekitcat, projects, creative, blog' },
      ]}
    >
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossOrigin="anonymous"
      />
      <script src="hackertext.js" />
    </Helmet>
    <div className="hackertext-isolation-container">
      <div className="hackertext-background">
        <div className="hackertext" id="hackertext" />
      </div>
    </div>
    <div className="content-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="column-wrapper">
        <div className="content">
          {
          children()
        }
        </div>
        <div className="content">
          {
          children()
        }
        </div>
        <div className="content">
          {
          children()
        }
        </div>
        <div className="content">
          {
          children()
        }
        </div>
      </div>
    </div>
    <div className="content-wrapper">

      <div className="column-wrapper gel-layout--equal">
        <div className="content">
          <div className="gel-layout__item list ">
            <div className="item gel-layout">
              <p className="item-label">
                Github
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gel-layout__item list">
            <div className="item gel-layout">
              <p className="item-label">
                XXXV
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gel-layout__item list">
            <div className="item gel-layout">
              <p className="item-label">
                {Date.now()}
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gel-layout__item list">
            <div className="item gel-layout">
              <p className="item-label">
100%
              </p>
            </div>
          </div>
        </div>
      </div>
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
    site: PropTypes.object,
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
