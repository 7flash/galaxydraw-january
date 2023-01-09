import React from "react";
import { AppState, Device, ExcalidrawProps } from "../types";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
declare type MobileMenuProps = {
    appState: AppState;
    actionManager: ActionManager;
    renderJSONExportDialog: () => React.ReactNode;
    renderImageExportDialog: () => React.ReactNode;
    setAppState: React.Component<any, AppState>["setState"];
    elements: readonly NonDeletedExcalidrawElement[];
    onCollabButtonClick?: () => void;
    onLockToggle: () => void;
    onPenModeToggle: () => void;
    canvas: HTMLCanvasElement | null;
    isCollaborating: boolean;
    renderCustomFooter?: (isMobile: boolean, appState: AppState) => JSX.Element | null;
    onImageAction: (data: {
        insertOnCanvasDirectly: boolean;
    }) => void;
    renderTopRightUI?: (isMobile: boolean, appState: AppState) => JSX.Element | null;
    renderCustomStats?: ExcalidrawProps["renderCustomStats"];
    renderSidebars: () => JSX.Element | null;
    device: Device;
    renderWelcomeScreen?: boolean;
};
export declare const MobileMenu: ({ appState, elements, actionManager, renderJSONExportDialog, renderImageExportDialog, setAppState, onCollabButtonClick, onLockToggle, onPenModeToggle, canvas, isCollaborating, renderCustomFooter, onImageAction, renderTopRightUI, renderCustomStats, renderSidebars, device, renderWelcomeScreen, }: MobileMenuProps) => JSX.Element;
export {};
