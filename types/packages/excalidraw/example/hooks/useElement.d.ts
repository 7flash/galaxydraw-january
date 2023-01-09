export default function useElement({ elements, api }: {
    elements: any;
    api: any;
}): {
    updateElement: (id: any, props: any) => void;
    getElement: (id: any) => any;
};
