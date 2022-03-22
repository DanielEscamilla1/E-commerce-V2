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
  name: "",
  email: "",
  comment: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export default class ValiationForm extends React.Component {
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
    // let nameError = "";
    let emailError = "";
    // let passwordError = ""

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="border"></div>
        <form className="contact-form" onSubmit={this.handleChange}>
          <div>
            <input
              type="text"
              name="name"
              className="contact-form-text"
              placeholder="First Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="name"
              className="contact-form-text"
              placeholder="Last Name"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
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
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <textarea
            className="contact-form-text"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            className="contact-form-btn"
            value="send"
          ></input>
        </form>
      </div>
    );
  }
}
