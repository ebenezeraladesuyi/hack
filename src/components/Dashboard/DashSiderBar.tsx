import React from "react";
import styled from "styled-components";
import DashHeader from "./DashHeader";
import { FaHome, FaCloudUploadAlt }  from "react-icons/fa";
import { MdPointOfSale  } from "react-icons/md";
import { AiFillMessage, AiOutlineLogout, AiOutlineFund } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import  { NavLink } from "react-router-dom";


const SideBar = () => {

    return (

        <>

        <Body>

            <Contain>

                <Top>

                    <Admin>USER</Admin>

                    <NavLink style={{textDecoration:"none", color:"white"}} to="/dashboardhome"><Home>
                        <Icon>
                            <FaHome />
                        </Icon>

                        <HomeText>Home</HomeText>
                    </Home></NavLink>

                    <NavLink style={{textDecoration:"none", color:"white"}} to="/transactions"><Home>
                        <Icon>
                            <MdPointOfSale />
                        </Icon>

                        <HomeText>Transactions</HomeText>
                    </Home></NavLink>

                    <NavLink style={{textDecoration:"none", color:"white"}} to="/makeappointment"><Home>
                        <Icon>
                            <GoPerson />
                        </Icon>

                        <HomeText>Appointment</HomeText>
                    </Home></NavLink>

                    <NavLink style={{textDecoration:"none", color:"white"}} to="/fundwallet"><Home>
                        <Icon>
                            <AiOutlineFund />
                        </Icon>

                        <HomeText>Fund Wallet</HomeText>
                    </Home></NavLink>

                    <NavLink style={{textDecoration:"none", color:"white"}} to="/settings"><Home>
                        <Icon>
                            <AiFillMessage />
                        </Icon>

                        <HomeText>Settings</HomeText>
                    </Home></NavLink>

                </Top>

                <Bottom>
                    <Home>
                        <Icon>
                            <AiOutlineLogout />
                        </Icon>

                        <HomeText>Logout</HomeText>
                    </Home>
                </Bottom>

            </Contain>

        </Body>

        </>
    )
}

export default SideBar;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

// const DashHead = styled.div``;

const Bottom = styled.div``;

const HomeText = styled.div`
font-size: 16px;
// color: #e4e932;
font-weight: 700;
`;

const Icon = styled.div`
font-size: 17px;
margin-right: 10px;
color: #a8ff37;
`;

const Home = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
cursor: pointer;
`;

const Admin = styled.div`
font-size: 20px;
font-weight: 700;
margin-bottom: 30px;
color: #a8ff37;
`;

const Top = styled.div`

`;

const Contain = styled.div`
width: 90%;
height: 90%;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
// align-items: center;
margin-left: 30px;
`;

const Body = styled.div`
width: 250px;
height: calc(100vh - 65px);
display: flex;
justify: content;
align-items: center;
position: fixed;
background-color: #1f1f1f;
// background-color: rgb(0, 33, 37);
`;


