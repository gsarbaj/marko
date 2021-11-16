import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ProductTypes = () => {

  const data = useStaticQuery(graphql`
  {
    allStrapiCategory {
      nodes {
        url
        title
        icon {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        qty
      }
    }
  }
`)

  const { nodes: categories } = data.allStrapiCategory

  console.log(categories)


  const categoryRender = categories.map((category, index) => {

      console.log('IMAGE: ', getImage(category.icon[0].localFile))

    return (
      <li key={index}>
        <Link to={category.url}>
          <GatsbyImage alt={category.title} image={getImage(category.icon[0].localFile)}/>
          <h3 className="product-heading">{category.title}</h3>
          <p>Более {category.qty} моделей</p>
        </Link>
      </li>
    )
  })

  return(
    <section className="products">

      <div className={'wrapper'}>
        <ul className="productsList">
          {categoryRender}
        </ul>
      </div>
    </section>
  )
}

export default ProductTypes