import type { Schema, Struct } from '@strapi/strapi';

export interface UiElementsCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_elements_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    bg_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui-elements.cta': UiElementsCta;
    }
  }
}
