import React, { useState } from 'react';
import {Axios} from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar({ placeholder, buttonText, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [findItem, setFindItem]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`http://localhost:5656/api/books/search/${searchTerm}`)
      .then((response) => 
      console.log(response))
      .catch((error) => console.error(error));
  };
  

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <FormControl
        type="text"
        placeholder={placeholder || 'Search Books...'}
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-primary" style={{ borderColor: '#006633' }} type="submit">
        {buttonText || 'Search'}
      </Button>
    </Form>
  );
}

export default SearchBar;
