import type * as TExcalidraw from "../index";
import "./App.scss";
declare global {
    interface Window {
        ExcalidrawLib: typeof TExcalidraw;
        eaApi: any;
        fifth: any;
    }
}
export default function App(): JSX.Element;
