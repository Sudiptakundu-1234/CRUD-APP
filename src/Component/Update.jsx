import React,{useState} from 'react'
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { addUser, getuser, updateUser } from "../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 27%",
    "&>*": {
      marginTop: 20,
    },
  },
});

const Update = () => {
  const classes = useStyles();

  const history = useNavigate();

  const {id} =useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { name, email, phone, address } = user;

  const textHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const clickHandle = async () => {
    await updateUser( id,user);
    history("/user-list");
  };

  const loadData = async () =>{
    const res = await getuser(id)
    setUser(res.data);
  }

  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
      <div>
        <Typography>
          <h2>UserForm</h2>
        </Typography>
        <FormGroup className={classes.container}>
          <FormControl>
            <InputLabel htmlFor="input">Name:</InputLabel>
            <Input name="name" onChange={ textHandle} value={name} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">Email:</InputLabel>
            <Input
              name="email"
              value={email}
              onChange={ textHandle} 
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">phone:</InputLabel>
            <Input
              name="phone"
              value={phone}
              onChange={ textHandle} 
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="input">Address:</InputLabel>
            <Input
              name="address"
              value={address}
              onChange={ textHandle} 
            />
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={ clickHandle}>
              Update
            </Button>
          </FormControl>
        </FormGroup>
      </div>
    </>
  )
}

export default Update