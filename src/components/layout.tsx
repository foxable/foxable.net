import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../../node_modules/bulma/css/bulma.css'
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import './layout.scss'

interface LayoutComponentProps
{
  children: React.ReactNode;
}

export default class Layout extends React.PureComponent<LayoutComponentProps>
{
  public constructor(props: LayoutComponentProps, context: any)
  {
    super(props, context);
  }
  
  public render()
  {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sebastian Fuchs, Software Entwickler aus Bonn mit einer Leidenschaft fürs Web' },
                { name: 'keywords', content: 'software development, web, frontend, ux' },
              ]}
            >
              <html lang="de"/>
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            {this.props.children}
            <Footer />
          </>
        )}
      />
    );
  }
}