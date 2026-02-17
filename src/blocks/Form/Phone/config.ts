import type { Block } from 'payload'

export const PhoneField: Block = {
  slug: 'phone',
  interfaceName: 'PhoneField',
  labels: {
    singular: 'Phone Number Field',
    plural: 'Phone Number Fields',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Field Name (used as key in submission)',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      label: 'Label',
      required: true,
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      defaultValue: '+44 7911 123456',
    },
    {
      name: 'defaultCountry',
      type: 'select',
      label: 'Default Country',
      defaultValue: 'GB',
      options: [
        { label: 'United Kingdom (+44)', value: 'GB' },
        { label: 'United States (+1)', value: 'US' },
        { label: 'Bangladesh (+880)', value: 'BD' },
        { label: 'Any / International', value: 'INTL' },
      ],
    },
    {
      name: 'required',
      type: 'checkbox',
      label: 'Required',
      defaultValue: false,
    },
    {
      name: 'width',
      type: 'number',
      label: 'Field Width (%)',
    },
  ],
}
