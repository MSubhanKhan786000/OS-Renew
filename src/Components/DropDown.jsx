import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({ onSelectCategory }) {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="danger">Categories</Button>

      <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelectCategory('All')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectCategory('Men')}>Men</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectCategory('Women')}>Women</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
