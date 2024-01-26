import { ListHeaderInterface } from "@/interfaces/header/headerInterface";
import React from "react";

export const ListHeader: React.FC<ListHeaderInterface> = ({ liheader }) => {
    return (
        <>
            <ul>
                <li>{liheader}</li>
            </ul>
        </>
    );
};
