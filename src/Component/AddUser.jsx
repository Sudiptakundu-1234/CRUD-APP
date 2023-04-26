import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { addUser } from "../Api/Api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 27%",
    "&>*": {
      marginTop: 20,
    },
  },
});

const AddUser = () => {
  const classes = useStyles();

  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { name, email, phone, address } = user;

  const textHandlde = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const clickHandle = async () => {
    await addUser(user);
    history("/user-list");
  };

  return (
    <>
      <div>
        <Typography>
          <h2>UserForm</h2>
        </Typography>
        <FormGroup className={classes.container}>
          <FormControl>
            <InputLabel htmlFor="input">Name:</InputLabel>
            <Input name="name" onChange={(e) => textHandlde(e)} value={name} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">Email:</InputLabel>
            <Input
              name="email"
              value={email}
              onChange={textHandlde}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">phone:</InputLabel>
            <Input
              name="phone"
              value={phone}
              onChange={textHandlde}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">Address:</InputLabel>
            <Input
              name="address"
              value={address}
              onChange={ textHandlde} 
            />
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={clickHandle}>
              Submit
            </Button>
          </FormControl>
        </FormGroup>
      </div>
    </>
  );
};

export default AddUser;
