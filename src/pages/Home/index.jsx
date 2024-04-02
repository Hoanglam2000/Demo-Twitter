
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import HomeContainer from '../../components/HomeContainer';
import { getCollection } from '../../services/getData';
import { useState } from 'react';

import styles from './Home.module.css';

function Home() {
    return (
        <div className={`${styles.home}`}>
            <HomeContainer />
        </div>
    );
}

export default Home;
