import React from 'react'
import Lottie from 'react-lottie';
import animationData from './anime.json'



 
export default class animationData extends React.Component {
 
  render() {
    const animation = {
      display: 'block', 
      margin: '10px auto'
    };
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
    />
    </div>
  }
}