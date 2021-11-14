import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductTypes";
import Description from "../components/Description";
import LineForm from "../components/LineForm";

import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Article from "../components/Article"
import FormSection from "../components/FormSection"
import News from "../components/News"



const IndexPage = () => {


  return (
    <>

      <Seo title="Марко" />
      <Hero/>
      <ProductTypes />
      <News/>
      <Description />
      <LineForm />
      <FormSection/>
      <Article/>
    </>
  )
}

export default IndexPage
