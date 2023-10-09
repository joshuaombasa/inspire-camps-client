import React from "react";
import { authRequired } from "../../utils";

export async function loader({request}) {
     await authRequired(request)
     return null
}

export default function Income() {
    return (
        <h1>This is income</h1>
    )
}