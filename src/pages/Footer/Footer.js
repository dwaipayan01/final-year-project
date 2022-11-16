import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: "#00209A" }} class=" p-10 bg-neutral text-neutral-content">
                <div className='footer'>
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-3'>
                        <p className='text-white'>Copyright © 2022 - All right reserved by tourist booking system</p>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;