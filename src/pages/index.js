import React from 'react'
import styled from "@emotion/styled"
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import tw from "twin.macro"

import Layout from '../components/layout'
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h4>Nuestra Señora de Regla</h4>
          <Header>Visual Arts Ministry</Header>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

const Header = styled.h1`
  color: red;
  ${tw`
    text-xl font-mono
  `}
`;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
