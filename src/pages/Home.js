import { useState } from 'react';

// TODO: Steps below
// 1. Create a grid with two columns, the left column should contain the blue
// and red boxes (vertically stacked, blue then red) and right column should contain the green box
// 2. Add functionality as follows:
// 2a. When the blue box is clicked, the green box should have text 'Clicked' shown,
// when blue is clicked again, the green box should hide the text.
// 2b. When the green box is clicked, 'green clicked' should be printed to console.
// 2c: When the red box is clicked, the red box should have text 'Red' shown.

// If extra time:
// Add hover styling to boxes and increase opacity
// Center the two columns in the center of the page

export default function Home() {
  const onBlue = () => {};

  const onRed = () => {};

  const onGreen = () => {};

  return (
    <section className='section'>
      <div className='blue' onClick={onBlue}>
        /*text goes here*/
      </div>
      <div className='red' onClick={onRed}>
        /*text goes here*/
      </div>
      <div className='green' onClick={onGreen}>
        /*text goes here*/
      </div>
    </section>
  );
}
