"use client";
import "./register.css";
import React, { useState } from "react";

const Register = () => {
  const [isModal, setIsModal] = React.useState(false); //Modal upon sumbit

  const [disableBtn, setDisableBtn] = React.useState(true); //This is to toggle button disable relative to the checkbox


    const CloseModal = () => {
        setIsModal(false);
    }

    //used one useState to fetch all form contents instead of calling a useState for each input
  const [regInfo, setRegInfo] = React.useState({
    //to fetch the form content
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: (!disableBtn),
  });


  // I used this to update the state object with a new value
  const HandleChange = (e) => {
    const name = e.target.name; // to get the input field name
    const value = e.target.value; // to get the input field value
    setRegInfo((prev) => {
      return { ...prev, [name]: value }; // Update the state
    });
  };

//   console.log(regInfo)  // I used this to confirm I could get the contents of the form

  const postRegistration = async (e) => {
    e.preventDefault();
    const baseUrl = "https://backend.getlinked.ai";
    const RegUrl = `${baseUrl}/hackathon/registration`;
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(regInfo)
    };

    try {
        setDisableBtn(true); //to prevent multiple submissions
        let res2 = await fetch(RegUrl, options);
        console.log(res2);
        setIsModal(true);
        setDisableBtn(false);
    } catch (error) {
        console.log(error);
    }
  };

  const Toggle = () => {
    setDisableBtn(!disableBtn);
  };



  return (
    <div>
      <div className={isModal ? "modal_wrap" : "modal_wrap2"}>
        <div className="modal_wrapper">
          <img className="successful" src="/successful.svg" alt="" />
          <img className="happy" src="/happy.svg" alt="" />
          <div className="modal_words">
            <p className="congrats">Congratulations</p>
            <p className="congrats">you have successfully Registered!</p>
            <p className="success">Yes, it was easy and you did it!</p>
            <div className="checkk">
              <p className="next">check your mail box for next step</p>
              <img src="/wink.svg" alt="" />
            </div>
            <button onClick={CloseModal} className="back" type="submit">
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="reg_page">
        
        <div className="reg_left">
            <img className="cont_left" src="/cont_left.svg" alt="" />
          <img className="sitter" src="/reg.svg" alt="" />
        </div>
        <div className="reg_right">
            <img className="cont_right" src="/cont_right.svg" alt="" />
          <form className="reg_form" onSubmit={postRegistration}>
            <div className="form_content">
              <p className="regg">Register</p>
              <div className="p_div">
                <p className="part">Be part of this movement!</p>
                <div>
                  <img src="/fm_walk.svg" alt="" />
                  <img src="/m_walk.svg" alt="" />
                </div>
              </div>
              <p className="create">CREATE YOUR ACCOUNT</p>

              <div className="f_row1">
                <div className="field">
                  <label className="fill">Team’s Name</label>
                  <br />
                  <input
                    type="text"
                    onChange={HandleChange}
                    className="inputA"
                    name="team_name"
                    required
                  />
                </div>
                <div className="field">
                  <label className="fill">Phone</label>
                  <br />
                  <input
                    type="number"
                    onChange={HandleChange}
                    className="inputA"
                    name="phone_number"
                    required
                  />
                </div>
              </div>
              <div className="f_row2">
                <div className="field">
                  <label className="fill">Email</label>
                  <br />
                  <input
                    type="email"
                    onChange={HandleChange}
                    className="inputA"
                    name="email"
                    required
                  />
                </div>
                <div className="field">
                  <label className="fill">Project Topic</label>
                  <br />
                  <input
                    type="text"
                    onChange={HandleChange}
                    className="inputA"
                    name="project_topic"
                    required
                  />
                </div>
              </div>
              <div className="f_row3">
                <div className="field">
                  <label className="fill">Category</label>
                  <br />
                  <select
                    onChange={HandleChange}
                    name="category"
                    id="category"
                    className="inputC"
                    required
                  >
                    <option value="">Select your category</option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="field">
                  <label className="fill">Group Size</label>
                  <br />
                  <select
                    onChange={HandleChange}
                    required
                    name="group_size"
                    id="category"
                    className="inputD"
                    placeholder="Select your category"
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2 - 5">2 - 5</option>
                    <option value="6 - 10">6 - 10</option>
                    <option value="11 - 15">11 - 15</option>
                  </select>
                </div>
              </div>

              <p className="review">
                Please review your registration details before submitting
              </p>
              <div className="conditions">
                <input
                  onChange={HandleChange}
                  type="checkbox"
                  name="privacy_poclicy_accepted"
                  id=""
                  onClick={Toggle}
                />
                <label className="agree">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>

              <button type="submit" className="reg_btn" disabled={disableBtn}>
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
