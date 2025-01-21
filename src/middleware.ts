// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleWare(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));

//   // if (request.nextUrl.pathname === "/articles/:path") {
//   //   return NextResponse.redirect(new URL("/time", request.nextUrl));
//   // }
// }

// export const config = {
//   matcher: "/docs/:path*"
// };

// ! Matchers

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher: '/docs/:path*',
// }

// ! conditional statements
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/docs")) {
  //   return NextResponse.rewrite(new URL("/time", request.url)); // will change the URL
  //   // return NextResponse.redirect(new URL("/time", request.url));  // wiill not the URL
  // }

  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/profile", request.url));
  // }

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-headers", "custom-value");
  return response;
}
