import React from "react";
import lottie from "react-lottie";
import manutencaoJson from '../anime.json'


export const manutencao = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: manutencaoJson
  }
  return <lottie options = {defaultOptions} width ={450} height ={450} />;
}