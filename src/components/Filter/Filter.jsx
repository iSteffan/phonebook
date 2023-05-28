import PropTypes from 'prop-types';
// import { Input, Label } from './Filter.styled';
import {
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { FiUser } from 'react-icons/fi';

export const Filter = ({ handleInputChange, filter }) => {
  return (
    <FormControl mr={'auto'} ml={'auto'} mb={3} w={'80%'}>
      <FormLabel>Sort contacts by Name:</FormLabel>
      <InputGroup>
        <Input
          width={'317px'}
          value={filter}
          variant="filled"
          placeholder="Enter name"
          onChange={handleInputChange}
        />
        <InputLeftElement pointerEvents="none">
          <Icon as={FiUser} color="grey.800" />
        </InputLeftElement>
      </InputGroup>
    </FormControl>
    // <Label>
    //   Sort contacts by Name:
    //   <br />
    //   <Input
    //     value={filter}
    //     type="text"
    //     name="filter"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //     onChange={handleInputChange}
    //   />
    // </Label>
  );
};

Filter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
