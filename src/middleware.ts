import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('auth-token');

    if (!token){
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }

    return NextResponse.next()

}

export const config = {
    matcher: ['/dashboard', '/about']
}