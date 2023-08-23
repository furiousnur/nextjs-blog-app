import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'; // Import your own CSS file for customization

export default function Header() {
    return (
        <header className={`${styles.header} bg-light py-3`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link href="/" passHref>
                        <span className={`navbar-brand ${styles.brand}`}>My Blog</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav ms-auto ${styles.menu}`}>
                            <li className="nav-item">
                                <Link href="/" passHref>
                                    <span className={`nav-link ${styles.link}`}>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog" passHref>
                                    <span className={`nav-link ${styles.link}`}>Blog</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" passHref>
                                    <span className={`nav-link ${styles.link}`}>About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" passHref>
                                    <span className={`nav-link ${styles.link}`}>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
