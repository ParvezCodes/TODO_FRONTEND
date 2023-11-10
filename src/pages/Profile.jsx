import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  const style1 = { textAlign: "center", margin: "3rem 0 6rem 0" };

  return loading ? (
    <Loader />
  ) : (
    <div style={style1}>
      <h1>Name : {user?.name}</h1>
      <p>Email : {user?.email}</p>
      <Footer />
    </div>
  );
};

export default Profile;
