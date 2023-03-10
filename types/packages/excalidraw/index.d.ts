import React from "react";
import "../../css/app.scss";
import "../../css/styles.scss";
import { ExcalidrawAPIRefValue, ExcalidrawProps } from "../../types";
declare type PublicExcalidrawProps = Omit<ExcalidrawProps, "forwardedRef">;
export declare const Excalidraw: React.MemoExoticComponent<React.ForwardRefExoticComponent<PublicExcalidrawProps & React.RefAttributes<ExcalidrawAPIRefValue>>>;
export { getSceneVersion, isInvisiblySmallElement, getNonDeletedElements, } from "../../element";
export { defaultLang, languages } from "../../i18n";
export { restore, restoreAppState, restoreElements, restoreLibraryItems, } from "../../data/restore";
export { exportToCanvas, exportToBlob, exportToSvg, serializeAsJSON, serializeLibraryAsJSON, loadLibraryFromBlob, loadFromBlob, loadSceneOrLibraryFromBlob, getFreeDrawSvgPath, exportToClipboard, mergeLibraryItems, } from "../../packages/utils";
export { isLinearElement } from "../../element/typeChecks";
export { FONT_FAMILY, THEME, MIME_TYPES } from "../../constants";
export { mutateElement, newElementWith, bumpVersion, } from "../../element/mutateElement";
export { parseLibraryTokensFromUrl, useHandleLibrary, } from "../../data/library";
export { sceneCoordsToViewportCoords, viewportCoordsToSceneCoords, } from "../../utils";
export { Sidebar } from "../../components/Sidebar/Sidebar";
