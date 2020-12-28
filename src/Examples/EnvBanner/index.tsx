import React, { FC } from "react";
import { Row } from "../Grid";
import styled from "styled-components";

export type Env = "dev" | "test" | "prod"

const EnvBannerComponent: FC<{ className?: string; env?: Env }> = ({ className, env }) => {
  return (
    !["dev", "test"].includes(env || "") ? null : (
      <Row className={className} justify="center" align="center">{`Środowisko: ${
        env === "dev" ? "Deweloperskie" : "Testowe"
      }`}
      </Row>
    ));
};

export const EnvBanner = styled(EnvBannerComponent)`
  height: 50px;
  background-color: ${(p) => (p.env === "dev" ? p.theme.colors.green : p.theme.colors.yellow)};
  @media print {
    display: none;
  }
`;
