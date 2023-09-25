"use client"
import "./contact.css";
import React, { useState } from "react";

const Contact = () => {

    const [submitText, setSubmitText] = React.useState(false); //to confirm Submission

    const ShowSubmit = () => {
        setSubmitText(true);
    }

    const [disableBtn, setDisableBtn] = React.useState(false); //This is to controll btn disable


    //used one useState to fetch all form contents instead of calling a useState for each input
    const [contactInfo, setContactInfo] = React.useState({
        //to fetch the form content
        email: "",
        first_name: "",
        message: ""
    })


    // I used this to update the state object with a new value
    const HandleChange = (e) => {
        const name = e.target.name; // to get the input field name
        const value = e.target.value; // to get the input field value
        setContactInfo((prev) => {
        return { ...prev, [name]: value }; // Update the state
        });
    };

    // console.log(contactInfo); //this is to confirm the contents of the form

    
    const postContact = async (e) => {
        e.preventDefault();
        const baseUrl = "https://backend.getlinked.ai";
        const ContactUrl = `${ baseUrl}/hackathon/contact-form`;
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactInfo)
        }

        try {
            setDisableBtn(true); //to prevent multiple submissions
            let res = await fetch(ContactUrl, options);
            console.log(res);
            setSubmitText(true);
        } catch (error) {
            console.log(error);
        } finally {
            e.target.reset(); //Reset the form
            setTimeout(() => {
                setSubmitText(false);
            }, 5000);
            setDisableBtn(false);
        }
    }

  return <div>
    <div className="contact_wrapper">
        <div className="flex_contact">
            <div className="contact_left">
                <img className="cont_left" src="/cont_left.svg" alt="" />
                <p className="touch">Get in touch</p>
                <p className="info">Contact<br/>Information</p>
                <p className="loca">
                27,Alara Street<br/>
                Yaba 100012<br/>
                Lagos State
                </p>
                <p className="dial">
                Call Us : 07067981819
                </p>
                <p className="open">
                we are open from Monday-Friday<br/>
                08:00am - 05:00pm
                </p>
                <p className="share">Share on</p>
                <div className="socialss">
                    <img src="/insta.svg" alt="" />
                    <img src="/xx.svg" alt="" />
                    <img src="/face.svg" alt="" />
                    <img src="/linkedin.svg" alt="" />
                </div>
            </div>

            <div className="contact_right">
                <img className="cont_right" src="/cont_right.svg" alt="" />
                <form className="form" onSubmit={postContact}>
                    <div className="form_wrapper">
                        <p className="assist">
                        Questions or need
                        assistance?
                        Let us know about it
                        </p>
                        <input
                        className="input1"
                        type="text"
                        placeholder="First Name"
                        required
                        name="first_name"
                        onChange={HandleChange}
                        />

                        <input
                        className="input2"
                        type="email"
                        placeholder="Mail"
                        required
                        name="email"
                        onChange={HandleChange}
                        />

                        <textarea
                        className="input3"
                        rows="5"
                        cols=""
                        placeholder="Message"
                        required
                        name="message"
                        onChange={HandleChange}
                        />

                        <button
                        className="submit"
                        type="submit"
                        disabled={disableBtn}
                        >
                            {disableBtn? "Loading..." : "Submit"}
                        </button>
                        <p className={submitText? "pshow" : "pnone"}>Submitted</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>;
};
export default Contact;
