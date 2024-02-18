import React, { useState } from 'react';
import '../../styles/creator.css';
import Cookies from 'js-cookie';

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

    return (
        <div className="content">
            
            <div className="mob-area">
                <div className="otp-top">
                    <div className="otp-topic">2 step verification from Whatsapp</div>
                    <i className="bx bxl-whatsapp-square otp-icon"></i>
                </div>
                <div className="phoneInp">
                    <input type="tel" id="phoneNumber" onChange={updatePhone} value={phone} />
                    <input type="hidden" id="countryCode" name="countryCode" />
                </div>
                <span className="warning">*Do not repeat the country code | Enter number in given format</span>
                <button id="getOtp" onClick={getOtp}>Get OTP</button>
                <input type="number" id="otp" minLength="6" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <button id="sub" onClick={setRole}>Unlock Creator</button>
            </div>
        </div>
    );
}

export default Creator;
