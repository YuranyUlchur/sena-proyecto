import React from 'react';
import {  FaFacebook, FaInstagramSquare} from 'react-icons/fa';
import { BiLogoTiktok } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";
import styles from './footer.module.css';


const Footer = () => {
    return (
        <>
            <footer className={styles.footer} id='contact'>
                <div className={styles.dividerCustom}>
                    <div className={styles.dividerCustomLine}></div>
                    <div className={styles.dividerCustomIcon}>
                        <PiHamburger />
                    </div>
                    <div className={styles.dividerCustomLine}></div>
                </div>
                <div className={styles.rowfooter}>
                    <div>
                        <h4 className={styles.titlelocation}>Ubicación</h4>
                        <p className={styles.plocation}>Cali - Colombia</p>
                    </div>

                    <div>
                        <h4 className={styles.titlecontact}>Contacto</h4>
                        <div className={styles.iconscontact}>
                            <a className={styles.btnSocial} href="https://www.tiktok.com/"><BiLogoTiktok /></a>
                            <a className={styles.btnSocial} href="https://www.facebook.com/"><FaFacebook /></a>
                            <a className={styles.btnSocial} href="https://www.instagram.com/"><FaInstagramSquare /></a>
                        </div>

                    </div>
                </div>
            </footer>
            <div className={styles.footerBottom}>
                <div>
                    <small>&copy; 2025 Copy Rigth</small>
                </div>
            </div>
        </>
    );
};
export { Footer };