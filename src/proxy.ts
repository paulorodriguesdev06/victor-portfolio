import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    if (request.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
