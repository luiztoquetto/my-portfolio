import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 2rem;
`;

const Header = styled.div<{isGlobe: boolean}>`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: ${(props) => props.isGlobe ? 'column' : 'row'};
  justify-content: ${(props) => props.isGlobe ? 'normal' : 'space-between'};
  
  gap: 1rem;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 2rem;
`;

const Title = styled.h1`
  user-select: none;
  font-size: 3rem;
  font-weight: 700;
  color: white;
`;

export { Container, Header, Body, Title };
