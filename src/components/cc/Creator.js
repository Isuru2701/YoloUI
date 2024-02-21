import React, { useState } from 'react';
import '../../styles/creator.css';
import Cookies from 'js-cookie';
import { Nav, Navbar } from 'react-bootstrap';
import '../../styles/creatorDashboard.css';

function Creator() {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const updatePhone = (event) => {
        const { value } = event.target;
        setPhone(value);
    };

    const getOtp = () => {
        const isConfirmed = window.confirm(`Is this number correct?\n${phone}\nOTP will be sent to this number.`);
        if (!isConfirmed) {
            return;
        }

        fetch('http://127.0.0.1:5000/otp/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    window.alert('OTP sent! Check your WhatsApp');
                } else {
                    window.alert('Something went wrong. Please try again later.');
                }
            })
            .catch((error) => {
                window.alert('Something went wrong. Please try again later.');
            });
    };

    const setRole = () => {
        fetch('http://127.0.0.1:5000/otp/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, otp }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    fetch('http://127.0.0.1:5000/creator', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userEmail: Cookies.get('userEmail'),
                            userContactNumber: phone,
                            userPasswordHash: Cookies.get('userPassword'),
                            status: 'set',
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.success) {
                                window.alert('PORTAL UNLOCKED! WELCOME TO THE REALM OF CREATORS');
                                Cookies.set('userRole', 'creator', { expires: 7 });
                                window.location.href = 'boost.html';
                            } else {
                                window.alert('Unable to Validate! Please contact our team for further help');
                            }
                        })
                        .catch(() => {
                            window.alert('Unable to Validate! Please contact our team for further help!');
                        });
                } else {
                    window.alert(`Invalid OTP for the No. ${phone}`);
                }
            })
            .catch(() => {
                window.alert('Something went wrong');
            });
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    return (
        <div className='cc-container'>
            <Navbar expand="lg" expanded={isOpen} onToggle={handleToggle}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="cc-bar"
                        activeKey="/home"
                        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    >
                        <div className="sidebar-sticky"></div>
                        <Nav.Item>
                            <Nav.Link href="/home"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <header className='cc-header'>


            </header>

            <div className='cc-body'>
            </div>


        </div>
    );
}

export default Creator;
