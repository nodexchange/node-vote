 import React from 'react';
 import AddCharacterStore from '../stores/AddCharacterStore';
 import AddChaaracterActions from '../actions/AddCharacterActions';

export default class AddCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddCharacterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddCharacterStore.listen(this.onChange);
  }

  componenWillUnmount() {
    AddCharacterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var gender = this.state.gender;

    if (!name) {
      AddCharacterActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!gender) {
      AddCharacterActions.invalidGender();
    }

    if (name && gender) {
      AddCharacterActions.AddCharacter(name, gender);
    }
  }

  render() {
    return (<div>FORM HERE</diFv>);
  }
}
