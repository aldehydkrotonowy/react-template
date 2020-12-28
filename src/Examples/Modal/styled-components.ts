import styled from 'styled-components';
import { Close } from '../Icons';
import { H4 } from '../Typography';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.background};
  padding: 24px 30px 24px 30px;
  border-radius: 4px;
  border-color: ${(p) => p.theme.colors.boxBorder};
`;

export const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledH4 = styled(H4)`
  font-size: 24px;
  margin-bottom: 0;
`;

export const Content = styled.div`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  flex-grow: 1;
  padding-top: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(p) => p.theme.colors.grayIcon};
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.primary};
`;
