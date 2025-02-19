import React from 'react';
import classes from './Team.module.scss';
import member1 from '@/assets/img/about-team/member1.webp';
import member2 from '@/assets/img/about-team/member2.webp';
import member3 from '@/assets/img/about-team/member3.webp';
import SocialIcons from '@/components/UI/SocialIcons/SocialIcons';

const Team = () => {
  return (
    <section className={classes.team}>
      <h1>Meet Our Team</h1>
      <ul className={classes.membersList}>
        <li className={classes.member}>
          <img src={member1} alt="A member of our team" />
          <h3>Anna Winston</h3>
          <p>Marketing</p>
          <SocialIcons className={classes.icons} />
        </li>
        <li className={classes.member}>
          <img src={member2} alt="A member of our team" />
          <h3>Juliet Wolfer</h3>
          <p>Back-end dev</p>
          <SocialIcons className={classes.icons} />
        </li>
        <li className={classes.member}>
          <img src={member3} alt="A member of our team" />
          <h3>Mark Gutenberg</h3>
          <p>Front-end dev</p>
          <SocialIcons className={classes.icons} />
        </li>
      </ul>
    </section>
  );
};

export default Team;
