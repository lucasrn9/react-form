import styled from 'styled-components';

import { Form } from './components';

function App() {
    

  return (

    <Layout className="layout">

      <Form />

    </Layout>

  );
}

export default App;

const Layout = styled.div`

width: 100vw;

height: 100vh;

display: flex;

justify-content: center;

align-items: center;

`;
