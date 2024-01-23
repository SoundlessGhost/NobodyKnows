/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import SingleFooter from '../SingleFooter/SingleFooter';
import './Footer.css'
import logo from '../../assets/icons/email.png'
import logo1 from '../../assets/icons/calendar.png'
import logo2 from '../../assets/icons/phone.png'
import { Infos } from '../../utilities/footerdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCodeBranch, faArrowsSpin } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div>
            <div className='footerContainer'>
                <div>
                    <h1>Worst Feeling</h1>
                    <p>When You Have No One To Tell What Is Going
                        In Your Head And How It's Slowly Killing You. <br />
                        <br />One Day I'm Gonna Fly Away🙂
                        One Day When Heaven Calls My Name😇<br />
                        I Lay Down I Close My Eyes At Night🤕
                        I Can See Morning Light . <br />
                        <img src={logo} alt="" />
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                    </p>
                </div>
                <div className='footerSubContainer'>
                    {
                        Infos.map(Info => <SingleFooter key={Info.id} Info={Info}></SingleFooter>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;