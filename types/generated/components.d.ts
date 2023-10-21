import type { Schema, Attribute } from '@strapi/strapi';

export interface ViewView extends Schema.Component {
  collectionName: 'components_view_views';
  info: {
    displayName: 'view';
    icon: 'eye';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'view.view': ViewView;
    }
  }
}
