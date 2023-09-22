import React from 'react';
import { TestimoniesCard } from './TestimoniesCard.jsx';

export function TestimoniesClient() {
  return (
    <div className="section">
      <div className="testimonies-container">
        <div className="container-header">
          <h1>
            What Our Clien are Saying <br />
            About Acuasafe
          </h1>
          <div>circulos deslizadores</div>
        </div>
        <div className="testimonies">
          <TestimoniesCard
            img="10"
            sex="female"
            userName="Yolanda Hernandez"
            positionClient="CEO La burbuja"
          />

          <TestimoniesCard
            img="1"
            sex="male"
            userName="Ariel Plaza"
            positionClient="Web Developer"
          />
        </div>
      </div>
    </div>
  );
}