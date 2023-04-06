import { useEffect, useState } from "react";

const useJwtToken = (email) => {
  const [jwtToken, setJwtToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accesstoken) {
            //    navigate("/");
            localStorage.setItem("jwtAccessToken", data.accesstoken);
            setJwtToken(data.accesstoken);
          }
        });
    }
  }, [email]);
  return jwtToken;
};

export default useJwtToken;
