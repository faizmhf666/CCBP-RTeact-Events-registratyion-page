// Write your code here
const registrationStatusConstants = {
  done: 'REGISTERED',
  none: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventDetails} = props

  switch (eventDetails) {
    case registrationStatusConstants.done:
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
            alt="registered"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case registrationStatusConstants.none:
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case registrationStatusConstants.closed:
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
            alt="registrations closed"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
