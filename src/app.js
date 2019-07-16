const MessageItem = props => {
  return React.createElement('p', { className: 'app-message'}, 'Hello World');
};


class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ['toto', 'titi', 'tata'],
    }
  }

  render() {
    return React.createElement('div', null, [
      React.createElement(MessageItem, null),
    ]);
  }
}

const app = document.getElementById('app');
ReactDOM.render(React.createElement(MessageList), document.getElementById('app'));
