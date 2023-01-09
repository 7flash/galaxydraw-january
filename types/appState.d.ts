import { AppState, NormalizedZoomValue } from "./types";
export declare const getDefaultAppState: () => Omit<AppState, "offsetTop" | "offsetLeft" | "width" | "height">;
export declare const clearAppStateForLocalStorage: (appState: Partial<AppState>) => {
    theme?: string | undefined;
    name?: string | undefined;
    activeTool?: {
        type: "line" | "arrow" | "text" | "selection" | "rectangle" | "diamond" | "ellipse" | "image" | "freedraw" | "eraser";
        lastActiveToolBeforeEraser: import("./types").LastActiveToolBeforeEraser;
        locked: boolean;
        customType: null;
    } | {
        type: "custom";
        customType: string;
        lastActiveToolBeforeEraser: import("./types").LastActiveToolBeforeEraser;
        locked: boolean;
    } | undefined;
    scrollX?: number | undefined;
    scrollY?: number | undefined;
    viewBackgroundColor?: string | undefined;
    zoom?: Readonly<{
        value: NormalizedZoomValue;
    }> | undefined;
    shouldCacheIgnoreZoom?: boolean | undefined;
    showWelcomeScreen?: boolean | undefined;
    penMode?: boolean | undefined;
    penDetected?: boolean | undefined;
    exportBackground?: boolean | undefined;
    exportEmbedScene?: boolean | undefined;
    exportWithDarkMode?: boolean | undefined;
    exportScale?: number | undefined;
    currentItemStrokeColor?: string | undefined;
    currentItemBackgroundColor?: string | undefined;
    currentItemFillStyle?: import("./element/types").FillStyle | undefined;
    currentItemStrokeWidth?: number | undefined;
    currentItemStrokeStyle?: import("./element/types").StrokeStyle | undefined;
    currentItemRoughness?: number | undefined;
    currentItemOpacity?: number | undefined;
    currentItemFontFamily?: number | undefined;
    currentItemFontSize?: number | undefined;
    currentItemTextAlign?: string | undefined;
    currentItemStrokeSharpness?: import("./element/types").StrokeSharpness | undefined;
    currentItemStartArrowhead?: import("./element/types").Arrowhead | null | undefined;
    currentItemEndArrowhead?: import("./element/types").Arrowhead | null | undefined;
    currentItemLinearStrokeSharpness?: import("./element/types").StrokeSharpness | undefined;
    cursorButton?: "up" | "down" | undefined;
    scrolledOutside?: boolean | undefined;
    openMenu?: "canvas" | "shape" | null | undefined;
    openSidebar?: "library" | "customSidebar" | null | undefined;
    isSidebarDocked?: boolean | undefined;
    lastPointerDownWith?: import("./element/types").PointerType | undefined;
    selectedElementIds?: {
        [id: string]: boolean;
    } | undefined;
    previousSelectedElementIds?: {
        [id: string]: boolean;
    } | undefined;
    zenModeEnabled?: boolean | undefined;
    gridSize?: number | null | undefined;
    selectedGroupIds?: {
        [groupId: string]: boolean;
    } | undefined;
    editingGroupId?: string | null | undefined;
    showStats?: boolean | undefined;
    currentChartType?: import("./element/types").ChartType | undefined;
    selectedLinearElement?: import("./element/linearElementEditor").LinearElementEditor | null | undefined;
};
export declare const cleanAppStateForExport: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | null | undefined;
};
export declare const clearAppStateForDatabase: (appState: Partial<AppState>) => {
    viewBackgroundColor?: string | undefined;
    gridSize?: number | null | undefined;
};
export declare const isEraserActive: ({ activeTool, }: {
    activeTool: AppState["activeTool"];
}) => boolean;
