import React from "react";
import { authRequired } from "../../utils";

export async function loader() {
    await authRequired()
}

export default function Income() {
    return (
        <h1>This is income</h1>
    )
}