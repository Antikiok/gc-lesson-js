export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(text) {
    sender = text;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
const messenger1 = createMessenger();
messenger1.sendMessage('Bob');
const messenger2 = createMessenger();
messenger2.setMessage('Good Job');
messenger2.sendMessage('Bob');
const messenger3 = createMessenger();
messenger3.setSender('Gromcode');
messenger3.sendMessage('Bob');
