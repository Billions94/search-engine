import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react"
import "./styles.css"

const Search = () => {



  return (
    <div className='mt-2'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control className='customInput' type="search" placeholder="Search for jobs....." />
        </Form.Group>

        <Button className='customBordRad mt-2' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Search;
