import StyledComponent from "styled-components";
// import Chip from '@mui/material/Chip';


export default function Comp2() {
    const Button1 = StyledComponent.button`border:1px solid red;border-radius:20px`;
    return (
        <Button1>aaaaaaa
{/* 
            <Chip
                classes={{ deleteIcon: 'green' }}
                label="delete icon is green"
                onDelete={() => { }}
            /> */}

        </Button1>
    )
}