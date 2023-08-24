import React from 'react'
import './LoadMore.css'

export default function LoadMore({ isMore }) {
  const loaderStyle = isMore ? "load-more" : "spacer"; //затычка пока что 

  return (
    <section className={loaderStyle}>
      {isMore && <button className="load-more__button">Еще</button>}
    </section>
  );
}
