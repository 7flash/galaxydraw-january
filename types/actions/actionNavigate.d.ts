export declare const actionGoToCollaborator: {
    name: "goToCollaborator";
    trackEvent: {
        category: "collab";
    };
    perform: (_elements: readonly import("../element/types").ExcalidrawElement[], appState: Readonly<import("../types").AppState>, value: any) => {
        appState: Readonly<import("../types").AppState>;
        commitToHistory: false;
    };
    PanelComponent: ({ appState, updateData, data }: import("./types").PanelComponentProps & {
        isInHamburgerMenu: boolean;
    }) => JSX.Element;
} & {
    keyTest?: undefined;
};
