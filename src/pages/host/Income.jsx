import React from "react";
import { authRequired } from "../../utils";

export async function loader() {
     await authRequired()
     return null
}

export default function Income() {
    return (
        <h1>This is income</h1>
    )
}