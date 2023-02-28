import styled from "styled-components";

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;
export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align || ""};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }
`;
export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "4.5rem";

      case "h2":
        return "3rem";
      case "h3":
        return "2rem";

      case "h4":
        return "1.2rem";
      default:
        return;
    }
  }};
`;
export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 2rem;
`;
export const IconContainer = styled.div`
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.white;
      case "blue":
        return theme.colors.secondary;
      default:
        return;
    }
  }};
  font-size: ${({ size }) => size};
`;
export const Particle = styled.img`
  position: absolute;
  top: ${({ initialTop }) => initialTop};
  left: ${({ initialLeft }) => initialLeft};
  right: ${({ initialRight }) => initialRight};
  bottom: ${({ initialBottom }) => initialBottom};
  transform: rotate(${({ rotate }) => rotate});
`;
