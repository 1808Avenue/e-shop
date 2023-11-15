export const selectOptions = [...Array(5)].map((_, i) => {
  const step = 5;
  return { value: step * (i + 1) };
});

export const selectStyles = {
  token: {
    motionDurationMid: '0',
    colorPrimary: '#00000014',
    colorPrimaryHover: '#0000004d',
    controlItemBgHover: 'rgba(124, 40, 145, 0.8)',
    fontFamily: 'Raleway',
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
    },
  },
};

export const paginationStyles = {
  token: {
    colorPrimary: '#00000014',
    motionDurationMid: '0',
  },
  components: {
    Pagination: {
      itemActiveBg: '#000000cc',
      colorBgTextHover: '#00000014',
      colorPrimaryHover: '0',
    },
  },
};

export const dropdownStyles = {
  border: '1px solid rgba(0, 0, 0, 0.20)',
  background: '#FFF',
  padding: 0,
};
