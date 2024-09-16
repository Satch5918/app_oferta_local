/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import Main from "../../functional/Main";
import Login from "@/components/functional/Login";

const Principal = ({ children }: any) => {
  // cuando exista usuario
  //{ children }: any
  // return user.email !== "" && Number(user.storeId) === 0 ? (
  //   <Main>{children}</Main>
  // ) : (
  //   <Login />
  // );

  return <Login />;
};

export default Principal;
