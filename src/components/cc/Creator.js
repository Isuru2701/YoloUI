import React from 'react';
import '../../styles/creator.css';  
function Creator() {
    return (
        <>
            <div class="content">
                <div class="pop" onclick="openNav()"><i class='bx bxs-hand-right'></i></div>
                <div class="mob-area">
                    {/* <!--this is where my new content should go--> */}
                    <div class="otp-top">
                        <div class="otp-topic">2 step verification from Whatsapp</div><i
                            class='bx bxl-whatsapp-square otp-icon'></i>
                    </div>
                    <div class="phoneInp">
                        <input type="tel" id="phoneNumber" onchange="updatePhone()" />
                        <input type="hidden" id="countryCode" name="countryCode" />
                    </div>
                    <span class="warning">*Do not repeat the country code | Enter number in given format</span>
                    <button id="getOtp" onclick="getOtp()">Get OTP</button>
                    <input type="number" id="otp" minlength="6" maxlength="6" />
                    <button id="sub" onclick="setRole()">Unlock Creator</button>
                </div>
            </div>
        </>
    );
}

export default Creator;