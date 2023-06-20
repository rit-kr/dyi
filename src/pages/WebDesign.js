import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineShareAlt, AiFillStar, AiOutlineUser } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { LuFileDown } from 'react-icons/lu';
import { HiOutlineKey } from 'react-icons/hi';
import { DiResponsive } from 'react-icons/di';
import { IoIosFlash } from 'react-icons/io';
import { GrCertificate } from 'react-icons/gr';



import { BiCommentDetail } from 'react-icons/bi';
import Accordion from 'react-bootstrap/Accordion';
import { Nav } from 'react-bootstrap';



export default function WebDesign() {
    return (
        <>
            <section className='webdesign_main'>
                <div className='main_content '>
                    <h3>Introduction to Web development and HTML</h3>
                    <p><span>Home</span>/<span>Course</span>/<span>Design</span>/<span>Introduction to Web development and HTML</span></p>
                </div>
            </section>
            <section>
                <section className='content_container'>
                    <section className='content_section'>
                        <div className='user_info_share'>
                            <div className='user_info'>
                                <img className='client_img_container' src="../assets/image/demo-logo.png" alt='Logo' />
                                <p>Ali Tufan</p>
                                <p>Last updated 21 December 2019</p>
                            </div>
                            <Button><AiOutlineShareAlt />Share</Button>
                        </div>
                        <div>
                            <h3>Introduction to Web development and HTML</h3>
                            <div className='flex'>
                                <p className='best_seller_tag'>Best seller</p>
                                <div className='star_filled'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>
                            </div>
                            <div className='flex'>
                                <div className="text-muted enrolled_icon"><AiOutlineUser /> <span>2 Students enrolled</span></div>
                                <div className="text-muted"><BiCommentDetail /> <span>5 topics </span></div>
                            </div>
                        </div>
                        <div>
                            <iframe className='embed_youtube_video'
                                src="https://www.youtube.com/embed/UdDwKI4DcGw" title="Learn Remotely Today with Edumy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </div>
                        <div>
                            <div class="cs_overview">
                                <h4 class="title">Course Overview</h4>
                                <h4 class="subtitle">Course Description</h4>
                                <p class="mb30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                <p class="mb20">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4 class="subtitle">What you'll learn</h4>
                                <ul class="cs_course_syslebus">
                                    <li><i class="fa fa-check"></i>
                                        <p>Become a UX designer.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>You will be able to add UX designer to your CV</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>Become a UI designer.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>Build &amp; test a full website design.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>Build &amp; test a full mobile app.</p>
                                    </li>
                                </ul>
                                <ul class="cs_course_syslebus2">
                                    <li><i class="fa fa-check"></i>
                                        <p>Learn to design websites &amp; mobile phone apps.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>You'll learn how to choose colors.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>Prototype your designs with interactions.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>Export production ready assets.</p>
                                    </li>
                                    <li><i class="fa fa-check"></i>
                                        <p>All the techniques used by UX professionals</p>
                                    </li>
                                </ul>
                                <h4 class="subtitle">Requirements</h4>
                                <ul class="list_requiremetn">
                                    <li><i class="fa fa-circle"></i>
                                        <p>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</p>
                                    </li>
                                    <li><i class="fa fa-circle"></i>
                                        <p>No previous design experience is needed.</p>
                                    </li>
                                    <li><i class="fa fa-circle"></i>
                                        <p>No previous Adobe XD skills are needed.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Course ContentStart</h3>
                                <p>Date: 22/12/19 Category: Design</p>
                            </div>
                            <div className='accordion_container'>
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>General</Accordion.Header>
                                        <Accordion.Body>
                                            Announcement
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Topic #1</Accordion.Header>
                                        <Accordion.Body>
                                            Topic 1
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Topic #2</Accordion.Header>
                                        <Accordion.Body>
                                            Topic 2
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Topic #3</Accordion.Header>
                                        <Accordion.Body>
                                            Topic 3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div class="about_ins_container" id="yui_3_17_2_1_1687248359619_71">
                            <h4 class="aii_title">About the instructor</h4>
                            <div class="about_ins_info">
                                <div class="thumb">
                                    {/* <img src="http://demo.createdbycocoon.com/moodle/edumy/1/pluginfile.php/164/block_cocoon_course_instructor/content/6.png" alt="6.png"> */}

                                </div>
                            </div>
                            <div class="details">
                                <ul class="review_list">
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                    <li class="list-inline-item">4.5 Instructor Rating</li>
                                </ul>
                                <ul class="about_info_list">
                                    <li class="list-inline-item"><span class="flaticon-comment"></span> 12,197 Reviews </li>
                                    <li class="list-inline-item"><span class="flaticon-profile"></span> 141,745 Students </li>
                                    <li class="list-inline-item"><span class="flaticon-play-button-1"></span> 5 Courses </li>
                                </ul>
                                <h4>Ali Tufan</h4>
                                <p class="subtitle">UX/UI Designer</p>
                                <p class="mb25">UI/UX Designer, with 7+ Years Experience. Guarantee of High Quality Work. </p>
                                <p class="mb25">Skills: Web Design, UI Design, UX/UI Design, Mobile Design, User Interface Design, Sketch, Photoshop, GUI, Html, Css, Grid Systems, Typography, Minimal, Template, English, Bootstrap, Responsive Web Design, Pixel Perfect, Graphic Design, Corporate, Creative,
                                    Flat, Luxury and much more.</p>
                                <ul class="about_ins_list mb0">
                                    <li>
                                        <p>Available for:</p>
                                    </li>
                                    <li><a href="#">1. Full Time Office Work</a></li>
                                    <li><a href="#">2. Remote Work</a></li>
                                    <li><a href="#">3. Freelance</a></li>
                                    <li><a href="#">4. Contract</a></li>
                                    <li><a href="#">5. Worldwide</a></li>
                                </ul>
                            </div>
                        </div>
                        <section className='related_course_section'>
                            <h2>Related Courses</h2>
                            <div className='related_card_container'>
                                <Card className='related_course'>
                                    <div className='img_wrap'>
                                        <Card.Img className='top_course_img' variant="top" src="../assets/image/images.jpeg" />
                                        <div class="img_preview">
                                            <p className='top_seller_tag'>Top seller</p>
                                            <p className='img_preview_tag'>Preview Courses</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                                        <Card.Text>
                                            <small className="text-muted">28/06/2023</small>
                                            <p>
                                                Introduction web development & HTML
                                            </p>
                                            <div className='star_filled'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                                        <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                                    </Card.Footer>
                                </Card>
                                <Card className='related_course'>
                                    <div className='img_wrap'>
                                        <Card.Img className='top_course_img' variant="top" src="../assets/image/images.jpeg" />
                                        <div class="img_preview">
                                            <p className='top_seller_tag'>Top seller</p>
                                            <p className='img_preview_tag'>Preview Courses</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                                        <Card.Text>
                                            <small className="text-muted">28/06/2023</small>
                                            <p>
                                                Introduction web development & HTML
                                            </p>
                                            <div className='star_filled'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                                        <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                                    </Card.Footer>
                                </Card>
                                <Card className='related_course'>
                                    <div className='img_wrap'>
                                        <Card.Img className='top_course_img' variant="top" src="../assets/image/images.jpeg" />
                                        <div class="img_preview">
                                            <p className='top_seller_tag'>Top seller</p>
                                            <p className='img_preview_tag'>Preview Courses</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        {/* <Card.Title>Introduction web development & HTML</Card.Title> */}
                                        <Card.Text>
                                            <small className="text-muted">28/06/2023</small>
                                            <p>
                                                Introduction web development & HTML
                                            </p>
                                            <div className='star_filled'><AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </div>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"><AiOutlineUser /> <span>2 </span></small>
                                        <small className="text-muted"><BiCommentDetail /> <span>2  </span></small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </section>
                    </section>
                    <section className='aside_section'>
                        <div>
                            <div class="instructor_pricing_widget">
                                <div class="price">
                                    <span>Price</span> $49.99 <small>USD</small>
                                </div>
                                <Nav className='buynow_button'>
                                    <Nav.Link href="trainings">Buy &amp; Enrol Now</Nav.Link>
                                </Nav>
                                {/* <a href="http://demo.createdbycocoon.com/moodle/edumy/1/enrol/index.php?id=4" class="cart_btnss">Buy &amp; Enrol Now</a> */}
                                <div class="ccn-buy-access">Paid course entry</div>
                                <ul class="price_quere_list text-left">
                                    <li><div class="ccn-course-details-item"><span class="flaticon-play-button-1"><FiPlay /></span> 11 hours on-demand video</div></li>
                                    <li><div class="ccn-course-details-item"><span class="flaticon-download"><LuFileDown /></span> 69 downloadable resources</div></li>
                                    <li><div class="ccn-course-details-item"><span class="flaticon-key-1"><HiOutlineKey /></span> Full lifetime access</div></li>
                                    <li><div class="ccn-course-details-item"><span class="flaticon-responsive"><DiResponsive /></span> Access on mobile and TV</div></li>
                                    <li><div class="ccn-course-details-item"><span class="flaticon-flash"><IoIosFlash /></span> Assignments</div></li>
                                    <li><div class="ccn-course-details-item"><span class="flaticon-award"><GrCertificate /></span> Certificate of Completion</div></li>
                                </ul>
                            </div>
                        </div>
                        <div class="feature_course_widget" id="yui_3_17_2_1_1687248359619_64">
                            <ul class="list-group">
                                <h4 class="title">Course Features</h4>
                                <li class="d-flex justify-content-between align-items-center">
                                    Lectures <span class="float-right">6</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    Quizzes <span class="float-right">1</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    Duration <span class="float-right">3 hours</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    Skill level <span class="float-right">All level</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    Language <span class="float-right">English</span>
                                </li>
                                <li class="d-flex justify-content-between align-items-center">
                                    Assessments <span class="float-right">Yes</span>
                                </li>
                            </ul>
                        </div>
                        <div class="blog_tag_widget" id="yui_3_17_2_1_1687248359619_69">
                            <h4 class="title" id="yui_3_17_2_1_1687248359619_68">Tags</h4>
                            <ul class="tag_list">
                                <li class="list-inline-item">
                                    Beginner
                                </li>
                                <li class="list-inline-item">
                                    Marketing
                                </li>
                                <li class="list-inline-item">
                                    Photoshop
                                </li>
                                <li class="list-inline-item">
                                    Sketch
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>

            </section>
        </>
    )
}