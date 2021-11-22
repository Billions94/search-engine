import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import "./styles.css";
import Jobs from "./Jobs";

const Search = ({ data, setData, input, setInput }) => {


  console.log('==============> input', input)
  const getJobs = async () => {
    try {
        const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${input.text}&limit=10`);
        if (response.ok) {
          const data = await response.json();
          console.log("i am the data", data.data);
          const newData = data.data;
          setData(newData);
        }
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
      //react-hooks/exhaustive-deps
    getJobs();
  }, [input]);

 

  return (
    <Row className='d-flex px-5'>
      <Col md={5} className="mt-4">
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
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
        <Col md={7}>{input.text ? <Jobs data={data} /> : null}</Col>
    </Row>
  );
};

export default Search;
