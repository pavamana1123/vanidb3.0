import { useEffect, useRef, useState } from 'react';
import './index.css';
import paginate from '../../lib/slides';
import txt from './sample';

function Slides(props) {

  var slides = paginate(txt, "box")

  console.log(slides)

  return (
    <div className='slides'>
      <div className='box'>{slides[1]}</div>
    </div>
  )

}

export default Slides;