import tw from 'twin.macro';
import styled from 'styled-components';

const StyledButton = tw.a`items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer`;

const StyledButtonSecondary = styled.button`
  background-color: black;
  color: white;
`;

export { StyledButtonSecondary, StyledButton };
