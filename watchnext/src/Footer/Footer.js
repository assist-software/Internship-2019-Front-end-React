import React from 'react';

import '../Footer/footer.css'

class Footer extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div id = "personal">

            <div id = "footerUp"> 
                <p> Moovie </p>
                <div id = "yup">
                    <ul>
                        <li>Press Room</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                    </ul>
                    <ul>
                        <li>Contact us</li>
                        <li>Register</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li>Condition of Use</li>
                        <li>Privacy Policy</li>
                        <li>Interest-Based Ads</li>
                    </ul>
                 </div>
            </div>



            <div id = "footerDown">
                <p>Copyright © 1990-2019 Moovie.com, Inc.</p>
                <ul>
                    <li>Follow us on social media</li>
                    <li>fb</li>
                    <li>insta</li>
                    <li>yt</li>
                </ul>
            </div>

            </div>
        );  
    }

}
export default Footer