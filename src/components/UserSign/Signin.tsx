import React from "react";
import styled from "styled-components";
import * as yup from "yup";
// // import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { UserLogin } from "../Global/ReduxState";
// import { useAppDispatch } from "../Global/Store";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { useQueryClient } from "@tanstack/react-query";
// import { useMutation } from "@tanstack/react-query";
// import { UsersLogin } from "../APICALLS/API";
import { NavLink } from "react-router-dom";
import accidentSignin from "../Assets/accidentSignin.svg";


const Signin = () => {
  // const navigate = useNavigate();

  // const dispatch = useAppDispatch();

  // const queryclient = useQueryClient();

  // // Setting up the schemas for our form using yup validator
  const Schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  type formData = yup.InferType<typeof Schema>;

  // const {
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  //   register,
  // } = useForm<formData>({ resolver: yupResolver(Schema) });

  // //   To sign up users:
  // const LoginUsers = useMutation({
  //   mutationKey: ["Login Users"],
  //   mutationFn: UsersLogin,
  //   onSuccess: (data: any) => {
  //     dispatch(UserLogin(data.data));
  //     console.log("User sign up", LoginUsers);
  //   },
  // });

  // const LoggedInUser = handleSubmit((data: any) => {
  //   LoginUsers.mutate(data);
  //   reset();
  //   // navigate("/userhome");
  //   navigate("/");
  //   Swal.fire({
  //     icon: "success",
  //     title: "User Login Successful",
  //     text: LoginUsers!.data!.message,
  //   });
  // });

  return (
    <>
      <Body>
        {/* <Black></Black> */}

        <Hold>
          <Right>
            <RightImg src="/images/accidentSignin.svg" />
          </Right>

          <Left>
            <Form>
              <div
                style={{
                  fontSize: "20px",
                  color: "#039EE6",
                  fontWeight: "700",
                  marginBottom: "20px",
                  textAlign: "center",
                }}>
                Sign in
              </div>

              <Input
                type="text"
                // props={errors?.email ? "outline" : ""}
                placeholder="Email"
                // {...register("email")}
              />
              {/* <p>{errors?.email && errors?.email?.message}</p> */}

              <Input
                // props={errors?.password ? "outline" : ""}
                type="password"
                placeholder="Password"
                // {...register("password")}
              />
              {/* <p>{errors?.password && errors?.password?.message}</p> */}

              {/* <NavLink style={{textDecoration:"none"}} to="/admindashboard"> */}
                <Button type="button">Sign in</Button>
              {/* </NavLink> */}

              <Already>Already have an account? Sign up</Already>
            </Form>
          </Left>
        </Hold>
      </Body>
    </>
  );
};

export default Signin;

// const Body = styled.div``;

// const Body = styled.div``;

const RightImg = styled.img`
  width: 500px;
`;

const Right = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

// const Body = styled.div``;

const Already = styled.div`
  font-size: 13px;
  cursor: pointer;
  color: #6C63FF;
  margin-top: 15px;
  text-align: center;

  @media screen and (max-width: 425px) {
    font-size: 10px;
  }
`;

const Button = styled.button`
  width: 105%;
  height: 40px;
  background: #6C63FF;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: #039ee6c7;
  }
`;

const Input = styled.input
// <{ props: string }>
`
  width: 100%;
  height: 40px;
  border: none;
  box-shadow: 0 0 2px #6C63FF;
  margin-bottom: 20px;
  border-radius: 7px;
  padding-left: 10px;

  @media screen and (max-width: 425px) {
      box-shadow: none;
      border-bottom: 1px solid #6C63FF;
  }

  @media screen and (max-width: 768px) {
      height: 35px;
  }
`;

const Form = styled.form`
  width: 270px;
  height: 300px;
  box-shadow: 0 0 3px #6C63FF;
  border-radius: 10px 0 10px 0;
  padding: 30px;
  padding-right: 40px;

  @media screen and (max-width: 425px) {
      width: 310px;
      padding: 20px;
      padding-right: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: none;
  }

  @media screen and (max-width: 320px) {
      width: 310px;
      padding: 10px;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  // @media screen and (max-width: 768px) {
  //     width: 100%;
  // }
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
      width: 85%;
  }

  @media screen and (max-width: 425px) {
    width: 95%;
  }
`;

const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
      justify-content: center;
  }
`;

// const Black = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// background-color: black;
// opacity: 0.8;
// `;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url("/images/room4.jpg");
  // background-size: cover;
  // position: relative;
`;
