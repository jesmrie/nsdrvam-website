import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import tw from 'twin.macro'

import Layout from '../components/layout'

import heroImg from '../../static/img/heroImage.jpg'
import aboutImg from '../../static/img/about.jpg'
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero>
          <HeroContent>
            <div className="flex justify-center">
              <Subheader>Nuestra Señora de Regla</Subheader>
            </div>
            <div className="flex justify-center">
              <Header>Visual Arts Ministry</Header>
            </div>
          </HeroContent>
        </Hero>
        <About>
          <div class="flex mb-4">
            <div class="w-full lg:w-2/5">
              <img
                src={aboutImg}
                alt="Virgin de la Regla Parish, Lapu-lapu City"
              />
            </div>
            <div class="w-full lg:w-3/5 container mx-auto">
              <AboutHeader>About NSDR-VAM</AboutHeader>
              <AboutText>
                The <strong>Nuestra Senora De Regla- Visual Arts Ministry (NSDR-VAM)</strong>
                &nbsp;is a group of
                individuals mainly aimed to support the church, particularly,
                Nuestra Senora De Regla Parish and the different ministries and
                organizations that are connected to the church by providing any
                visual arts needs to these ministries or organizations.
                <br/><br/>The ministry also aims to pool individuals who are willing to give
                the visual arts a try to organize a connection of talents and
                skills as well as hone the same to be able to teach those who
                are willing to learn and inspire others to want to learn more.
                These can be done through various programs organized by the
                Visual Arts Ministry.
                <br/><br/>We hope to give a new perspective on the
                visual arts as well as serving the church with visual arts and a
                new way of paying it forward.
              </AboutText>
            </div>
          </div>
        </About>
      </Layout>
    )
  }
}

export default RootIndex

const Hero = styled.div`
  background: url(${heroImg});
  ${tw`
    bg-center bg-no-repeat bg-cover
  `}
  min-height: 100vh;
`

const About = styled.div``

const HeroContent = styled.div`
  padding-top: 225px;
`;

const Header = styled.h1`
  color: white;
  ${tw`
    font-black
    text-6xl
    tracking-widest
    uppercase
  `}
`;

const Subheader = styled.h4`
  color: white;
  letter-spacing: 0.2em;
  ${tw`
    text-2xl
    uppercase
    font-semibold
  `}
`;

const AboutHeader = styled.h2`
  color: #1E366C;
  ${tw`
    font-black
    text-5xl
    uppercase
    px-32
    pt-6
  `}
`;

const AboutText = styled.p`
  ${tw`
    font-medium
    text-lg
    px-32
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
