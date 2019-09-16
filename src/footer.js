import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <footer className="footer mt-auto py-3 bg-dark">
    <div className="container">
      <a href="https://www.linkedin.com/in/tim-clark-5021bb18b"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="mr-med-5 mr-3"/></a>
      <a href="https://github.com/codenobacon4u"><FontAwesomeIcon icon={['fab', 'github']} size="lg" className="mr-med-5 mr-3"/></a>
      <a href="mailto:kralcmit@gmail.com"><FontAwesomeIcon icon={"envelope"} size="lg" className="mr-med-5 mr-3" href="mailto:kralcmit@gmail.com"/></a>
    </div>
  </footer>
);

export default Footer;