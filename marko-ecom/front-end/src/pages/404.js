import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import { Button, Result } from "antd"
import { StaticImage } from "gatsby-plugin-image"
import pic from './../assets/images/404.svg'

const Error = () => {
  return (
    <>
      <div className="error-page">
        <div className="error-page__wrapper">
          <Seo title={'Страница отсутствует'}/>

          <StaticImage src={'./../assets/images/404.svg'} alt={'Ошибка 404. Страница не найдена'}
          className="error-page__image" placeholder={'tracedSVG'}/>
          <h1>Страница не найдена</h1>
          <h3>Извините, страница не найдена</h3>
          <Link to={'/'}><Button type="primary">На главную</Button></Link>

        </div>
      </div>
    </>
  )
}

export default Error
