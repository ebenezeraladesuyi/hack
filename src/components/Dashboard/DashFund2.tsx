import React from "react";
import styled from "styled-components";

const DashFund = () => {
  return (
    <div>
      <Head>

        <Side>

            <Pay>PAYMENT</Pay>

            <Form></Form>

        </Side>

      </Head>
    </div>
  );
};

export default DashFund;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

// const User = styled.div``;

const Form = styled.form`
height: calc(100% - 20px);
background-color: white;
width: 100%;
border-radius: 10px;
z-index: 400;
margin-top: 27px
`;

const Pay = styled.div`
width: 100%;
background-color: #ff9145;
height: 30px;
border-radius: 10px 10px 0 0;
font-size: 12px;
color: white;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
padding-bottom: 20px;
`;

const Side = styled.div`
width: 330px;
height: 500px;
// background-color: white;
// border-radius: 10px 0 10px 0;
position: relative;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;
// margin-right: 30px;
margin-left: 30px;
`;

const Head = styled.div`
width: 100%;
height: 100vh;
display: flex;
margin-top: 40px;
// justify-content: center;
// align-items: center;
`;
