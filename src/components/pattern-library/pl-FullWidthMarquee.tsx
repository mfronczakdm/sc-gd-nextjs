import {Text, Image, Field, ImageField, Item} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import { styled } from '@linaria/react';

// TODO: Linaria is blowing up on on these imports and I don't want to figure out
//   why right now...
// import { orientation, device } from '../../../pattern-library-2/breakpoints.vjs';
const orientationLandscape = `(orientation: landscape)`;
const orientationPortrait = `(orientation: portrait)`;

type FullWidthMarqueeProps = StyleguideComponentProps & {
  fields: {
    eyebrow: Field<string>;
    heading: Field<string>;
    // textAlign: // TODO: drowdown list?
    landscapeBackgroundImage: ImageField;
    portraitBackgroundImage: ImageField;
    cta: Item[];
  };
};

const FullWidthMarqueeSection = styled.section`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: ${({ textAlign }) =>
  (textAlign === 'center' ? 'center' : 'space-between')};
  flex-flow: column nowrap;
  align-items: stretch;
  background: ${({ portraitBackgroundImage }) => (portraitBackgroundImage ?
  `url(${portraitBackgroundImage})` : 'initial')} center/cover no-repeat;

  @media ${orientationLandscape} {
    flex-flow: column nowrap;
    text-align: center;
  }

  @media ${orientationPortrait} {
    text-align: ${({ textAlign }) => textAlign};
    flex-flow: row nowrap;
    background-image: ${({ landscapeBackgroundImage }) =>
  (landscapeBackgroundImage ? `url(${landscapeBackgroundImage})` : 'initial')};
    background-position: right center;
    height: 100%;
  }
`;

const Card = styled.div`
  padding: 100px 0;
  min-height: 400px;
`


function FullWidthMarqueeConnect(props: FullWidthMarqueeProps): JSX.Element {
  const { landscapeBackgroundImage, portraitBackgroundImage, heading, eyebrow } = props.fields;

  return (
    <FullWidthMarqueeSection
      portraitBackgroundImage={portraitBackgroundImage.value?.src}
      landscapeBackgroundImage={landscapeBackgroundImage.value?.src}
    >
      <Card>
        { eyebrow && <p><Text field={eyebrow} /></p> }
        { heading && <h2><Text field={heading} /></h2> }
      </Card>
      {/*<code>{JSON.stringify(props)}</code>*/}
    </FullWidthMarqueeSection>
  );
}

export default FullWidthMarqueeConnect;
