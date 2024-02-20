import React, { useEffect, useState } from 'react';
import '../../styles/checkout.css';

function Checkout() {
    const [paymentType, setPaymentType] = useState('');
    const [lookupKey, setLookupKey] = useState('');
    const [topic, setTopic] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('t');
        setPaymentType(type);
        setTopicAndPrice(type);
    }, []);

    const setTopicAndPrice = (type) => {
        let topicContent = '';
        let priceContent = '';

        if (type === 'premium') {
            topicContent = 'Why not a premium package for just';
            priceContent = '$ 5';
            setLookupKey('yolo_premium_test');
        } else if (type === 'boost') {
            topicContent = 'Why not a boost package for just';
            priceContent = '$ 10';
            setLookupKey('yolo_boost_test');
        } else {
            topicContent = 'Choose your package';
            priceContent = '';
            setLookupKey('');
        }

        setTopic(topicContent);
        setPrice(priceContent);
    };

    const premiumPay = () => {
        const formData = {
            lookup_key: lookupKey
        };

        fetch('http://127.0.0.1:5000/collections', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    window.location.href = data.url;
                } else {
                    // Handle failure
                }
            })
            .catch(error => {
                console.error('Error during checkout:', error);
            });
    };

    return (
        <>
            <br/>
           <div className='checkout-header'>
                <h1>Checkout</h1>
           </div>
           <div className='checkout-body'>
            <div className='benefits'>
                <ul>
                    <li>More stuff</li>
                    <li>More stuff</li>
                    <li>More stuff</li>
                    <li>More stuff</li>
                    <li>More stuff</li>
                    <li>More stuff</li>
                    <li>More stuff</li>

                </ul>
                

            </div>
            <div className='make-payment'>
                pay here

            </div>

           </div>

        </>
    );
}

export default Checkout;
