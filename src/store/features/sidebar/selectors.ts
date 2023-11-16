import { RootState } from '../..';

export const selectSidebarStatus = (state: RootState) => state.sidebar.isOpen;
