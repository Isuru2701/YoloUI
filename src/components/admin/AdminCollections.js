import React, { useState } from 'react';
import '../../styles/collection.css';
import Cookies from 'js-cookie';

function AdminCollections() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        keywords: "",
        contents: {},
        duration: "",
        premium: ""
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleRadioChange = (event) => {
        setFormData({
            ...formData,
            premium: event.target.value
        });
    };

    const handleAddMaterial = () => {
        const materialsContainer = document.getElementById('materials-container');
        const materialInput = document.createElement('div');
        materialInput.classList.add('material-input');
        materialInput.innerHTML = `
            <input type="text" placeholder="Title">
            <input type="text" placeholder="Link">
            <button class="remove-material-btn">Remove</button>
        `;
        materialsContainer.appendChild(materialInput);
        bindRemoveMaterialButton(materialInput);
        updateFormData();
    };

    const bindRemoveMaterialButton = (materialInput) => {
        materialInput.querySelector('.remove-material-btn').addEventListener('click', function () {
            materialInput.remove();
            updateFormData();
        });
    };

    const updateFormData = () => {
        const materials = {};
        document.querySelectorAll('.material-input').forEach((materialInput, index) => {
            const title = materialInput.querySelector('input[type="text"]:nth-child(1)').value;
            const link = materialInput.querySelector('input[type="text"]:nth-child(2)').value;
            materials[`material-${index + 1}`] = { title, link };
        });
        setFormData({
            ...formData,
            contents: materials
        });
    };

    const saveCollection = async () => {
        updateFormData();
        try {
            const response = await fetch('http://127.0.0.1:5000/collections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get("admin_hash")}`
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert("Collection Saved");
        } catch (error) {
            console.error('Error execution', error);
        }
    };

    return (
        <div className="content">
            <div className="pop" onClick="openNav()"><i className='bx bxs-hand-right'></i></div>
            <h2>CREATE A COLLECTION</h2>
            <div className="form-container">
                <div className="form-column">
                    <div className="form-group">
                        <label>Collection Name</label>
                        <input type="text" id="title" name="title" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" id="duration" name="duration" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows="6" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-group" style={{ display: 'inline-flex' }}>
                        <label>Premium</label><input type="radio" name="premium" value="True" onChange={handleRadioChange} /><label>Free</label><input type="radio" name="premium" value="False" onChange={handleRadioChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="keywords">Keywords comma Separated</label>
                        <textarea id="keywords" name="keywords" rows="6" onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-group">
                        <button id="add-material-btn" onClick={handleAddMaterial}>Add Material</button>
                    </div>
                    <div id="materials-container"></div>
                    <button className="save" onClick={saveCollection}>Save Collection</button>
                </div>
            </div>
        </div>
    );
}

export default AdminCollections;
