import { useState } from 'react';
import './RegistrationForm.css';
import { Button, Col, Form, InputGroup, Row, Alert} from 'react-bootstrap';

const RegistrationForm = () => {
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		city: '',
		state: '',
		zipCode: '',
		tNCAgreed: false
	})

	const [error, setError] = useState({
		firstName: false,
		lastName: false,
		email: false,
		city: false,
		state: false,
		zipCode: false,
		tNCAgreed: false
	})

	const [success, setSuccess] = useState(false)
	
  const handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, email, city, state, zipCode, tNCAgreed } = userDetails

		if(firstName.length >= 2) {
			setError((previousError) => ({
				...previousError,
				firstName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				firstName: true
			}))
		}
	
		if(lastName.length >= 2) {
			setError((previousError) => ({
				...previousError,
				lastName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				lastName: true
			}))
		}
	
		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			setError((previousError) => ({
				...previousError,
				email: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				email: true
			}))
		}
	
		if(city.length >= 3) {
			setError((previousError) => ({
				...previousError,
				city: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				city: true
			}))
		}
	
		if(state.length >= 3) {
			setError((previousError) => ({
				...previousError,
				state: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				state: true
			}))
		}
	
		let zipNumber = parseInt(zipCode)
		if(zipCode.length === 6 && !isNaN(zipNumber)) {
			setError((previousError) => ({
				...previousError,
				zipCode: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				zipCode: true
			}))
		}
	
		if(tNCAgreed) {
			setError((previousError) => ({
				...previousError,
				tNCAgreed: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				tNCAgreed: true
			}))
		}
    
  };

  return (
    <>
      <h1 className="display-4">Event Registration Form</h1>
      {success && (
        <Alert variant="success">Your details were saved successfully!</Alert>
      )}
      <Form onSubmit={handleSubmit} className="registration-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  firstName: e.target.value,
                })
              }
            />
            {error.firstName ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid first name
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  lastName: e.target.value,
                })
              }
            />
            {error.lastName ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid last name
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
              {error.email ? (
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              value={userDetails.city}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  city: e.target.value,
                })
              }
            />
            {error.city ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid city.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              value={userDetails.state}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  state: e.target.value,
                })
              }
            />
            {error.state ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid state.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              value={userDetails.zipCode}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  zipCode: e.target.value,
                })
              }
            />
            {error.zipCode ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid zip code.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" style={{ textAlign: "left" }}>
          <Form.Check
            label="Agree to terms and conditions"
            checked={userDetails.tNCAgreed}
            onChange={() =>
              setUserDetails({
                ...userDetails,
                tNCAgreed: !userDetails.tNCAgreed,
              })
            }
          />
          {error.tNCAgreed && (
            <Form.Control.Feedback type="invalid">
              You need to agree to terms and conditions
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default RegistrationForm;