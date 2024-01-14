import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  gap: 20px;
`;
export const Li = styled.li`
  &:last-child {
    display: ${({ isShow }) => (isShow > 0 ? 'block' : 'none')};
  }
`;
