import React from 'react';
import './Postform.css';
import swal from 'sweetalert';

class PostForm extends React.Component {
    constructor(props) {
      
      super(props);

      this.state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        company: 'Student',
        "00N4x00000ZT6K8": '',
        "00N4x00000ZT0OJ": ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
  
    handleInputChange(event) {
      
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });

    }

    handleSubmit( event ) {      
      console.log(this.state);
      // fetch("http://localhost:8888/proxy.php",{
      fetch("https://webtoleadsalesforce.epizy.com/proxy.php",{
        method: 'post',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      })
      // .then(res => res.json())
      .then(
        (result) => { 
          
          swal({
            title: "Thank you",
            text: "We have received you message",
            icon: "success",
            button: "dismiss",
          });
          // console.log('SUCCESS');
          // console.log(result);
          // alert('A name was submitted: ' + this.state.first_name);
          
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: 'Message has been emailed!'
          });
        

        },
        (error) => {
          
          console.log('ERROR');
          console.log(error);
          
        }
      );
      
      event.preventDefault();

    }
  
    render() {
      return (
        <div className='container' id='container'>
        <form onSubmit={this.handleSubmit} id="contact" className="formcontainer needs-validation">
          <div>
          {/* <label htmlFor="first_name">
            First Name:
          </label> */}
          <input id="first_name"           
            maxLength="40" 
            name="first_name" 
            size="20" 
            type="text"
            placeholder='First Name'
            value={this.state.name}
            onChange={this.handleInputChange} 
            required/>
          <br />
          </div>
          <div>
          {/* <label htmlFor="last_name">Last Name:</label> */}
          <input id="last_name" 
            maxLength="80" 
            placeholder='Last Name'
            name="last_name" 
            size="20" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} 
            required/>
          <br />
          </div>
          <div>
          {/* <label htmlFor="phone">Phone:</label> */}
          <input id="phone" 
            maxLength="40" 
            name="phone" 
            size="20" 
            type="text"
            value={this.state.name}
            placeholder='Phone'
            onChange={this.handleInputChange} />
          <br />
          </div>
          <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input id="email" 
            maxLength="80" 
            name="email" 
            placeholder='Email'
            size="20" type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br />
          </div>
          {/* <label type='hidden' htmlFor="company">Company:</label>
          <input id="company" 
            maxLength="40" 
            name="company" 
            size="20" 
            type="hidden"
           
            value={this.state.name}
            onChange={this.handleInputChange} />
          <br /> */}
          <div>
          {/* <label htmlFor="00N4x00000ZT6K8">Subject:</label> */}
          <textarea id="00N4x00000ZT6K8" 
            name="00N4x00000ZT6K8" 
            rows="1" 
            type="text" 
            wrap="soft"
            placeholder='Subject'
            value={this.state.name}
            onChange={this.handleInputChange} ></textarea>
          <br />
          </div>
          <div>
          {/* <label htmlFor="00N4x00000ZT0OJ">Message:</label> */}
          <textarea id="00N4x00000ZT0OJ" 
            name="00N4x00000ZT0OJ" 
            rows="3" 
            type="text" 
            wrap="soft"
            placeholder='message'
            value={this.state.name}
            onChange={this.handleInputChange} ></textarea>
          <br />
          </div>
          
          <input id="contact-submit" 
            type="submit"
            value="Submit" />
        </form>
        </div>
      );
    }
  }

export default PostForm;
