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

  const bgProps = {
    landscapeBackgroundImage: landscapeBackgroundImage.value?.src,
    portraitBackgroundImage: portraitBackgroundImage.value?.src,
  };

  return (
    <>
      <FullWidthMarqueeSection {...bgProps}>
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
      <code>{JSON.stringify(props)}</code>
    </>
  );
};

export default PLFullWidthMarquee;
