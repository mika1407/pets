import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const About = () => {
   const [date, onChange] = useState(new Date());

  return (
    <div>
      <br/>
     <h1 style={{ marginLeft: '1.5rem' }}>These pages are About pets.</h1>  <br/>
      <p style={{ marginLeft: '1.5rem' }}>Dod image urls you can find here: <a target="_blank" href="https://dog.ceo/dog-api/">Dod.ceo</a></p>
      <p style={{ marginLeft: '1.5rem' }}>YouTube video of these websites: <a target="_blank" href="https://www.youtube.com/watch?v=-sld1zTz3uY">Link to YouTube</a></p>
      <br/>

      <div style={{ marginLeft: '1.5rem' }}>
        <Calendar showWeekNumbers
          onChange={onChange}
          value={date}
        />
      </div>

    </div>
  )
}

export default About
