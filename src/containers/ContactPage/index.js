import React from 'react';
import Helmet from 'react-helmet';

import './styles.css';

const ContactPage = () => (
  <div className="contactpage-wrapper">
    <Helmet
      title="Contact"
      meta={[
        { name: 'Syndicate Contact', content: 'Hit us up!!!' },
      ]}
    />
    <h1>
      Contact
    </h1>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi facilisis interdum turpis elementum sodales. Mauris
        ac arcu ac felis egestas elementum sit amet non tortor. Nam
        cursus ante sapien, ac commodo diam maxe imus ac. Cras sem
        massa, semper in tempus vitae, dignissim ac augue. Duis sit
        amet dictum augue, non aliquet velit. Maecenas pharetra posuere
        nunc, sed ultricies sem consectetur quis. Praesent sit amet nisl
        magna. Donec libero lectus, bibendum eget ornare id, aliquet
        eget tellus. Aliquam erat volutpat. Pellentesque eleifend, odio
        et eleifend suscipit, libero nibh laoreet est, non accumsan
        libero felis vitae justo.
      </p>
    </section>
  </div>
);

export default ContactPage;
