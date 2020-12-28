import React, { ReactNode, Ref } from 'react';
import {
  Wrapper,
  ContentWrapper,
  Header,
  Content,
  CloseButton,
  CloseIcon,
  StyledH4,
} from './styled-components';

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = React.forwardRef(
  ({ title, isOpen, onClose, children }: ModalProps, ref: Ref<HTMLDivElement>) => {
    if (!isOpen) {
      return null;
    }

    return (
      <Wrapper>
        <ContentWrapper ref={ref}>
          <Header>
            <StyledH4>{title}</StyledH4>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </Header>
          <Content>{children}</Content>
        </ContentWrapper>
      </Wrapper>
    );
  },
);
