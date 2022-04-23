import { TextField} from '@mui/material';
import React from 'react';
import "./Expenses.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Expenses() {
    return <div className='expenses'>
    <h3>
        Expenses
    </h3>  
    <div className='expensesInput'>
        <TextField id="outlined-basic" label="Expense" variant="outlined"></TextField>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Expenses</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="food" control={<Radio />} label="Food" />
            <FormControlLabel value="travel" control={<Radio />} label="Travel" />
            <FormControlLabel value="clothing" control={<Radio />} label="Clothing" />
            <FormControlLabel value="rent" control={<Radio />} label="Rent" />
            <FormControlLabel value="grocery" control={<Radio />} label="Grocery" />
        </RadioGroup>
        <div>
            <Button variant="contained" size="medium" color="error" endIcon={<SendIcon />}>Submit</Button>
        </div>
        </FormControl>
    </div>  
    </div>;
}

export default Expenses;