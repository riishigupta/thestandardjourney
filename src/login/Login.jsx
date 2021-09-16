
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body closeButton>
        <h3 className="colo1 cent">SPEAK WITH A FERTILITY SPECIALIST</h3>
        <h5 className="cent">We will call you shortly</h5>
        <h5 className="cent" >Please note that your information is saved on our server as you enter it.</h5>

        <div className="marlef">
          <label className="lfon">
            Name
            <input className="bott1" type="text" required />
          </label>
          <br />
          <label className="lfon">
            Phone
            <input className="bott1" type="text" required />
          </label>
          <br />
          <label className="lfon">
            E-mail
            <input className="bott1" type="text" required />
          </label>
          <br />
          <label className="lfon">I'M INTERESTED IN BECOMING
            <br />
            <select className="bott1 ">
              <option value="">A Parent</option>
              <option value="">An Egg Donor</option>
              <option selected value="">A Surrogate</option>
              <option value="">A Partner Clinic</option>
              <option value="">Others</option>
            </select>
          </label>
          <div>

            <input className="bnm1 bnbm1 cent" type="submit" value="Call Me" />
          </div>
        </div>



      </Modal.Body>
    </Modal>
  )
};
export default Login;
































// import {Row ,Container,Col} from 'react-bootstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook ,faInstagram ,faTwitter,faLinkedinIn } from "@fortawesome/free-solid-svg-icons";
// function Footer()
// {
//     return(
//         <>
//         <div style={{  
//   backgroundImage: "url(" + "./img/foot.jpg" + ")",
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   color:'white',
//   border:'none',
//   marginBottom:'0%',
//   paddingTop:'5%',
//   paddingBottom: '3%',
// }}>
//         <Container>
//         <Row>
//             <Col className="cent bott">
//                 <h6>BECOME A PARENT</h6>
//             </Col>
//             <Col className="cent bott">
//                 <h6> EGG DONOR</h6>
//             </Col>
//             <Col className="cent bott">
//             <h6>SURROGATES</h6>

//             </Col>
//             <Col className="cent bott">
//             <h6>ABOUT US</h6>
//             </Col>
//             <Col className="cent bott">
//             <h6>WHAT'S NEWS</h6>
//             </Col>
//         </Row>
//         </Container>
//         <div className='vbc'>
//         <Container fluid>
//             <Row>
//                 <Col md='3'>

//                 </Col>
//                 <Col md='3'>
//                 <h5>BECOME</h5>
//                 <br></br>
//                 <p>A Parent</p>
//                 <p>An Egg Donor</p>
//                 <p>A Surrogate</p>
//                 <p>A Partner Clinics</p>

//                 </Col>
//                 <Col md='3'>
//                 <h5>EMAIL</h5>
//                 <br></br>
//                 <p><h5>info@elite-ivf.com</h5></p>
//                 <br></br>
//                 <h5>Follow Us</h5>
//                 <p>
//          </p>

//                 </Col>
//                 <Col md='3'>
//                 <h5>PHONE</h5>
//                 <br></br>
//                 <p>USA:  +1(866)354-8348</p>
//                 <p>INDIA:  +91-7000479258</p>
//                 <p>CANADA:  +1(416)960-4050</p>
//                 <p>EUROPE:  +41(44)586-3567</p>

//                 </Col>

//             </Row>
//         </Container>
//         <button>Book an Appointment</button>
//         </div>
//         <h6><center> Copyright © 2020 ELITE I.V.F. All Rights Reserved </center></h6>
//         </div>
//         </>


//     )
// }
// export default Footer;