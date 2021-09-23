import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const widths = {
  figure: '200px',
  illustration: '217px',
  full: '100%'
};

export const MultiColumnItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: ${({ rounded }) => (rounded ? '8px' : 'unset')};
  position: relative;
  align-items: ${({ textAlign = 'center' }) =>
  textAlign === 'center' ? textAlign : `flex-${textAlign}`};
  padding-inline-start: ${({ checkmark }) =>
  checkmark ? 'var(--fixed-space-300)' : '0'};

  &::before {
    content: '';
    width: var(--fixed-space-200);
    height: var(--fixed-space-200);
    -webkit-mask: var(--uxp-icon-checkmark);
    mask: var(--uxp-icon-checkmark);
    background-color: #00a4a6;
    margin-block-start: var(--fixed-space--400);
    margin-inline-start: -1rem;
    margin-block-start: 1.5rem;
    position: absolute;
    left: var(--fixed-space-300);
    display: ${({ checkmark }) => (checkmark ? 'block' : 'none')};
  }
`;

// We cannot wrap JSS components with linaria for some reason - guessing typescript
// export const cardImg = styled(Image)`
export const cardImg = css`
  width: auto;
  height: 300px;
  object-fit: contain;
  max-width: ${widths.illustration};
  margin: var(--fixed-space-300) var(--fixed-space-300) 0 var(--fixed-space-300) !important;
`;
