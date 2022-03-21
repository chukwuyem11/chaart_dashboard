import Nav from './nav'
import Body from './body'

import { css, jsx } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
const query = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));


const HomePage = () => {
  return (
    <div >
       
  
<Body />

    </div>
  )
}


export default HomePage