import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import styles from './defaultLayout.module.css';

function DefaultLayout() {
    return (
        <div className={styles.container}>
            <SideBar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;
