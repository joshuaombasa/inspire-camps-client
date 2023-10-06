import React from "react";

import { authRequired } from "../../utils";

export async function loader() {
    await authRequired()
    return null
}

export default function Reviews() {
    return (
        <h1>This is reviews</h1>
    )
}