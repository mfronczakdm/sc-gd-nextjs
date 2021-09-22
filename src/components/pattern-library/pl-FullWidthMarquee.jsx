import { Text, Field, ImageField, Item } from '@sitecore-jss/sitecore-jss-nextjs';
// import { StyleguideComponentProps } from 'lib/component-props';
import { FullWidthMarqueeSection, Card } from 'lib/style-components/pl-FullWidthMarquee.styles';

// type FullWidthMarqueeProps = StyleguideComponentProps & {
//   fields: {
//     eyebrow: Field<string>;
//     heading: Field<string>;
//     // textAlign: // TODO: drowdown list?
//     landscapeBackgroundImage: ImageField;
//     portraitBackgroundImage: ImageField;
//     cta: Item[];
//   };
// };

function FullWidthMarqueeConnect(props) {
  const { landscapeBackgroundImage, portraitBackgroundImage, heading, eyebrow } = props.fields;

  return (
    <FullWidthMarqueeSection
      portraitBackgroundImage={portraitBackgroundImage.value?.src}
      landscapeBackgroundImage={landscapeBackgroundImage.value?.src}
    >
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
      {/*<code>{JSON.stringify(props)}</code>*/}
    </FullWidthMarqueeSection>
  );
}

export default FullWidthMarqueeConnect;
