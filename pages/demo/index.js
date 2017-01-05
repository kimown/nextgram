/**
 * Created by google on 17-1-5.
 */
import React from 'react'
import Head from 'next/head'
import Demo from './../../components/demo'

export default () => (
  <div>
    <Head>
      <title>This is demo</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <h1>This is demo content</h1>
    <Demo />
  </div>
)
