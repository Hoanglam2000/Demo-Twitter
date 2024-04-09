import { Link } from 'react-router-dom';
import { CgMoreAlt } from 'react-icons/cg';
import styles from './Footer.module.css';

function Footer(params) {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.footer_list}>
                <li className={styles.footer_item}>
                    <Link>Terms of Service</Link>
                </li>
                <li className={styles.footer_item}>
                    <Link>Privacy Policy</Link>
                </li>
                <li className={styles.footer_item}>
                    <Link>Cookie Policy</Link>
                </li>
                <li className={styles.footer_item}>
                    <Link>Accessibility</Link>
                </li>
                <li className={styles.footer_item}>
                    <Link>Ads info</Link>
                </li>
                <li className={styles.footer_item}>
                    <Link>
                        More <CgMoreAlt />
                    </Link>
                </li>
            </ul>
            <p className={styles.author}>© 2024 Twitter, Inc.</p>
        </div>
    );
}

export default Footer;
