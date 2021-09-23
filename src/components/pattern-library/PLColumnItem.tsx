import { Field, RichText, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import { cardImg, MultiColumnItem } from 'lib//style-components/PLColumnItem.styles';

export type PLColumnItemProps = StyleguideComponentProps & {
  fields: {
    title: Field<string>;
    content: Field<string>;
    image: ImageField;
  };
};

function PLColumnItem(props: PLColumnItemProps): JSX.Element {
  console.log('PLColumnItem', props);
  const { title, content, image } = props.fields;

  return (
    <MultiColumnItem>
      {<Image className={cardImg} field={image} />}
      {/*{(image && <Image className={cardImg} field={image} />) || <div className={cardImg} />}*/}
      <h3>
        { title.value }
        {/*<Text field={title} />*/}
      </h3>
      <RichText field={content} />
    </MultiColumnItem>
  );
}

export default PLColumnItem;
