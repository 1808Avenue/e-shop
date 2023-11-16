export const selectSidebarStatus = (state: { sidebar: { isOpen: boolean } }) =>
  state.sidebar.isOpen;
