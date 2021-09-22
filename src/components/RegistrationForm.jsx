import axios from "axios";
import { useState } from "react";

const RegistraionForm = (props) => {
  const handleButton = () => {
    axios({
      method: "post",
      url: "http://206.189.91.54//api/v1/auth/",
      data: {
        'email': "3212cs1231@example.com",
        'password': "12345678",
        'password_confirmation': "12345678",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  const handleButton2 = () => {
    axios({
      method: "post",
      url: "http://206.189.91.54//api/v1/auth/sign_in",
      data: {
        'email': "3212cs1231@example.com",
        'password': "12345678", 
      },
    }).then((res) => {
      console.log(res);
      axios({
        method: "get",
        url: "http://206.189.91.54//api/v1/users",
        header: {
          "access-token": 'U2Ww-w8OlBBELchDq12khg',
          'client': "R6UjN1vWOAk8O86Rqa0DWA",
          'expiry': "1633519041",
          'uid': "3212cs1231@example.com",
        },
      }).then((res) => {
        console.log(res);
        setUsers(res);
      });
    });
  };

  const showUsers = () => {
    
  };

  const [users, setUsers] = useState([]);

  return (
    <div className='registration-wrapper'>
      <button onClick={handleButton}>Register</button>
      <button onClick={handleButton2}>Login</button>
      <button onClick={showUsers}>Expo</button>
      <p>{users} {props.name}</p>
    </div>
  );
};

export default RegistraionForm;
