import React, { PureComponent } from 'react';
import '../styles/ContactPage.css';

import { Prompt } from 'react-router-dom';

class ContactPage extends PureComponent {

  state = {
    value: '',
  }


  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      value: '',
    })
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div className="contact">
          <span>ContacPage</span>
          <form onSubmit={this.handleSubmit}>
            <h3>Napsiz do nas</h3>
            <textarea className="textarea" value={value} onChange={this.handleChange} placeholder="Napisz do Nas!"></textarea>
            <button>wyslij</button>
          </form>

          <Prompt
            when={value !== ''} // kiedy zawartość textarea NIE JEST pusta (kiedy coś wpisałeś)
            message="Masz niewypełniony formularz. Czy chcesz zakończyc?"
          />

        </div>
      </>
    );
  }
}

export default ContactPage;
