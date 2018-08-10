import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../../sass/main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A personal blog and creative space' },
        { name: 'keywords', content: 'portfolio, spacekitcat, projects, creative, blog' }
      ]}
    >
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossorigin="anonymous">
      </script>
      <script src="cat-client-bootstrap.js" />
      <script src="hackertext.js" />     
    </Helmet>
    <div className="hackertext-container" id="hackertext-container">
      <div className="hackertext" id="hackertext" />
    </div>
    <div className="gel-wrap">
      <div className="gel-layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="gel-layout__item">
          <div className="content">
          {children()}
          </div>
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
