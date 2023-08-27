import React from 'react';
import Title from '../components/title';

import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LazyLoadPost({title,img}) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        {!title ?
            (<Title classes={'subtitle'} text='Post Title'/>)
            :
            (<Title classes={'subtitle'} text={title}/>)
        }
      </div>
      <div className='card-body d-flex' style={{gap:10}}>
        <LazyLoadImage src={img} height={'fit-content'} width={500} effect='blur'/>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veritatis possimus distinctio ipsam omnis, recusandae eveniet nulla 
            illum soluta sunt hic? Debitis repudiandae animi saepe aut maiores 
            harum enim soluta illo.
        </p>
      </div>
    </div>
  );
}
