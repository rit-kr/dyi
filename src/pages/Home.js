import Button from 'react-bootstrap/Button';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import { AiOutlineUser, AiFillApple, AiOutlineArrowDown } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { CgArrowDownO } from 'react-icons/cg';

import { BsGooglePlay, BsArrowRight } from 'react-icons/bs';

import Carousel from 'react-bootstrap/Carousel';
import { HiClipboardList } from 'react-icons/hi';
import { FaLocationArrow } from 'react-icons/fa';


export default function Home() {
    return (
        <>
            <section className='home_main'>
                <div className='main_content'>
                    <h2>Learn From AnyWhere</h2>
                    <p>Technology is bringing a massive wave of evolution on learning things in different ways.</p>
                    <Button variant="secondary outline-light">Ready to Get started?</Button>
                </div>
                <div className='main_down_arrow_container'>
                    <div className='outer_circle'>
                        <div className='inner_circle'>
                            <div className='main_down_arrow'>
                                <AiOutlineArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='categories_course_section'>
                <div>

                    <h2>
                        Via School Categories Courses
                    </h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div className='home_card_container'>
                    <Card className="text-white home_card overlay">
                        <Card.Img className='home_card_img' src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card><Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card><Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card><Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card><Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="text-white home_card overlay">
                        <Card.Img src="../assets/image/images.jpeg" alt="Card image" />
                        <Card.ImgOverlay className='home_card_text'>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>Over 800 Courses</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <Button variant="secondary outline-light">View All Courses</Button>
            </section>
            <section className='home_online_start'>
                <div className='main_content'>
                    <h2>STARTING ONLINE LEARNING</h2>
                    <p>ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES</p>
                    <Button variant="secondary outline-light">Get started Now?</Button>
                </div>
            </section>
            <section className='categories_course_section'>
                <div>
                    <h2>
                        Browse Our Top Courses
                    </h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <div className='home_card_container'>
                    <Card className='top_course'>
                        <div className='img_wrap'>
                            <Card.Img className='top_course_img' variant="top" src="../assets/image/images.jpeg" />
                            <p class="img_preview">Preview Courses</p>
                        </div>
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../assets/image/images.jpeg" />
                        <Card.Body>
                            {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                            <Card.Text>
                                <small className="text-muted">28/06/2023</small>
                                <p>
                                    Introduction web development & HTML
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                            <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                        </Card.Footer>
                    </Card>
                </div>
                <Button variant="secondary outline-light">View All Courses</Button>
            </section>
            <section className='home_client'>
                <div>
                    <p>
                        What People Say
                    </p>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <img className='client_img_container' src="../assets/image/demo-logo.png" alt='Logo' />
                <div>
                    <p>
                        Ali Tufan
                    </p>
                    <p>Customization is very easy with this theme. Clean and quality design and full support for any kind of request! Great theme!</p>
                </div>
            </section>
            {/* <section>
                <div>
                    <p>
                        Latest News And Events
                    </p>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>

                <div className='home_card_container'>
                    <Carousel>
                        <Carousel.Item interval={null}>
                            <img
                                className="d-block w-100"
                                src="../assets/image/images.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={null}>
                            <img
                                className="d-block w-100"
                                src="../assets/image/images.jpeg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={null}>
                            <img
                                className="d-block w-100"
                                src="../assets/image/images.jpeg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section> */}
            <section className='home_store_section'>
                <div className='home_store_content' >
                    <div >
                        <p>Download & Enjoy</p>
                        <p>Access your courses anywhere, anytime & prepare with practice tests.</p>
                        <div>
                            <Button className='home_store_button'>
                                <div>
                                    <AiFillApple />
                                </div>
                                <div>
                                    <p>App Store</p>
                                    <p>Availavle on it</p>
                                </div>
                            </Button>

                            <Button>
                                <BsGooglePlay />
                                <div>
                                    <p>Google Play</p>
                                    <p>Get it on</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='home_store_mobile'>
                        <img src='../assets/image/screenshot_mobile.png' />
                    </div>
                </div>
            </section>
            <section className='team_train'>
                    <h3>Need To Train Your Team?</h3>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <div className='client_logo_container'>
                        <img className='client_logo' src='../assets/image/pinterest.png' />
                        <img className='client_logo' src='../assets/image/paypal.png' />
                        <img className='client_logo' src='../assets/image/booking.png' />
                        <img className='client_logo' src='../assets/image/adidas.png' />
                        <img className='client_logo' src='../assets/image/prodrive.png' />
                    </div>
            </section>
            <section className='newsletter_section'>
                <div className='newsletter_section_container'>

                <h3>Get Newsletter</h3>
                <p>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
                <div>
                    <input></input>
                    <Button>
                        Get it now
                        <BsArrowRight />

                    </Button>
                </div>
                
                </div>
            </section>
        </>
    );
};