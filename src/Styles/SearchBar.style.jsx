import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  border-bottom: 2px solid #f3f3f3;
  padding: 20px;
  margin-left: 2rem;
`;
export const SearchContent = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;
export const SearchInput = styled.input`
    padding: 12px 20px;
    border: none;
    background: #f7f6f6;
    outline: none;
    margin-right: 20px;
    border-radius: 5px;
    position: relative;
    width: 14rem;
    color: black;
`;
export const IconLink = styled.a`
  text-decoration: none;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 2rem;
`;
export const ProfileContainer = styled.div`
  flex: 2;
  padding-right: 30px;
`;
