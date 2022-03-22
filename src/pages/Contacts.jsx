import React from "react";

// const Contacts = () => {
//   return (
//     <>
//       <div className="contact-section">
//         <h1>Contact Us</h1>
//         <div className="border"></div>
//         <form className="contact-form" action="/" method="post">
//         <input
//           type="text"
//           className="contact-form-text"
//           placeholder="First Name"
//         ></input>
//         <input
//           type="text"
//           className="contact-form-text"
//           placeholder="Last Name"
//         ></input>
//         <input
//           type="email"
//           className="contact-form-text"
//           placeholder="Your Email"
//         ></input>
//         <textarea
//           className="contact-form-text"
//           placeholder="Your Message"
//         ></textarea>
//         <input type="submit" className="contact-form-btn" value="send"></input></form>
//       </div>
//     </>
//   );
// };

// export default Contacts;

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  comment: "",
  nameError: "",
  nameError2: "",
  emailError: "",
  commentError: "",
};

export default class Contacts extends React.Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let nameError2 = "";
    let emailError = "";
    // let passwordError = ""

    if(!this.state.firstName) {
      nameError = "name is required"
    }

    if(!this.state.lastName) {
      nameError2 = "name is required"
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError || nameError2) {
      this.setState({ emailError, nameError, nameError2 });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="border"></div>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              className="contact-form-text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 18, color: "white" }}>
              {this.state.nameError}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              className="contact-form-text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 18, color: "white" }}>
              {this.state.nameError2}
            </div>
          </div>
          <div>
            <input
              name="email"
              placeholder="Email"
              className="contact-form-text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 18, color: "white" }}>
              {this.state.emailError}
            </div>
          </div>
          <textarea
            className="contact-form-text"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="contact-form-btn"
            // value="send"
          >Send</button>
        </form>
      </div>
    );
  }
}
