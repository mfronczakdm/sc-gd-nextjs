import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import PLColumnItem, { PLColumnItemProps } from 'components/pattern-library/PLColumnItem';
// @ts-ignore
import { MultiColumnGrid } from 'lib/style-components/PLMultiColumnSection.styles';
import { styled } from '@linaria/react';

type PLMultiColumnSectionProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
    columnItems: PLColumnItemProps[]; // does this need to be Item[] ?
  };
};

const Fallback = styled.div`
  min-height: 100px;
  border: 1px solid gray;
`;

const renderCard = (cardProps: PLColumnItemProps): JSX.Element => {
  return <PLColumnItem {...cardProps} />;
};

function PLMultiColumnSection(props: PLMultiColumnSectionProps): JSX.Element {
  console.log('PLMultiColumnSection', props);
  const { heading, body, columnItems = [] } = props.fields || {};

  const columns = columnItems.length <= 2 ? columnItems.length : 3;

  return (
    <Fallback>
      <h2>
        <Text field={heading} />
      </h2>
      <RichText field={body} />
      <MultiColumnGrid {...{ columns }}>{columnItems.map(renderCard)}</MultiColumnGrid>
    </Fallback>
  );
}

export default PLMultiColumnSection;
