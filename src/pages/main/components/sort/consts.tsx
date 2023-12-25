export const selectOptions = [
  {
    value: 'default',
    label: 'Default',
    key: '0',
  },
  {
    value: 'date&desc',
    label: 'Date descending',
    key: '1',
  },
  {
    value: 'date&asc',
    label: 'Date in ascending order',
    key: '2',
  },
  {
    value: 'title&desc',
    label: 'Name descending',
    key: '3',
  },
  {
    value: 'title&asc',
    label: 'Name in ascending order',
    key: '4',
  },
  {
    value: 'price&desc',
    label: 'Price descending',
    key: '5',
  },
  {
    value: 'price&asc',
    label: 'Price in ascending order',
    key: '6',
  },
  {
    value: 'pop&desc',
    label: 'Popularity descending',
    key: '7',
  },
  {
    value: 'pop&asc',
    label: 'Popularity in ascending order',
    key: '8',
  },
];

export const selectStyles = {
  token: {
    colorPrimary: '#00000014',
    colorPrimaryHover: '#0000004d',
    controlItemBgHover: 'rgba(124, 40, 145, 0.8)',
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.2,
    controlOutline: '0',
    borderRadius: 0,
  },
  components: {
    Select: {
      optionActiveBg: 'rgba(0, 0, 0, 0.06)',
      optionSelectedBg: 'rgba(0, 0, 0, 0.20)',
      optionFontSize: 18,
      optionHeight: 36,
      optionSelectedFontWeight: 400,
      borderRadius: 4,
      fontSize: 20,
    },
  },
};

export const dropdownStyles = {
  border: '1px solid rgba(0, 0, 0, 0.20)',
  background: '#fff',
  boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.25)',
  padding: 10,
  minWidth: 320,
};
