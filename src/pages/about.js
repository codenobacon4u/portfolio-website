import React from 'react';

const About = () => (
  <>
  <div className="container">
    <h1>About Me</h1>
    <p>
      Hello! I'm Tim Clark, a Computer Science major currently in my Sophmore 
      year at The University of Maryland. I have developed modern and dynamic 
      websites on both front end and backend development.
    </p>
    <p>
      I have been programming since 2012 when I began learning Java on my own. 
      Since then, I have continued to grow my experience in different 
      technologies through online courses on LinkedInLearning (Previously 
      Lynda.com).
    </p>
    <p>
      Here are a few technologies I have worked with in my projects:
    </p>
    <ul className="">
      <div className="list-group d-flex flex-row flex-wrap">
        <li className="list-group-item w-25">Java</li>
        <li className="list-group-item w-25">C/C++</li>
        <li className="list-group-item w-25">C#</li>
        <li className="list-group-item w-25">Python</li>
        <li className="list-group-item w-25">JavaScript</li>
        <li className="list-group-item w-25">Node.js</li>
        <li className="list-group-item w-25">React</li>
        <li className="list-group-item w-25">HTML & CSS</li>
      </div>
    </ul>
  </div>
  </>
);

export default About;