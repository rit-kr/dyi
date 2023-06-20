import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import qrcode from '../internal/images/qrcode.png';

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
// import axios, * as others from 'axios';

const Trainings = () => {

    const [form, setForm] = useState({
        regId: "1", courseId: "1", fullName: "", mobile: "", email: ""
    });
    const [show, setShow] = useState(false);

    // const axios = require('axios');
    const navigate = useNavigate();

    // const handleRegister = () => {
    //     const payload = {
    //         ...form
    //     }

    // axios({
    //     method: 'post',
    //     url: "http://68.178.163.114:8087/api/Home/CourseRegister",
    //     data: payload, // you are sending body instead
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //   })
    //   .then(function(response) {
    //     return response.json()
    //   }).then(function(body) {
    //     console.log(body);
    //   });

    //     try {
    //         console.log("form", JSON.stringify(form));
    //         const response = fetch("http://68.178.163.114:8087/api/Home/CourseRegister", {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(form)
    //         });

    //         if (response.ok) {
    //             // Request was successful
    //             const data = response.json();
    //         } else {
    //             // Request failed
    //             console.error('Request failed');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
            setShow(true);
            // handleRegister();
    }

    return (
        <div className="page-content">
            <div className="container-fluid ps-md-0">
                <div className="full-width about-sec ">
                    <div className="training_section">
                        <div className="container">
                            {show ?
                            <div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Scan to pay <span>*</span></Form.Label>
                                        <div> <img src={qrcode} className='img-thumbnail' alt='...' /></div>
                                    </Form.Group>
                                </Form>
                            </div>
                                :
                                <div className='text_grid'>
                                    {/* <Stack container spacing={2}>
                                        <Stack xs={12} item >
                                            <TextField
                                                id="standered-basic"
                                                label="Name"
                                                placeholder='Enter fullName'
                                                color="warning"
                                                fullWidth
                                                value={form.fullName}
                                                error={!!form.errors?.fullName}
                                                helperText={form.errors?.fullName}
                                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                            />
                                        </Stack>
                                        <Stack xs={12} item>
                                            <TextField
                                                id="standered-basic"
                                                label="Phone number"
                                                type="number"
                                                placeholder='Enter Phone number'
                                                color="warning"
                                                fullWidth
                                                required
                                                value={form.mobile}
                                                error={!!form.errors?.mobile}
                                                helperText={form.errors?.mobile}
                                                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                            />
                                        </Stack>
                                        <Stack xs={12} item>
                                            <TextField
                                                id="standered-basic"
                                                label="Email"
                                                type="email"
                                                placeholder='Enter email'
                                                color="warning"
                                                fullWidth
                                                required
                                                value={form.email}
                                                error={!!form.errors?.email}
                                                helperText={form.errors?.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </Stack>
                                        <Stack xs={12} item>
                                            <Button variant='contained' color='primary' fullWidth
                                            // onClick={handleSubmit}
                                            >Register now</Button>
                                        </Stack>
                                    </Stack> */}
                                    <Form>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Full name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your full name"
                                                onChange={(e) => setForm({ ...form, fullName: e.target.value })}

                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" 
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="number" placeholder="Mobile number" 
                                                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                            />
                                        </Form.Group>
                                        <Button onClick={handleSubmit}>Pay NOW</Button>
                                    </Form>
                                </div>
                            }
                        </div>
                    {/* </Card.Text>
                </Card.Body>
            </Card>
        </Col> */}
                        {/* </Row > */}
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Trainings;