import styled from'styled-components';

export const Wrapper = styled.div`
background-color: white;
width: 300px;
height: 450px;
padding: 16px 0;
border-radius: 8px;
border: 2px solid #5390D9 ;
padding: 16px 8px;
`;

export const Formulary = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const Field = styled.input`
margin-bottom: 5px;
border-radius: 8px;
border: 1px solid #ccc;
width: 90%;
height: 36px;
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
font-weight: bold;
`;

export const Personal = styled.div`
width: 90%;
display: flex;
justify-content: flex-start;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const Idade = styled.div`

`;

export const Sexo = styled.div`
margin-left: 32px;
`;

export const Title = styled.span`
display:block;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
font-weight: bold;
color: rgb(117,117,117);
`;

export const Select = styled.select`
border: solid 1px #ccc;
border-radius: 4px;
height: 28px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
cursor: pointer;
`;

export const Button = styled.button`
height: 40px;
width: 70%;
margin-top: 8px;
border-radius: 4px;
border: none;
background-color: #5390D9;
color: white;
font-size: 20px;
text-align: center;
font-weight: bold;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Helvetica Neue',sans-serif;
cursor: pointer;
&:hover{
    background-color: #457aba;
}
`;

export const Message = styled.div`
margin-top: 4px;
text-align: center;
`;