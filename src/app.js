const e = React.createElement;

const MessageItemUser = props => {
  return e('span', { className: 'message-item-user'}, props.from);
};

const MessageItem = props => {
  return e('li', { key: 'message-item-' + props.id, className: 'app-message'}, [
    e(MessageItemUser, { key: 'message-item-user', id: props.id, from: props.from}),
    e('span', {key: 'message-item-span'}, ' : '),
    props.text
  ]);
};


class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          id: 1,
          from: 'Jean',
          text: 'Hey, comment ça va',
          date: new Date(),
        },
      ],
    }
  }

  render() {
    return e('div', null, [
      e('ul', { key: 'message-list',  className: 'message-list'}, this.state.messages.map(item => {
        return e(MessageItem, {key: 'message-list-' + item.id,  id: item.id, text: item.text, from: item.from });
      })),
      e('input', { key: 'message-input',  className: 'message-input'}),
      e('button', { key: 'message-button', className: 'send'}, 'Envoyer'),
    ]);
  }
}

const app = document.getElementById('app');
ReactDOM.render(e(MessageList), document.getElementById('app'));
