import React from 'react';
import one from '../../../images/1.png'

const Contact = () => {
    return (
       <div className="row my-5 ">
          <h2 className="mb-5">OUR CONTACTS</h2>
            <div className="col-lg-6 col-md-6 col-sm-12">
           <h6>Phone: +9432657654667</h6>
           <hr />
           <h6>Email: najnin@gmail.com</h6>
           <hr />
           <h6>FB: https://www.facebook.com/nazninnnn</h6>
           <hr />
           <h6>Instagram: https://www.instagram.com/nazninn</h6>
           <hr />
           <h6>Tweeter: https://www.tweeter.com/nazninn</h6>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
             <img src= {one} alt="" /> 
            </div>
       </div>
    );
};

export default Contact;