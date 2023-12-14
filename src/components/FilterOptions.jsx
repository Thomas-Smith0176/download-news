import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

const FilterOptions = ({setSortBy, setOrder}) => {

  return (
    <Accordion>
      <Accordion.Header>Sort Articles</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Form.Label>Sort by...</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(event) => {
            setSortBy(event.target.value)
          }}>
            <option value="created_at">Date uploaded</option>
            <option value="votes">Votes</option>
          </Form.Select>
          <Form.Check
            inline
            label="Descending"
            value="desc"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
            onClick={(event) => {setOrder(event.target.value)}}
          />
          <Form.Check
            inline
            label="Ascending"
            value="asc"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
            onClick={(event) => {setOrder(event.target.value)}}
          />
        </Form>
      </Accordion.Body>
    </Accordion>
  );
};

export default FilterOptions;
