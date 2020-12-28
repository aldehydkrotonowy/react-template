import styled from "styled-components";

export const Badge = styled.div`
  text-transform: uppercase;
  font-size: ${(p) => p.theme.fontSizeXSmall};
  background-color: ${(p) => p.theme.colors.grayLight};
  color: ${(p) => p.theme.colors.white};
  padding: 4px;
  border-radius: ${(p) => p.theme.smallBorderRadius};
`

export default Badge;
