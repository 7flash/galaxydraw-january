import { ActionManager } from "../actions/manager";
import { AppState, ExcalidrawProps } from "../types";
declare const Footer: ({ appState, actionManager, renderCustomFooter, showExitZenModeBtn, renderWelcomeScreen, }: {
    appState: AppState;
    actionManager: ActionManager;
    renderCustomFooter?: ExcalidrawProps["renderFooter"];
    showExitZenModeBtn: boolean;
    renderWelcomeScreen: boolean;
}) => JSX.Element;
export default Footer;
