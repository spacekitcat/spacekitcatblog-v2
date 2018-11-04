import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

addDecorator(
  withOptions({
    theme: themes.dark,
    name: 'SPKC atomic elements',
    url: 'http://spacekitcat.com',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: true,
  })
);

configure(() => require('../src/stories/atoms/storybook.js'), module);
configure(() => require('../src/stories/molecules/storybook.js'), module);
