import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../../package.json';

/**
 * Adds the PLMultiColumnSection component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest: Manifest): void {
  manifest.addComponent({
    name: 'PLMultiColumnSection',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.RichText },
      {
        name: 'columnItems',
        type: CommonFieldTypes.ContentList,
        // this sets the root path in Sitecore that linked items can be selected from.
        // the path is based on the path the shared items are defined in, under /data/content.
        // Using 'source' is recommended to help content editors find the correct items to refer to,
        // unless they can refer to any item in the whole site.
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Siteglass/ColumnItems`,
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
