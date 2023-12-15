import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

const FilterOptions = ({setSortBy, sortBy = 'created_at', setOrder}) => {
  console.log(sortBy)

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
            <option value="comment_count">Total comments</option>
          </Form.Select>
          {sortBy==="created_at" && <>
          <Form.Check
            inline
            label="Most recent"
            value="desc"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
            onClick={(event) => {setOrder(event.target.value)}}
          />
          <Form.Check
            inline
            label="Oldest"
            value="asc"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
            onClick={(event) => {setOrder(event.target.value)}}
          /></>}
          {["comment_count", "votes"].includes(sortBy) && <>
          <Form.Check
            inline
            label="Most popular"
            value="desc"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
            onClick={(event) => {setOrder(event.target.value)}}
          />
          <Form.Check
            inline
            label="Least popular"
            value="asc"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
            onClick={(event) => {setOrder(event.target.value)}}
          /></>}
        </Form>
      </Accordion.Body>
    </Accordion>
  );
};

export default FilterOptions;
