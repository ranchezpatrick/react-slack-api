import axios from "axios";
import { useState } from "react";

const RegistraionForm = (props) => {
  const [users, setUsers] = useState([]);

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
      setUsers(res);
      console.log(res);
    });
  };

  const showUsers = () => {
    axios({
      method: "get",
      url: "http://206.189.91.54/api/v1/users",
      headers: {
        "access-token": "9gTDoFw9iQSja4u6tZSCxA",
        'client': "hVZIHPy5snFp3sg6ADH_tg",
        'expiry': "1633567055",
        'uid': "3212cs1231@example.com",
      },
    }).then((res) => {
      console.log(res);
    });
  };


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
