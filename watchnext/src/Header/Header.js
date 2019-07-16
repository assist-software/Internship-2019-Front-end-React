import React from 'react';
import '../Header/Header';
import '../Header/header.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            this.props.page!="/login" &&
            <div id="nav">
                <ul>
                    <div className="group">
                        <Link to={'/'}><li className={(this.props.page=='/Home' || this.props.page=='/')?'active h':'h'}>Home</li></Link>
                        <Link to={'/Categories'}><li className={this.props.page=='/Categories'?'active h':'h'}>Categories</li></Link>
                    </div>
                    <li>
                        <svg width="257" height="57" viewBox="0 0 257 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M58.8882 3.85719C57.7852 2.75515 56.437 1.95923 54.9051 1.46944C53.3731 0.979639 51.7186 0.734741 50.0029 0.734741C44.6104 0.734741 40.4435 3.06127 37.5021 7.71433C34.6221 3.1225 30.4552 0.795966 25.0014 0.795966C20.5894 0.795966 16.6063 2.51025 13.0522 5.8776V1.34699H0V38.2654H13.0522V20.0817C13.0522 18.1225 13.2361 16.5307 13.5424 15.3062C13.8488 14.0817 14.2778 13.1021 14.8293 12.4286C15.3808 11.7551 15.9936 11.2654 16.7289 11.0205C17.4642 10.7756 18.1996 10.6531 19.0575 10.6531C20.0379 10.6531 20.8345 10.7756 21.5699 11.0205C22.3052 11.2654 22.8567 11.7551 23.3469 12.4898C23.7759 13.2245 24.1435 14.2041 24.3886 15.4286C24.6338 16.6531 24.7563 18.1837 24.7563 20.0817V38.2654H37.8085V20.0817C37.8085 14.0205 39.892 10.9592 44.0589 10.9592C44.8555 10.9592 45.5296 11.0817 46.2036 11.3266C46.8777 11.5715 47.4905 12 47.9807 12.6735C48.4709 13.347 48.8386 14.2654 49.145 15.4898C49.3901 16.7143 49.5126 18.2449 49.5126 20.0817V38.2654H62.5036V14.3266C62.5036 11.8776 62.1972 9.79597 61.5231 8.08168C60.8491 6.36739 59.9912 4.89801 58.8882 3.85719Z" fill="white"/>
                        <path d="M100.986 27.7347C99.8832 25.2857 99.3317 22.5306 99.3317 19.4694C99.3317 16.7143 99.8832 14.2041 100.986 11.8163C102.028 9.55102 103.437 7.59184 105.276 5.93878C105.153 5.81633 105.031 5.69388 104.847 5.57143C102.825 3.79592 100.496 2.44898 97.7998 1.46939C95.1035 0.489796 92.1622 0 88.9757 0C85.7893 0 82.7867 0.489796 80.0904 1.53061C77.3942 2.5102 75.0656 3.91837 73.0434 5.69388C71.0826 7.46939 69.5506 9.4898 68.4476 11.8776C67.3446 14.2653 66.7931 16.7755 66.7931 19.5306C66.7931 22.5306 67.3446 25.2857 68.4476 27.7959C69.5506 30.2449 71.0826 32.3878 73.0434 34.1633C75.0043 35.9388 77.2716 37.2857 79.9679 38.2653C82.6641 39.2449 85.6054 39.6735 88.7306 39.6735C91.9171 39.6735 94.9197 39.1837 97.6772 38.2653C100.435 37.2857 102.825 35.9388 104.785 34.2245C104.908 34.102 105.031 33.9796 105.153 33.8571C103.437 32.0816 102.028 30.0612 100.986 27.7347ZM96.6968 23.0816C96.2678 24.1224 95.655 25.0408 94.9197 25.7755C94.1844 26.5714 93.2652 27.1224 92.2847 27.551C91.243 27.9796 90.14 28.2245 89.037 28.2245C87.934 28.2245 86.7697 27.9796 85.7893 27.551C84.7475 27.1224 83.8897 26.5102 83.1543 25.7755C82.419 24.9796 81.8062 24.1224 81.3773 23.0816C80.9483 22.0408 80.7032 20.9388 80.7032 19.6531C80.7032 18.4898 80.9483 17.449 81.3773 16.4082C81.8062 15.4286 82.419 14.5102 83.1543 13.7755C83.8897 12.9796 84.8088 12.4286 85.7893 12C86.831 11.5714 87.934 11.3265 89.037 11.3265C90.14 11.3265 91.3043 11.5714 92.2847 12C93.3265 12.4286 94.1844 13.0408 94.9197 13.7755C95.655 14.5714 96.2678 15.4286 96.6968 16.4694C97.1257 17.5102 97.3708 18.6122 97.3708 19.7143C97.3708 20.8776 97.187 22.0408 96.6968 23.0816Z" fill="url(#paint0_linear)"/>
                        <path d="M140.449 5.57143C138.427 3.79592 136.099 2.44898 133.402 1.46939C130.706 0.489796 127.765 0 124.578 0C121.392 0 118.389 0.489796 115.693 1.53061C112.997 2.5102 110.668 3.91837 108.646 5.69388C106.685 7.46939 105.153 9.4898 104.05 11.8776C102.947 14.2653 102.396 16.7755 102.396 19.5306C102.396 22.5306 102.947 25.2857 104.05 27.7959C105.153 30.2449 106.685 32.3878 108.646 34.1633C110.607 35.9388 112.874 37.2857 115.57 38.2653C118.267 39.2449 121.208 39.6735 124.333 39.6735C127.52 39.6735 130.522 39.1837 133.28 38.2653C136.037 37.2857 138.427 35.9388 140.388 34.2245C142.349 32.449 143.881 30.3673 145.045 27.9796C146.148 25.5306 146.761 22.898 146.761 19.9592C146.761 17.0204 146.209 14.3878 145.106 11.9388C143.942 9.42857 142.41 7.34694 140.449 5.57143ZM132.299 23.0816C131.87 24.1224 131.258 25.0408 130.522 25.7755C129.787 26.5714 128.868 27.1224 127.887 27.551C126.846 27.9796 125.743 28.2245 124.64 28.2245C123.537 28.2245 122.372 27.9796 121.392 27.551C120.35 27.1224 119.492 26.5102 118.757 25.7755C118.022 24.9796 117.409 24.1224 116.98 23.0816C116.551 22.0408 116.306 20.9388 116.306 19.6531C116.306 18.4898 116.551 17.449 116.98 16.4082C117.409 15.4286 118.022 14.5102 118.757 13.7755C119.492 12.9796 120.411 12.4286 121.392 12C122.434 11.5714 123.537 11.3265 124.64 11.3265C125.743 11.3265 126.907 11.5714 127.887 12C128.929 12.4286 129.787 13.0408 130.522 13.7755C131.258 14.5714 131.87 15.4286 132.299 16.4694C132.728 17.5102 132.973 18.6122 132.973 19.7143C132.973 20.8776 132.728 22.0408 132.299 23.0816Z" fill="#F5044C"/>
                        <path d="M169.434 20.2653L160.61 1.34692H145.964L164.96 38.2653H173.662L192.903 1.34692H178.319L169.434 20.2653Z" fill="white"/>
                        <path d="M129.848 44.449C129.174 43.7755 128.377 43.2245 127.52 42.8572C126.6 42.4898 125.681 42.3062 124.701 42.3062C123.72 42.3062 122.74 42.4898 121.882 42.8572C120.963 43.2245 120.227 43.7755 119.553 44.449C118.879 45.1225 118.328 45.9184 117.96 46.7755C117.593 47.6939 117.409 48.6123 117.409 49.5919C117.409 50.5715 117.593 51.5511 117.96 52.4082C118.328 53.3266 118.879 54.0613 119.553 54.7347C120.227 55.4082 121.024 55.9592 121.882 56.3266C122.74 56.6939 123.72 56.8776 124.701 56.8776C125.681 56.8776 126.662 56.6939 127.52 56.3266C128.377 55.9592 129.174 55.4082 129.848 54.7347C130.522 54.0613 131.074 53.2653 131.441 52.4082C131.809 51.5511 131.993 50.5715 131.993 49.5919C131.993 48.6123 131.809 47.6327 131.441 46.7755C131.012 45.9184 130.522 45.1225 129.848 44.449Z" fill="#F5044C"/>
                        <path d="M209.693 1.34692H196.641V38.2653H209.693V1.34692Z" fill="white"/>
                        <path d="M257 20.6327C257 17.449 256.571 14.5102 255.652 11.9388C254.733 9.36735 253.446 7.22449 251.669 5.44898C249.953 3.67347 247.808 2.32653 245.357 1.40816C242.845 0.489796 240.026 0 236.962 0C233.776 0 230.957 0.489796 228.444 1.40816C225.932 2.32653 223.787 3.67347 222.01 5.38776C220.233 7.10204 218.885 9.18367 217.905 11.6939C216.924 14.1429 216.495 16.9592 216.495 20.0204C216.495 23.0204 216.985 25.6531 218.027 28.102C219.008 30.4898 220.478 32.5714 222.317 34.2857C224.155 36 226.361 37.3469 228.996 38.2653C231.631 39.1837 234.45 39.6735 237.575 39.6735C247.747 39.6735 254.12 35.449 256.632 27H243.887C242.477 29.3265 240.332 30.4286 237.452 30.4286C232.182 30.4286 229.547 27.6122 229.547 22.0408H257V20.6327ZM229.976 14.449C230.283 12.551 231.141 11.0204 232.366 9.97959C233.653 8.93878 235.308 8.38776 237.269 8.38776C239.168 8.38776 240.823 8.93878 242.171 10.0408C243.519 11.1429 244.377 12.6122 244.806 14.449H229.976Z" fill="white"/>
                        <path d="M163.704 46.12L160.088 57.064H158.2L155.608 49.592L153.032 57.064H151.144L147.528 46.12H149.544L152.104 54.056L154.808 46.12H156.424L159.128 54.056L161.688 46.12H163.704ZM173.828 54.584H168.628L167.62 57H165.556L170.34 46.056H172.132L176.884 57H174.852L173.828 54.584ZM173.092 52.808L171.22 48.392L169.38 52.808H173.092ZM188.204 47.896H184.428V57H182.508V47.896H178.716V46.12H188.204V47.896ZM196.986 55.384C197.839 55.384 198.548 55.16 199.114 54.712C199.69 54.2533 200.084 53.608 200.298 52.776H202.282C202.026 54.12 201.418 55.2027 200.458 56.024C199.508 56.824 198.351 57.224 196.986 57.224C195.407 57.224 194.063 56.6853 192.954 55.608C191.866 54.5307 191.322 53.1813 191.322 51.56C191.322 49.928 191.866 48.5787 192.954 47.512C194.063 46.4347 195.407 45.896 196.986 45.896C198.34 45.896 199.498 46.3013 200.458 47.112C201.418 47.9333 202.026 49.0107 202.282 50.344H200.298C200.084 49.512 199.69 48.872 199.114 48.424C198.548 47.9653 197.839 47.736 196.986 47.736C195.919 47.736 195.034 48.0933 194.33 48.808C193.626 49.5333 193.274 50.4507 193.274 51.56C193.274 52.6693 193.626 53.5867 194.33 54.312C195.034 55.0267 195.919 55.384 196.986 55.384ZM216.36 46.12V57H214.456V52.552H209.032V57H207.112V46.12H209.032V50.776H214.456V46.12H216.36ZM223.455 47.896V50.744H228.799V52.52H223.455V55.224H229.439V57H221.535V46.12H229.439V47.896H223.455ZM238.194 53.416H236.05V57H234.13V46.12H238.594C239.842 46.12 240.855 46.456 241.634 47.128C242.423 47.8 242.818 48.68 242.818 49.768C242.818 50.568 242.594 51.2667 242.146 51.864C241.708 52.4613 241.1 52.888 240.322 53.144L243.474 57H241.138L238.194 53.416ZM236.05 51.64H238.53C239.234 51.64 239.81 51.4693 240.258 51.128C240.706 50.7867 240.93 50.3333 240.93 49.768C240.93 49.2027 240.706 48.7493 240.258 48.408C239.81 48.0667 239.234 47.896 238.53 47.896H236.05V51.64ZM251.478 45.88C251.99 45.88 252.48 45.9387 252.95 46.056C253.419 46.1733 253.867 46.36 254.294 46.616C254.731 46.872 255.088 47.2347 255.366 47.704C255.654 48.1627 255.83 48.7067 255.894 49.336H253.99C253.798 48.1307 253.003 47.528 251.606 47.528C250.944 47.528 250.416 47.672 250.022 47.96C249.638 48.2373 249.446 48.6213 249.446 49.112C249.446 49.5067 249.584 49.816 249.862 50.04C250.15 50.264 250.598 50.44 251.206 50.568L252.582 50.84C253.691 51.064 254.512 51.416 255.046 51.896C255.579 52.3653 255.846 53.0107 255.846 53.832C255.846 54.856 255.456 55.6773 254.678 56.296C253.92 56.9147 252.907 57.224 251.638 57.224C250.283 57.224 249.19 56.888 248.358 56.216C247.526 55.544 247.062 54.6213 246.966 53.448H248.87C248.966 54.088 249.27 54.5947 249.782 54.968C250.294 55.3413 250.95 55.528 251.75 55.528C252.411 55.528 252.928 55.4 253.302 55.144C253.686 54.8773 253.878 54.5147 253.878 54.056C253.878 53.3627 253.344 52.9147 252.278 52.712L250.486 52.36C248.438 51.9547 247.414 50.9253 247.414 49.272C247.414 48.2587 247.782 47.4427 248.518 46.824C249.275 46.1947 250.262 45.88 251.478 45.88Z" fill="white"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="67.0001" y1="20" x2="99.5001" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0.92"/>
                        </linearGradient>
                        <clipPath id="clip0">
                        <rect width="257" height="57" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>                    
                    </li>

                    <div className="group">     
                        <Link to={'/WatchList'}>
                            <li className={this.props.page=='/WatchList'?'active h':'h'}>WatchList
                                <span id='watchNum'>3</span>
                            </li>
                        </Link>
                        <Link to={'/contact'}><li className={this.props.page=='/contact'?'active h':'h'}>Contact</li></Link>
                    </div>

                </ul>
          </div>
        )    
    }
}

export default Header