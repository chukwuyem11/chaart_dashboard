import Head from 'next/head'

import HomePage from "../components/home"

import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

     <div >
       <HomePage />
     </div>
    </div>
  )
}
