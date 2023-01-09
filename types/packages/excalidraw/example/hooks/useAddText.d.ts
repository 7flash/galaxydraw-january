export default function useAddText({ api, position }: {
    api: any;
    position: any;
}): ((text: any, x: any, y: any, id: any, fontSize: any) => Promise<string>) | undefined;
