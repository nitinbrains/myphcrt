import React from 'react'
import './footer.css'
import mail_icon from './mail_icon.png'
import phone_icon1 from './phone_icon1.png'
import fb from './fb.png'
import google_plus from './google_plus.png'
import linkedlogokey from './linkedlogokey.png'
import twitter from './twitter.png'

const Footer =()=>{
    return(
    <div>
        
    <div className="footer_container"> 
   
    <div className="footer_categories">
        <div class="category_title">
           CONTACT US
        </div>
         <div>
             <span><img className="icon_img" src={phone_icon1} alt="contact"/></span>
             <span>+91-7836976228</span>
         </div>
         <div>
             <span><img className="icon_img" src={mail_icon} alt="mail"/></span>
             <span>nitinbrains@gmail.com</span>
         </div>             
    </div>
    <div className="footer_categories">
    <div class="category_title">
           FOLLOW US ON
        </div>
        <div>
            <a href="#"><img className="social_image" src={fb} alt="fb_logo"/></a>
            <a href="#"><img className="social_image" src={google_plus} alt="google_plus_logo"/></a>
            <a href="#"><img className="social_image" src={linkedlogokey} alt="linkedin_logo"/></a>
            <a href="#"><img className="social_image" src={twitter} alt="twitter_logo"/></a>
        </div>
    </div>
    </div>
    <div className="copyright"><strong>About:</strong>
    <p>DiscountSutra is an initiative to help people finding best shopping deals and hidden discount methods which are not shown on online shopping websites. And we are providing heavy discounts on your every visit to your favourite restaurant or lounge.
<br/>This is how we deliver to our promise:<br/>
-	We get to know you about special discounts and offers. <br/>
-   We Provide best deals filteres from all the ecommerce websites. <br/>
</p>
    </div>
    <div className="copyright">
            copyright &copy; 2018 DiscountSutra 
        </div>  
    </div>
    )
}

    
export default Footer;