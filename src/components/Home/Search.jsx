import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Jobs from "./Jobs";
import { connect } from "react-redux"
import { getJobsAction } from "../../redux/actions";



const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({
   getJobs: (input) => dispatch(getJobsAction(input))
})


const Search = ({ input, setInput, getJobs }) => {



  useEffect(() => {
    getJobs(input);
  }, 
   // eslint-disable-next-line react-hooks/exhaustive-deps
  [input]);

 

  return (
    <Row className='d-flex px-5'>
      <Col md={5} className="mt-4 customSearchBar">
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className='text-light'>
                    <b>Remote Job Search</b>
                </Form.Label>
              <Form.Control
                className="customInput"
                type="search"
                value={input.text}
                onChange={(e) => setInput({ ...input, text: e.target.value })}
                placeholder="Search for jobs....."
              />
            </Form.Group>
          </Form>
        </div>
      </Col>
        <Col md={7}>{input.text ? <Jobs  /> : null}</Col>
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
