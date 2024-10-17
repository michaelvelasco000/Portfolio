import React,{useEffect} from "react";
import AOS from 'aos';
import lms from '../assets/lms.png';
import elms from '../assets/elms.png';
import thoughtexchange from '../assets/thoughtexchange.png';
import resume from "../assets/resume.pdf";
import oshop from '../assets/oshop.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faPhp,
    faReact,
    faBootstrap,
    faJava,
    faCpanel,
    faGithub,
    faTelegram,
    faFacebook,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import EmailForm from './contacts';
function BodyPage(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <>
        <div className="container-fluid defaultbg" id="rm">
            <div className="row defaultrow2 justify-content-evenly p-5">
              
                <div className="col-12">
                <div class="loader"></div>
                </div>
                <div className="col-md-2">
                    
                        <div class="ui-abstergo">
                            <div class="abstergo-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="ui-text">
                            ABOUT ME
                            </div>
                            </div>
                        </div>
          
                <div className="col-md-6 align-self-md-start p-3" data-aos="fade-right" data-aos-duration="1000">
         
                       <h2 className="">
                       <b>Michael Arian Velasco </b> <br />
                    
                       </h2>
                       <p className="text-white">( Web Developer )<br /> </p>
                
                    <p className="">    
                     With one year of experience, I showcase a strong talent for web development and problem-solving. <br />
                     Skills:
                     <ul>
                        <li data-aos="fade-right"   data-aos-duration="1000">HTML, CSS, JavaScript</li>
                        <li data-aos="fade-right"   data-aos-duration="1500">Bootstrap, React</li>
                        <li data-aos="fade-right"   data-aos-duration="2000">PHP, Mysql</li>
                        <li data-aos="fade-right"   data-aos-duration="2500"> Git, repository management</li>
                        <li data-aos="fade-right"   data-aos-duration="3000">Object-oriented programming (OOP)</li>
                    
                     </ul>
                     
                     
                     
                     I excel in creating responsive and innovative solutions. With a collaborative spirit, project management skills, and a dedication to continuous learning, I am ready to make a positive impact in the dynamic world of IT.
                    </p>
                    </div>
                    <div className="col-md-auto align-self-md-center">
                        <ul style={{listStyleType: 'none'}}>
                            <li ><h4 className="" data-aos="fade-left"
                                data-aos-duration="1000"><a className="text-decoration-none" target="_blank" href="https://www.linkedin.com/in/michaelarianvelasco/"><b>Linked In  </b><i class="bi bi-linkedin"></i></a></h4></li>
                            <li><h4 className="" data-aos="fade-left"
                                data-aos-duration="1500"><a className="text-decoration-none" target="_blank" href="https://github.com/michaelvelasco000"><b>Github  </b><i class="bi bi-github"></i></a></h4></li>
                            <li><h4 className="" data-aos="fade-left"
                                data-aos-duration="2000"><a className="text-decoration-none" target="_blank" href="https://t.me/MichaelArianVelasco"><b>Telegram  </b><i class="bi bi-telegram"></i></a></h4></li>
                            <li><h4 className="" data-aos="fade-left"
                                data-aos-duration="2500"><a className="text-decoration-none" target="_blank" href="mailto:michaelarianvelasco@gmail.com"><b>E-mail  </b><i class="bi bi-envelope-at"></i></a></h4></li>
                                 <li><h4 className="" data-aos="fade-left"
                                data-aos-duration="2500"><a className="text-decoration-none" href={resume} target="_blank"><b>Resume </b><i class="bi bi-file-earmark-pdf-fill"></i></a></h4></li>
                        </ul>
                        <div class="loader"></div>
                    </div>
                <div className="col-12 d-none d-sm-block">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
        <div className="container defaultbg" id='projects'>
            <div className="row d-flex justify-content-evenly defaultrow">
                {/* <div className="col-md-6">
                
                    </div> */}
                     <div className="col-md-3 justify-content-end">
                     <div class="ui-abstergo">
                            <div class="abstergo-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="ui-text">
                            Projects & Works
                            </div>
                            </div>
                        </div>
             
                <div className="col-md-12 p-md-5 gap-2">
                  
                    <div class="row justify-content-end">
                       
                        <div className="col-6 align-self-center text-justify">
                            
                        <ul>
                            <li style={{listStyle:'none', fontSize:'.8rem'}}> <p>ThoughtExchange - Web applications that promote the sharing of thoughts and collaboration among users, enabling them to exchange ideas, insights, and experiences in an interactive and engaging setting.</p> </li>
                            <li>PHP(Laravel)</li>
                            <li>Tailwind</li>
                            <li>React(Vite)</li>
                            <li>Mysql</li>
                        </ul>
                        </div>
                        <div className="col-6" data-aos="fade-down-left" data-aos-duration="1500">
                            <img src={thoughtexchange} alt="" className='lsimg'/>
                        </div>       
                    </div>
                    <div class="row justify-content-start">
                        <div className="col-6" data-aos="fade-right" data-aos-duration="1500">
                            <img src={lms} alt="" className='lsimg'/>
                        </div>      
                        <div className="col-6 align-self-center text-wrap">
                            
                            <ul>
                                <li style={{listStyle:'none', fontSize:'.8rem'}}> <p>Library Management System - designed to efficiently track and record borrowed books. This system allows librarians to manage inventory, monitor borrowing history, and streamline the check-out and return process. </p> </li>
                                <li>PHP</li>
                                <li>Bootstrap</li>
                                <li>HTML,CSS&JS</li>
                                <li>Cpanel</li>
                                <li>Mysql</li>
                            </ul>
                            </div> 
                    </div>       
                    <div class="row justify-content-end">
                            <div className="col-6 align-self-center text-wrap">
                                <ul>
                                    <li style={{listStyle:'none', fontSize:'.8rem'}}> <p>
                                    E-Learning Management System - that enables users to upload files and learning materials seamlessly. This platform allows learners to take quizzes and receive grades, providing a comprehensive and interactive learning experience.  </p> </li>
                                    <li>PHP</li>
                                    <li>Bootstrap</li>
                                    <li>HTML,CSS&JS</li>
                                    <li>Cpanel</li>
                                    <li>Mysql</li>
                                </ul>
                            </div> 
                        <div className="col-6" data-aos="fade-left" data-aos-duration="1500">
                            <img src={elms} alt="" className='lsimg'/>
                        </div> 
                             
                    </div>
                    <div class="row justify-content-start">
                        <div className="col-6" data-aos="fade-up-right" data-aos-duration="1500">
                            <img src={oshop} alt="" className='lsimg'/>
                        </div>    
                        <div className="col-6 align-self-center text-wrap">
                                <ul>
                                    <li style={{listStyle:'none', fontSize:'.8rem'}}> <p>
                                    Oshop - that allows users to browse and add products to their cart with ease. Customers can make purchases and securely complete transactions through the Stripe payment API, ensuring a smooth and reliable checkout experience.</p> </li>
                                    <li>PHP(Laravel)</li>
                                    <li>Bootstrap</li>
                                    <li>React(Vite)</li>
                                    <li>Stripe Payment Gateway</li>
                                    <li>Mysql</li>
                                </ul>
                            </div>    
                    </div>   
                </div>
                <div className="col-md-10 p-md-5 gap-2">
                Work Experience:
                <hr></hr>
                -Human Information Resource System (HIRS)
                    <p style={{fontSize:'.8rem'}}>
                    I have hands-on experience developing and managing Human Information Resource Systems (HIRS). 
                    In this role, I focused on designing and implementing features for employee data management, attendance tracking,
                    and performance evaluations. My work ensured data accuracy and compliance with industry standards, contributing to 
                    streamlined HR processes and improved organizational efficiency.
                    </p>

                    <br />
                    -Booking Systems
                    <p style={{fontSize:'.8rem'}}>
                    I have extensive experience in creating and managing booking systems that enhance user 
                    experience and operational efficiency. I developed user-friendly interfaces that facilitate easy reservations,
                    cancellations, and modifications. 
                    </p>
                </div>
            </div>
        </div>
        <div className="container p-" id="contact">
                <div className="row justify-content-center">
                            <div className="col-md-3">
                                    
                                <div class="ui-abstergo">
                                    <div class="abstergo-loader">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                        <div class="ui-text">
                                        Contacts
                                            </div>
                                </div>
                            </div>
                </div>

                <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div class="page">
                            <EmailForm />
                            </div>              
                         </div>
                       
                </div>
        </div>
        <br />
        </>
    )
}
export default BodyPage;
