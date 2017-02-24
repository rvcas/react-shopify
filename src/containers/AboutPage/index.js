import React from 'react';
import Helmet from 'react-helmet';

import './styles.css';

const AboutPage = () => (
  <div className="aboutpage-wrapper">
    <Helmet
      title="About"
      meta={[
        { name: 'Syndicate', content: 'Ancient secrets from the syndicate' },
      ]}
    />
    <h1>
      Keys to Success
    </h1>
    <section>
      <p>
        Lorem Khaled Ipsum is a major key to success. Cloth talk. I’m up to something.
        I’m up to something. Wraith talk. The key is to enjoy life, because they don’t
        want you to enjoy life. I promise you, they don’t want you to jetski, they don’t
        want you to smile. You should never complain, complaining is a weak emotion, you got
        life, we breathing, we blessed. You should never complain, complaining is a weak
        emotion, you got life, we breathing, we blessed. It’s on you how you want to live your life.
        Everyone has a choice. I pick my choice, squeaky clean.
      </p>
      <p>a
        The ladies always say Khaled you smell good, I use no cologne. Cocoa butter
        is the key. I’m giving you cloth talk, cloth. Special cloth alert, cut from a
        special cloth. Egg whites, turkey sausage, wheat toast, water. Of course they
        don’t want us to eat our breakfast, so we are going to enjoy our breakfast.
        Mogul talk. The weather is amazing, walk with me through the pathway of more
        success. Take this journey with me, Lion! I’m giving you cloth talk, cloth.
        Special cloth alert, cut from a special cloth.
      </p>
    </section>
  </div>
)

export default AboutPage;
