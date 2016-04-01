import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions'

class AddCharacterStore {
  constructor() {
    this.bindActions(AddCharacterActions)
  }

  onAddCharacterSuccess(successMessage) {
    // $.ajax({'type':'POST', 'url':'/URL', 'data':'data'});
  }
  onAddCharacterFail(failMessage) {
    // $.ajax({'type':'POST', 'url':'/URL', 'data':'data'});
  }
}
export default alt.createStore(AddCharacterStore);
