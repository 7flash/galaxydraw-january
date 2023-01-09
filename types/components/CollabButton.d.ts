import "./CollabButton.scss";
declare const CollabButton: ({ isCollaborating, collaboratorCount, onClick, isInHamburgerMenu, }: {
    isCollaborating: boolean;
    collaboratorCount: number;
    onClick: () => void;
    isInHamburgerMenu?: boolean | undefined;
}) => JSX.Element;
export default CollabButton;
