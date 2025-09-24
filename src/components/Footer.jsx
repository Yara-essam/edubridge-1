import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100034230173785&ref=_ig_profile_ac" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/yara-essam-508807309?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdt4vd69aTUaSjXOxdns4NA%3D%3D" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_yara_al_mahdy_%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExamxFa21VQnRnQ0hrSFVHSQEeucmPpMNUVxG0tOjtjQPtUCummrZttrN_2gDMyc4B_rRyUvOWxJfHdjD7f8k_aem_qalc4CmtdVp2_0k6jvUKJA&h=AT2nEyoLD1h6o3V-IOSbc1YzDu7-rIlZv6xjMUPeF75_u5FHADfcX9lwuGG51a8dMn_2QihkSz5NxnJS-N8h24jV1rt8ljJsMww3Ub8INo1Y_Bbq2c7pvkQlWBKQsGeT6WFV" target="_blank">
                <FaInstagram />
              </a>
            </div>
         </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>IOS &amp; Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 | All right reserved made by{" "} 
          <a href="https://www.linkedin.com/in/yara-essam-508807309?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bdt4vd69aTUaSjXOxdns4NA%3D%3D" target="_blank">
          <strong className="text-primary">Yara Essam</strong></a></p>
        </div>
      </div>
    </footer>
  )
}