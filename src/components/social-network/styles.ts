import styled from "@emotion/styled";

const Button = styled.button`
    width: 6.875rem;
    height: auto;
  
    display: flex;
    align-items: center;
  
    border: 0;
    background: transparent;
  
    gap: 0.5rem;
  
    cursor: pointer;
    user-select: none;
`;

const Icon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

const Text = styled.span`
  font-size: 1rem;
  color: white;
`;

export { Button, Icon, Text };
