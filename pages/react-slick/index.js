/**
 * Created by google on 17-1-5.
 */
import React from 'react'
import Head from 'next/head'
import meta from '../meta-info.json'
import SimpleSlider from './../../components/react-slick/'

export default () => (
  <div>
    <Head>
      <title>This page h</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <h1>This react-slick233</h1>
    <SimpleSlider />
  </div>
)
