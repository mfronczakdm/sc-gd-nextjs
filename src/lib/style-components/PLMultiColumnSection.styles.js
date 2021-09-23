import { styled } from '@linaria/react';

const gridBreakpoints = {
  xs: 0,
  sm: 520,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1720
};

const size = {
  mobileSm: 320, // Nuanced mobile sizes, it's important that we can have these to better target smaller screens
  mobile: 375, // Nuanced mobile sizes, it's important that we can have these to better target smaller screens
  mobileLg: gridBreakpoints.sm,
  tablet: gridBreakpoints.md,
  tabletLg: gridBreakpoints.lg,
  laptop: gridBreakpoints.xl,
  mostCommon: 1366,
  laptopLg: 1440,
  desktopSm: gridBreakpoints.xxl,
  desktop: 1920,
  desktopLg: 2360
};

// SiteGlass breakpoint mixins
const device = {
  mobileSm: `(min-width: ${size.mobileSm}px)`,
  mobile: `(min-width: ${size.mobile}px)`,
  mobileLg: `(min-width: ${size.mobileLg}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletLg: `(min-width: ${size.tabletLg}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  mostCommon: `(min-width: ${size.mostCommon}px)`,
  laptopLg: `(min-width: ${size.laptopLg}px)`,
  desktopSm: `(min-width: ${size.desktopSm}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopLg: `(min-width: ${size.desktopLg}px)`
};

export const MultiColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: ${({ gridlines }) => (gridlines ? 'solid #CFD4D6' : 'none')};
  border-width: 0.0625em 0 0 0.0625em;

  > * {
    border: ${({ gridlines }) => (gridlines ? 'solid #CFD4D6' : 'none')};
    margin: ${({ separated }) => (separated ? '0.75rem' : 'none')};
    border-width: 0 0.0625em 0.0625em 0;
    align-items: ${({ align }) => (align === 'start' ? 'flex-start' : `${align}`)};
    display: flex;
    flex-direction: column;
    align-self: inherit;

    > section {
      height: 100%;
      width: 100%;

      > *:last-child {
        margin-top: auto;
      }

      .tag-label {
        width: fit-content;
      }
    }
  }

  @media only screen and ${device.mobileLg} {
    grid-template-columns: ${({ tabletCols }) => `repeat(${tabletCols}, minmax(200px, 1fr))`};
  }

  @media only screen and ${device.tabletLg} {
    grid-template-columns: ${({ columns }) => `repeat(${columns}, minmax(200px, 1fr))`};
  }
`;
