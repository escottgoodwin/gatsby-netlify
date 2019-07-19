/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../scss/style.scss"

import hero_2 from "../images/hero_2.jpg"

const name ='Sand Analytics'

const description = 'Agency description'

const HeroOverlay = () => {

  return (
      <>
      <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${hero_2})`}} data-aos="fade">
        <div className="container">
          <div className="row align-items-center justify-content-center">

            <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">

              <div className="row mb-4">
                <div className="col-md-6">
                  <h1>{name}</h1>
                  <p className="mb-5">{description}</p>
                  <div>
                    <a href="#" className="btn btn-primary mr-2 mb-2">Get Started</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </>
  )
}



export default HeroOverlay
