import styled from "styled-components"


export const StyledModal = styled.div`
position: fixed;
top:0;
right:0;
bottom:0;
left:0;
//===========
/* background-color: ${props =>
props.specialLook? 'rgba(250,0,0,0.5)' : 'rgba(0,0,0,0.5)'}; */

background-color: rgba(0,0,0,0.5);
// ======var2===fix modal========
// width:100vw;
// hight:100vh;
&:hover{
cursor: pointer;
}

.modal{
max-width:450px;
width:100%;
min-height:450px;
background-color: white;
border-radius: 8px;
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
padding: 24px;
&:hover{
cursor: auto;
}
}
.closeBtn{
position:absolute;
top:15px;
right: 15px;
&:hover{
cursor: pointer;
}
}

`