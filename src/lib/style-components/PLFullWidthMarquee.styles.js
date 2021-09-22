import { styled } from '@linaria/react';

// TODO: Linaria is blowing up on on these imports and I don't want to figure out
//   why right now...
// import { orientation, device } from '../../../pattern-library-2/breakpoints.vjs';
const orientationLandscape = `(orientation: landscape)`;
const orientationPortrait = `(orientation: portrait)`;

export const FullWidthMarqueeSection = styled.section`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: ${({ textAlign }) => (textAlign === 'center' ? 'center' : 'space-between')};
  flex-flow: column nowrap;
  align-items: stretch;
  background: ${({ portraitBackgroundImage }) =>
  portraitBackgroundImage ? `url(${portraitBackgroundImage})` : 'initial'}
    center/cover no-repeat;

  @media ${orientationPortrait} {
    flex-flow: column nowrap;
    text-align: center;
  }

  @media ${orientationLandscape} {
    text-align: ${({ textAlign }) => textAlign || 'center'};
    flex-flow: row nowrap;
    background-image: ${({ landscapeBackgroundImage }) =>
  landscapeBackgroundImage ? `url(${landscapeBackgroundImage})` : 'initial'};
    background-position: right center;
    height: 100%;
  }
`;

export const Card = styled.div`
  padding: 100px 0;
  min-height: 400px;
`;
