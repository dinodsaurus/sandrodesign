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
            SDDS is a Zagreb based design studio founded by Sandro Dujmenovic, working in the fields of arts, culture and commerce.
            The studio works within a wide range of projects, from luxurious branding to heavy duty visual identities and user experience projects. Upcoming projects include custom type design for Museum of Louvre, total design for Unitas, Croatian thread company, user interface and experience for Interfilm,
            Croatian film production company.<br/><br/>
            For full portfolio or a collaboration please contact via e-mail.<br/><br/>

            <a href="mailto:i@sandrosandro.com">i@sandrosandro.com</a><br/>
            +385 (0)98 586 589

          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
