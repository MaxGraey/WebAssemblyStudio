/// <reference types="react" />
import * as React from "react";
import { Directory } from "../model";
export declare class NewDirectoryDialog extends React.Component<{
    isOpen: boolean;
    directory: Directory;
    onCreate: (directory: Directory) => void;
    onCancel: () => void;
}, {
    name: string;
}> {
    constructor(props: any);
    onChangeName: (event: React.ChangeEvent<any>) => void;
    nameError(): string;
    createButtonLabel(): string;
    render(): JSX.Element;
}
