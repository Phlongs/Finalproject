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
      firstName: '',
      lastName: '',
      education: '',
      file: {}
    };
    this.processForm = this.processForm.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response
        });
      }
    });
    xhr.send();
  }
    uploadImage(imageFile) {
      return new Promise((resolve, reject) => {
        let imageFormData = new FormData();

        imageFormData.append('imageFile', imageFile.target.files[0]);

        var xhr = new XMLHttpRequest();

        xhr.open('post', '/auth/uploads', true);

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

    uploadRes(event) {

      event.preventDefault();
      const file = event.target.files[0];
        console.log(file)
      getSignedRequest(file);
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
    const experience = encodeURIComponent(event.target.experience.value);
    const port1 = encodeURIComponent(event.target.port1.value);
    const port1Name = encodeURIComponent(event.target.port1Name.value);
    const port2 = encodeURIComponent(event.target.port2.value);
    const port2Name = encodeURIComponent(event.target.port2Name.value);
    const port3 = encodeURIComponent(event.target.port3.value);
    const port3Name = encodeURIComponent(event.target.port3Name.value);

    const formData = `firstName=${firstName}&lastName=${lastName}&education=${education}
    &phone=${phone}&experience=${experience}&port1=${port1}&port1Name=${port1Name}
    &port2=${port2}&port2Name=${port2Name}&port3=${port3}&port3Name=${port3Name}&email=${email}&about=${about}`;

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
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({

        });
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
        secretData={this.state.secretData}
        onSubmit={this.processForm}
        onChange={this.uploadImage}
        uploadRes={this.uploadRes}
      />
    );
  }

}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

    function getSignedRequest(file) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `auth/sign-s3?file-name=${file.name}&file-type=${file.type}`);
      xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
      if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText);
        uploadFile(file, response.signedRequest, response.url);
      }
      else{
        alert('Could not get signed URL.');
      }
    }
    };
    xhr.send();
    }

    function uploadFile(file, signedRequest, url){
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        document.getElementById('preview').src = url;
        document.getElementById('avatar-url').value = url;
      }
      else{
        alert('Could not upload file.');
      }
    }
    };
    xhr.send(file);
    }   
  
export default DashboardPage;
