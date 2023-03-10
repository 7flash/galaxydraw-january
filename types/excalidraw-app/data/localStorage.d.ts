import { ExcalidrawElement } from "../../element/types";
export declare const saveUsernameToLocalStorage: (username: string) => void;
export declare const importUsernameFromLocalStorage: () => string | null;
export declare const importFromLocalStorage: () => {
    elements: ExcalidrawElement[];
    appState: {
        theme: string;
        name: string;
        activeTool: {
            type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
            lastActiveToolBeforeEraser: import("../../types").LastActiveToolBeforeEraser;
            locked: boolean;
            customType: null;
        } | {
            type: "custom";
            customType: string;
            lastActiveToolBeforeEraser: import("../../types").LastActiveToolBeforeEraser;
            locked: boolean;
        };
        scrollX: number;
        scrollY: number;
        viewBackgroundColor: string;
        zoom: Readonly<{
            value: import("../../types").NormalizedZoomValue;
        }>;
        shouldCacheIgnoreZoom: boolean;
        showWelcomeScreen: boolean;
        penMode: boolean;
        penDetected: boolean;
        exportBackground: boolean;
        exportEmbedScene: boolean;
        exportWithDarkMode: boolean;
        exportScale: number;
        currentItemStrokeColor: string;
        currentItemBackgroundColor: string;
        currentItemFillStyle: import("../../element/types").FillStyle;
        currentItemStrokeWidth: number;
        currentItemStrokeStyle: import("../../element/types").StrokeStyle;
        currentItemRoughness: number;
        currentItemOpacity: number;
        currentItemFontFamily: number;
        currentItemFontSize: number;
        currentItemTextAlign: string;
        currentItemStrokeSharpness: import("../../element/types").StrokeSharpness;
        currentItemStartArrowhead: import("../../element/types").Arrowhead | null;
        currentItemEndArrowhead: import("../../element/types").Arrowhead | null;
        currentItemLinearStrokeSharpness: import("../../element/types").StrokeSharpness;
        cursorButton: "up" | "down";
        scrolledOutside: boolean;
        openMenu: "canvas" | "shape" | null;
        openSidebar: "library" | "customSidebar" | null;
        isSidebarDocked: boolean;
        lastPointerDownWith: import("../../element/types").PointerType;
        selectedElementIds: {
            [id: string]: boolean;
        };
        previousSelectedElementIds: {
            [id: string]: boolean;
        };
        zenModeEnabled: boolean;
        gridSize: number | null;
        selectedGroupIds: {
            [groupId: string]: boolean;
        };
        editingGroupId: string | null;
        showStats: boolean;
        currentChartType: import("../../element/types").ChartType;
        selectedLinearElement: import("../../element/linearElementEditor").LinearElementEditor | null;
        isLoading: boolean;
        errorMessage: string | null;
        draggingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        resizingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        multiElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawLinearElement> | null;
        selectionElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        isBindingEnabled: boolean;
        startBoundElement: import("../../element/types").NonDeleted<import("../../element/types").ExcalidrawBindableElement> | null;
        suggestedBindings: import("../../element/binding").SuggestedBinding[];
        editingElement: import("../../element/types").NonDeletedExcalidrawElement | null;
        editingLinearElement: import("../../element/linearElementEditor").LinearElementEditor | null;
        isResizing: boolean;
        isRotating: boolean;
        openPopup: "canvasColorPicker" | "backgroundColorPicker" | "strokeColorPicker" | null;
        openDialog: "imageExport" | "help" | null;
        toast: {
            message: string;
            closable?: boolean | undefined;
            duration?: number | undefined;
        } | null;
        viewModeEnabled: boolean;
        fileHandle: import("browser-fs-access").FileSystemHandle | null;
        collaborators: Map<string, import("../../types").Collaborator>;
        pasteDialog: {
            shown: false;
            data: null;
        } | {
            shown: true;
            data: import("../../charts").Spreadsheet;
        };
        pendingImageElementId: string | null;
        showHyperlinkPopup: false | "info" | "editor";
    } | null;
};
export declare const getElementsStorageSize: () => number;
export declare const getTotalStorageSize: () => number;
export declare const getLibraryItemsFromStorage: () => import("../../types").LibraryItems_anyVersion;
