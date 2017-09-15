import 'styles/contact.styl';

import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="close"></div>
        <div onClick={this.props.toggleContact} className="closeClick"></div>
        <div className="content">
          <p>
            Beton is a Zagreb based design agency founded by Sandro Dujmenović, Marko Mlinarić and Sanja Nikolić, working in the fields of arts, culture and commerce. The studio works within a wide range of projects, from luxurious branding to heavy duty visual identities and user experience projects. Upcoming projects include custom type design for Museum of Louvre, total design for Unitas, Croatian thread company, user interface and experience for Interfilm, Croatian film production company.
            <br/><br/>For full portfolio or a collaboration please contact via e-mail.
            <br/><a href="mailto:i@sandrosandro.com">hi@beton.com.hr</a>
            <br/><br/>M. +385 (0)91 307 2569
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
