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
                <img src={require("./moovie_logo.png")}/>
                <div id = "yup">
                    <ul>
                        <li id="first.li.up">Press Room</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                    </ul>
                    <ul>
                        <li id="first.li.up">Contact us</li>
                        <li>Register</li>
                        <li>News</li>
                    </ul>
                    <ul>
                        <li id="first.li.up">Condition of Use</li>
                        <li>Privacy Policy</li>
                        <li>Interest-Based Ads</li>
                    </ul>
                 </div>
            </div>

            <div id = "footerDown">
                <div id = "bar"> </div>
                <p>Copyright © 1990-2019 Moovie.com, Inc.</p>
                <ul>
                    <li id = "liText">Follow us on social media</li>
                    <li id="liSvg">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F5044C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5799 25.2342V15.9993H11.7031V12.9382H13.5799V11.087C13.5799 8.5901 14.3264 6.78955 17.0604 6.78955H20.3128V9.84439H18.0226C16.8757 9.84439 16.6144 10.6065 16.6144 11.4046V12.9382H20.1437L19.662 15.9993H16.6144V25.2342H13.5799Z" fill="white"/>
                        </svg>
                    </li>
                    <li id="liSvg">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F5044C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8944 9.833C21.2496 9.09993 20.3309 8.63287 19.3141 8.61595C17.3618 8.58346 15.7789 10.2331 15.7789 12.3004C15.7789 12.5938 15.8102 12.8799 15.8705 13.1546C12.9325 12.964 10.3276 11.4341 8.58413 9.12794C8.27983 9.68055 8.10546 10.3264 8.10546 11.0183C8.10546 12.3281 8.72956 13.4905 9.67811 14.1768C9.09864 14.1513 8.55354 13.9758 8.07694 13.6881C8.0766 13.7038 8.0766 13.7195 8.0766 13.7355C8.0766 15.5647 9.29516 17.0991 10.9123 17.4566C10.6157 17.5406 10.3034 17.5846 9.98103 17.5825C9.75324 17.581 9.53173 17.5557 9.31592 17.5104C9.76573 19.0104 11.0712 20.105 12.6182 20.1412C11.4083 21.1455 9.8841 21.7437 8.2278 21.7402C7.94245 21.7397 7.66108 21.7212 7.38452 21.6857C8.94899 22.7592 10.8072 23.3842 12.8035 23.3847C19.3058 23.3864 22.8616 17.7278 22.8616 12.8197C22.8616 12.6587 22.8581 12.4985 22.8514 12.3391C23.5421 11.8244 24.1414 11.1792 24.6153 10.4423C23.9814 10.7281 23.3 10.9179 22.585 10.9975C23.3148 10.5483 23.8754 9.82948 24.1393 8.96743C23.4562 9.38169 22.6997 9.67877 21.8944 9.833Z" fill="white"/>
                        </svg>
                    </li>
                    <li id="liSvg">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F5044C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2488 15.3846H9.7509C7.76402 15.3846 6.15381 16.8507 6.15381 18.8252V22.2703C6.15381 24.2446 7.76402 25.8461 9.7509 25.8461H22.2488C24.2352 25.8461 25.8461 24.2449 25.8461 22.2703V18.8525C25.8461 16.8779 24.2352 15.3846 22.2488 15.3846ZM12.2018 18.1866H10.9967V23.7557H9.83176V18.1866H8.62692V17.2388H12.2018V18.1866ZM15.2886 23.9935H14.2552V23.4667C14.0633 23.6617 13.8659 23.8102 13.6586 23.9107C13.4523 24.0153 13.2525 24.0647 13.0583 24.0647C12.8183 24.0647 12.6404 23.9935 12.5178 23.8495C12.3981 23.7056 12.3364 23.4929 12.3364 23.2051V19.1854H13.3697V22.8741C13.3697 22.9877 13.3922 23.0699 13.4338 23.12C13.4785 23.1726 13.5493 23.1965 13.6463 23.1965C13.7208 23.1965 13.818 23.1633 13.9341 23.0959C14.0515 23.0279 14.1575 22.9419 14.2548 22.8375V19.1854H15.2881V23.9935H15.2886ZM19.6186 22.8688C19.6186 23.2083 19.5378 23.4692 19.3756 23.6515C19.2146 23.8334 18.9792 24.0552 18.6734 24.0552C18.4699 24.0552 17.9997 24.0212 17.8424 23.9507C17.6844 23.8812 17.5354 23.7736 17.4006 23.6251V23.9933H16.3556V17.3445H17.4006V19.5754C17.5405 19.4301 17.6883 19.3179 17.8431 19.242C18.0011 19.1647 18.4497 19.1275 18.6103 19.1275C18.9377 19.1275 19.1874 19.0967 19.3596 19.3018C19.5327 19.507 19.6183 19.8072 19.6183 20.2007V22.8688H19.6186ZM23.3772 21.6259H21.4003V22.5318C21.4003 22.7847 21.4333 22.9603 21.501 23.0585C21.5702 23.1569 21.6867 23.2047 21.8514 23.2047C22.0231 23.2047 22.1427 23.1631 22.2111 23.08C22.2782 22.9964 22.3139 22.8147 22.3139 22.5316V22.3127H23.3774V22.5595C23.3774 23.0522 23.2489 23.4236 22.9876 23.6741C22.73 23.9217 22.3432 24.0455 21.8278 24.0455C21.3646 24.0455 20.9995 23.9141 20.7341 23.6494C20.4695 23.3872 20.3347 23.0228 20.3347 22.5595V20.3998C20.3347 19.9842 20.4814 19.6424 20.7744 19.3802C21.0671 19.118 21.4421 18.9873 21.9057 18.9873C22.3791 18.9873 22.7428 19.1087 22.9969 19.3517C23.2507 19.5953 23.3777 19.9443 23.3777 20.4V21.6259H23.3772ZM21.8612 19.8281C21.6959 19.8281 21.5792 19.8714 21.507 19.9612C21.4344 20.0453 21.4003 20.1902 21.4003 20.3919V20.8778H22.3139V20.3919C22.3139 20.1902 22.277 20.0453 22.2048 19.9612C22.1348 19.8714 22.0183 19.8281 21.8612 19.8281ZM17.8331 19.891C17.7595 19.891 17.6858 19.9056 17.6138 19.9375C17.5419 19.9684 17.4711 20.0189 17.4008 20.0846V23.0798C17.4839 23.1572 17.5662 23.2167 17.6458 23.251C17.7257 23.2841 17.8076 23.3027 17.8951 23.3027C18.0222 23.3027 18.4047 23.2687 18.4643 23.1998C18.523 23.1318 18.5537 23.0228 18.5537 22.869V20.3854C18.5537 20.2223 18.5184 20.0998 18.445 20.0157C18.3699 19.9329 17.9721 19.891 17.8331 19.891ZM19.131 14.1903C19.3415 14.1903 19.5582 14.1297 19.7815 14.013C20.0065 13.8947 20.2219 13.7216 20.4268 13.4957V14.1091H21.5492V8.56727H20.4268V12.7743C20.323 12.8948 20.2071 12.9936 20.0819 13.0723C19.9553 13.1501 19.8506 13.1886 19.7683 13.1886C19.6632 13.1886 19.5862 13.1594 19.5406 13.0997C19.4936 13.0413 19.4679 12.9467 19.4679 12.8165V8.56727H18.348V13.1992C18.348 13.5295 18.4142 13.7764 18.5443 13.94C18.6763 14.106 18.8702 14.1903 19.131 14.1903ZM15.8301 14.2495C16.3396 14.2495 16.7395 14.1142 17.0314 13.8447C17.3209 13.5735 17.466 13.2036 17.466 12.7292V9.86563C17.466 9.44404 17.3175 9.09652 17.0229 8.8288C16.7252 8.56174 16.3452 8.42733 15.8809 8.42733C15.3713 8.42733 14.9647 8.55444 14.6632 8.80868C14.3617 9.06291 14.2109 9.40359 14.2109 9.83446V12.7073C14.2109 13.1786 14.3581 13.5516 14.652 13.831C14.9464 14.1094 15.3391 14.2495 15.8301 14.2495ZM15.3648 9.79201C15.3648 9.67131 15.4078 9.57425 15.4923 9.4982C15.5789 9.4237 15.6896 9.38723 15.8263 9.38723C15.975 9.38723 16.0949 9.4237 16.1864 9.4982C16.2774 9.57425 16.3231 9.67131 16.3231 9.79201V12.8114C16.3231 12.9595 16.2781 13.0769 16.1882 13.1621C16.0985 13.2472 15.9782 13.2889 15.8261 13.2889C15.678 13.2889 15.5635 13.2485 15.4841 13.1636C15.4047 13.0803 15.3646 12.9637 15.3646 12.8114V9.79201H15.3648ZM11.3873 14.1094H12.6499V10.5505L14.1194 6.15381H12.8362L12.0547 9.15731H11.9753L11.1553 6.15381H9.88332L11.3871 10.6905V14.1094H11.3873Z" fill="white"/>
                        </svg>
                    </li>
                </ul>
            </div>

            </div>
        );  
    }

}
export default Footer