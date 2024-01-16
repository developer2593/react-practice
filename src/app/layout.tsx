import type { Metadata } from 'next'
import React, { Component } from 'react';
import Header from './components/links';
import Head from "next/head";

export const metadata = {
  title: 'MK Next',
  description: 'My first Next.js Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})

{
  return (
    <html lang="en">
       <Head>
        <title>Homepage</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/output.css" rel="stylesheet"></link>
      </Head>
      <body>
     
        <Header></Header>
        {children}
      
      </body>
    </html>
  )
}
