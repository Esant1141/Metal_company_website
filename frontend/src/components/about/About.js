import React from 'react'
import Layout from '../../Layout'
import { TabTitle } from '../../Title'
import AboutTop from './about-child-1/AboutTop'

const About = () => {
  TabTitle('About us | God Gift International')
  return (
    <Layout>
     <AboutTop />
    </Layout>
  )
}

export default About