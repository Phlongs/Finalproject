import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
var FormData = require('form-data');

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      secretData: '',
      userInfo: {},
      file: {}
    };
    this.processForm = this.processForm.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */

    uploadImage(imageFile) {
      return new Promise((resolve, reject) => {
        let imageFormData = new FormData();
        let fileType = imageFile.target.name;

        imageFormData.append(fileType, imageFile.target.files[0]);

        var xhr = new XMLHttpRequest();

        xhr.open('post', '/auth/uploads', true);
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.onload = function () {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        };

        xhr.send(imageFormData);

      });
    }

    handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
      });
    }

    reader.readAsDataURL(file);


  }

  processForm(event) {
    //prevent default action. in this case, action is the form submission event
    event.preventDefault();

     //create a string for an HTTP body message
    const firstName = encodeURIComponent(event.target.firstName.value);
    const lastName = encodeURIComponent(event.target.lastName.value);
    const education = encodeURIComponent(event.target.education.value);
    const phone = encodeURIComponent(event.target.phone.value);
    const email = encodeURIComponent(event.target.email.value);
    const about = encodeURIComponent(event.target.about.value);
    const resume = encodeURIComponent(event.target.resume.value);
    const experience = encodeURIComponent(event.target.experience.value);
    const port1 = encodeURIComponent(event.target.port1.value);
    const port1Name = encodeURIComponent(event.target.port1Name.value);
    const port2 = encodeURIComponent(event.target.port2.value);
    const port2Name = encodeURIComponent(event.target.port2Name.value);
    const port3 = encodeURIComponent(event.target.port3.value);
    const port3Name = encodeURIComponent(event.target.port3Name.value);
    const port4 = encodeURIComponent(event.target.port4.value);
    const port4Name = encodeURIComponent(event.target.port4Name.value);
    const port5 = encodeURIComponent(event.target.port5.value);
    const port5Name = encodeURIComponent(event.target.port5Name.value);
    const port6 = encodeURIComponent(event.target.port6.value);
    const port6Name = encodeURIComponent(event.target.port6Name.value);

    const formData = `firstName=${firstName}&lastName=${lastName}&education=${education}
    &phone=${phone}&experience=${experience}&port1=${port1}&port1Name=${port1Name}
    &port2=${port2}&port2Name=${port2Name}&port3=${port3}&port3Name=${port3Name}&port4=${port4}&port4Name=${port4Name}
    &port5=${port5}&port5Name=${port5Name}&port6=${port6}&port6Name=${port6Name}&email=${email}&about=${about}&resume=${resume}`;

    //create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/bio', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {

      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // make a redirect
        // this.context.router.replace('/user');
      }
    });

    xhr.send(formData);
    this.context.router.replace('/BioPage');
  }

  /**
   * Render the component.
   */
  render() {
    return (

      <Dashboard

        onSubmit={this.processForm}
        onChange={this.uploadImage}

      />
    );
  }

}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DashboardPage;
