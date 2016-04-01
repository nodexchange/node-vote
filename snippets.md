** USEFUL ATOM REACT SNIPPETS **

'.source.js':
  'React ES6 Component':
    'prefix': 'rc'
    'body': """
              import React from 'react';

              class ${1:MyComponent} extends React.Component {
                render() {
                  return (${2:<div>MyComponent</div>});
                }
              }
              export default ${1:MyComponent};
            """
  'React ES6 Action':
    'prefix': 'rca'
    'body': """
              import alt from '../alt';

              class ${1:MyComponent}Actions {
                constructor() {
                  this.generateActions('${1:MyComponent}Actions')
                }

                action(props) {
                  // $.ajax({'type':'POST', 'url':'/URL', 'data':'data'});
                }
              }
              export default alt.createActions(${1:MyComponent}Actions);
            """
  'React ES6 Store':
    'prefix': 'rcs'
    'body': """
              import alt from '../alt';
              import ${1:MyComponent}Actions from '../actions/${1:MyComponent}Actions'

              class ${1:MyComponent}Store {
                constructor() {
                  this.bindActions(${1:MyComponent}Actions)
                }

                on${1:MyComponent}Success(successMessage) {
                  // $.ajax({'type':'POST', 'url':'/URL', 'data':'data'});
                }
                on${1:MyComponent}Fail(failMessage) {
                  // $.ajax({'type':'POST', 'url':'/URL', 'data':'data'});
                }
              }
              export default alt.createStore(${1:MyComponent}Store);
            """
  'React ES6 Component with Constructor':
    'prefix': 'rcc'
    'body': """
              import React, {PropTypes} from 'react';

              export default class ${1:MyComponent} extends React.Component {
                constructor(props) {
                  super(props);
                }

                render() {
                  return (${2:<div>MyComponent</div>});
                }
              }

              ${1}.propTypes = {
              };

            """
  'React ES6 Constructor':
    'prefix': 'rconst'
    'body': """
              constructor(props) {
                super(props);
                ${1}
              }

            """
  'React ES6 Functional Component':
    'prefix': 'rfunc'
    'body': """
              import React, {PropTypes} from 'react';

              export const ${1} = (props) => {
                return (${2:<div>MyComponent</div>});
              }

              ${1}.propTypes = {
              };
            """
  'React ES6 bind method to this':
    'prefix': 'rbm',
    'body': """
              this.${1} = this.${1}.bind(this);
            """
  'React ES6 props definition':
    'prefix': 'rpd',
    'body': """
              ${1}.propTypes = {
                ${2}
              };
            """


  # PropType string
  'React PropType string':
    'prefix': 'rpstr',
    'body': "${1:myProp}: PropTypes.string,"
  'React PropType string required':
    'prefix': 'rpstrr',
    'body': "${1:myProp}: PropTypes.string.isRequired,"

  # PropType number
  'React PropType number':
    'prefix': 'rpn',
    'body': "${1:myProp}: PropTypes.number,"
  'React PropType number required':
    'prefix': 'rpnr',
    'body': "${1:myProp}: PropTypes.number.isRequired,"

  # PropType object
  'React PropType object':
    'prefix': 'rpo',
    'body': "${1:myProp}: PropTypes.object,"
  'React PropType object required':
    'prefix': 'rpor',
    'body': "${1:myProp}: PropTypes.object.isRequired,"

  # PropType array
  'React PropType array':
    'prefix': 'rpa',
    'body': "${1:myProp}: PropTypes.array,"
  'React PropType array required':
    'prefix': 'rpar',
    'body': "${1:myProp}: PropTypes.array.isRequired,"

  # PropType bool
  'React PropType bool':
    'prefix': 'rpb',
    'body': "${1:myProp}: PropTypes.bool,"
  'React PropType bool required':
    'prefix': 'rpbr',
    'body': "${1:myProp}: PropTypes.bool.isRequired,"

  # PropType element
  'React PropType element':
    'prefix': 'rpe',
    'body': "${1:myProp}: PropTypes.element,"
  'React PropType element required':
    'prefix': 'rper',
    'body': "${1:myProp}: PropTypes.element.isRequired,"

  # PropType function
  'React PropType function':
    'prefix': 'rpf',
    'body': "${1:myProp}: PropTypes.func,"
  'React PropType function required':
    'prefix': 'rpfr',
    'body': "${1:myProp}: PropTypes.func.isRequired,"

  # PropType shape
  'React PropType shape':
    'prefix': 'rps',
    'body': """
              ${1:myProp}: PropTypes.shape({
                ${2}
              }),
            """
  'React PropType shape required':
    'prefix': 'rpsr',
    'body': """
              ${1:myProp}: PropTypes.shape({
                ${2}
              }).isRequired,
            """
