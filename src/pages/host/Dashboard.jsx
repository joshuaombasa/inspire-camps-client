import React from "react";
import { authRequired } from "../../utils";

export async function loader({request}) {
     await authRequired(request)
     return null
}

export default function Dashboard() {
    return (
        <h1>This is dashboard</h1>
    )
}