// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the PLFullWidthMarquee component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: 'PLFullWidthMarquee',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'eyebrow', type: CommonFieldTypes.SingleLineText },
      { name: 'heading', type: CommonFieldTypes.RichText },
      { name: 'portraitBackgroundImage', type: CommonFieldTypes.Image },
      { name: 'landscapeBackgroundImage', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
