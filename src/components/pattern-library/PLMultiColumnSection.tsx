import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import PLColumnItem, { PLColumnItemProps } from 'components/pattern-library/PLColumnItem';
// @ts-ignore
import { MultiColumnGrid } from 'lib/style-components/PLMultiColumnSection.styles';

type PLMultiColumnSectionProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
    columnItems: PLColumnItemProps[]; // does this need to be Item[] ?
  };
};

const renderCard = (cardProps: PLColumnItemProps): JSX.Element => {
  return <PLColumnItem {...cardProps} />;
};

function PLMultiColumnSection(props: PLMultiColumnSectionProps): JSX.Element {
  console.log('PLMultiColumnSection', props);
  const { heading, body, columnItems = [] } = props.fields || {};

  const columns = columnItems.length <= 2 ? columnItems.length : 3;

  return (
    <div>
      <h2>
        <Text field={heading} />
      </h2>
      <RichText field={body} />
      <MultiColumnGrid {...{ columns }}>{columnItems.map(renderCard)}</MultiColumnGrid>
    </div>
  );
}

export default PLMultiColumnSection;
