import React from 'react';
import ThisDay from './components/ThisDay/ThisDay';

import s from './Home.module.scss';

interface Props {

}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay />
    </div>
  )
}

export default Home
