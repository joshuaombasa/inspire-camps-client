import React from "react";
import { authRequired } from "../../utils";

export async function loader() {
     await authRequired()
     return null
}

export default function Dashboard() {
    return (
        <h1>This is dashboard</h1>
    )
}