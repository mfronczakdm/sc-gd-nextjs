import { Text, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import { Card, FullWidthMarqueeSection } from 'lib/style-components/PLFullWidthMarquee.styles';

type PLFullWidthMarqueeProps = StyleguideComponentProps & {
  fields: {
    eyebrow: Field<string>;
    heading: Field<string>;
    // textAlign: // TODO: drowdown list?
    landscapeBackgroundImage: ImageField;
    portraitBackgroundImage: ImageField;
    // cta: Item[];
  };
};

const PLFullWidthMarquee = (props: PLFullWidthMarqueeProps): JSX.Element => {
  const { landscapeBackgroundImage, portraitBackgroundImage, heading, eyebrow } = props.fields;

  return (
    // @ts-ignore
    <FullWidthMarqueeSection landscapeBackgroundImage={landscapeBackgroundImage.value?.src} portraitBackgroundImage={portraitBackgroundImage.value?.src}>
      <p>PLFullWidthMarquee Component</p>
      <Card>
        {eyebrow && (
          <p>
            <Text field={eyebrow} />
          </p>
        )}
        {heading && (
          <h2>
            <Text field={heading} />
          </h2>
        )}
      </Card>
    </FullWidthMarqueeSection>
  );
};

export default PLFullWidthMarquee;
