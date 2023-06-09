import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const DashHomeTrans = () => {

    return(
        <>

            <Body>

                <Contain>

                    <div style={{fontSize:"18px", fontWeight:"700", marginTop:"20px", marginLeft:"20px"}}>History</div>

                    <Top>
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000", width:"5%"}}>S/N</Names>
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Amount</Names>
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Trans ID</Names>
                        {/* <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Email</Names>
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Scenario</Names> */}
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Time</Names>
                        <Names style={{fontSize:"14px", fontWeight:"700", color:"#000000"}}>Date</Names>
                    </Top>

                    <Top>
                        <Names style={{width:"3%"}}>1</Names>
                        <Names>20,000.00</Names>
                        <Names>234rg567yhfxx1235</Names>
                        <Names>12:30am</Names>
                        <Names>Mar. 10, 2023</Names>
                    </Top>

                    <Top>
                        <Names style={{width:"3%"}}>2</Names>
                        <Names>20,000.00</Names>
                        <Names>234rg567yhfxx1235</Names>
                        {/* <Names>jamesdayo@test.com</Names>
                        <Names>Emergency</Names> */}
                        <Names>12:30am</Names>
                        <Names>Mar. 10, 2023</Names>
                    </Top>

                    <Top>
                        <Names style={{width:"3%"}}>3</Names>
                        <Names>20,000.00</Names>
                        <Names>234rg567yhfxx1235</Names>
                        {/* <Names>jamesdayo@test.com</Names>
                        <Names>Emergency</Names> */}
                        <Names>12:30am</Names>
                        <Names>Mar. 10, 2023</Names>
                    </Top>

                    <MobTop 
                    // style={{backgroundColor:"#a8ff37"}}
                    >
                        <Amount>
                            <Trans>N20,000</Trans>
                            <Trans>shdg212jc89u8</Trans>
                        </Amount>

                        <Amount>
                            <Trans style={{color:"rgba(123, 126, 126, 0.992)"}}>01:13pm</Trans>
                            <Trans style={{color:"rgba(123, 126, 126, 0.992)"}}>Mar. 03, 2023</Trans>
                        </Amount>
                    </MobTop>

                    <MobTop 
                    // style={{backgroundColor:"#a8ff37"}}
                    >
                        <Amount>
                            <Trans>N10,000</Trans>
                            <Trans>shdg212jc89u8</Trans>
                        </Amount>

                        <Amount>
                            <Trans style={{color:"rgba(123, 126, 126, 0.992)"}}>01:13pm</Trans>
                            <Trans style={{color:"rgba(123, 126, 126, 0.992)"}}>Mar. 02, 2023</Trans>
                        </Amount>
                    </MobTop>

                    <NavLink style={{textDecoration:"none", color:""}} to="/"><See>See All Transactions</See></NavLink>


                </Contain>

            </Body>

        </>
    )
}

export default DashHomeTrans;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

// const MobTop = styled.div``;

const Trans = styled.h5`
font-size: 13px;
font-weight: 700;
`;

const Amount = styled.div`
width: 90%;
height: 25px;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 20px;
`;

const MobTop = styled.div`
display: none;

@media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 12px;
    // border-bottom: 2px solid #a8ff37;
    border-bottom: 1px solid #000000;
    // border-top: 1px solid #000000;
}
`;

const See = styled.div`
font-size: 12px;
font-weight: 700;
// font-weight: 650;
// color: rgba(123, 126, 126, 0.992);
// color: white;
cursor: pointer;
margin-left: 20px;
margin-top: 20px;
`;

const Names = styled.div`
font-size: 12px;
font-weight: 700;
color: rgba(123, 126, 126, 0.992);
width: 12%;

@media screen and (max-width: 768px) {
    width: 12%;
    font-size: 11px;
}
`;

const Top = styled.div`
width: 95%;
margin-top: 15px;
margin-left: 20px;
display: flex;
justify-content: space-around;
align-items: flex-start;
 
@media screen and (max-width: 425px) {
    display: none;
}
`;

const Contain = styled.div`
width: 95%;
height: 100%;
background-color: white;
border-radius: 10px 0 10px 0;
display: flex;
gap: 1rem;
flex-direction: column;
// justify-content: center;
margin-top: 20px;
padding-bottom: 30px; 
 
@media screen and (max-width: 425px) {
    width: 85%;
}
`;

const Body = styled.div`
width: 100%;
display: flex;
justify-content: center;
// align-items: center;
`;
