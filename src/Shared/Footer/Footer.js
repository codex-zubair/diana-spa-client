import React from 'react';

const Footer = () => {
    return (
        <footer>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Spa tonight</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Night Package</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Diana SPA</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Copyright 2022 by Diana SPA</span>
                        </label>
                       
                    </div>
                </div>
            </footer>

        </footer>
    );
};

export default Footer;