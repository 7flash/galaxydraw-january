import { NonDeletedExcalidrawElement } from "../element/types";
import { AppState, ExportOpts, BinaryFiles } from "../types";
import "./ExportDialog.scss";
import { ActionManager } from "../actions/manager";
export declare type ExportCB = (elements: readonly NonDeletedExcalidrawElement[], scale?: number) => void;
export declare const JSONExportDialog: ({ elements, appState, files, actionManager, exportOpts, canvas, }: {
    elements: readonly NonDeletedExcalidrawElement[];
    appState: AppState;
    files: BinaryFiles;
    actionManager: ActionManager;
    exportOpts: ExportOpts;
    canvas: HTMLCanvasElement | null;
}) => JSX.Element;
