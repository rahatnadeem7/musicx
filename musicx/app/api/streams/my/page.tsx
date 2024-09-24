import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await getServerSession();
    console.log("Session:", session); // Debugging session information

    // Check if session is valid and user email exists
    if (!session || !session.user?.email) {
        return NextResponse.json({
            message: "Unauthenticated"
        }, {
            status: 403
        });
    }

    const email = session.user.email;
    
    // Find the user by email
    const user = await prismaClient.user.findFirst({
        where: { email }
    });

    if (!user) {
        return NextResponse.json({
            message: "User not found"
        }, { status: 404 });
    }

    // Fetch streams associated with the user
    const streams = await prismaClient.stream.findMany({
        where: {
            userId: user.id
        },
        include: {
            _count: {
                select: {
                    upvotes: true
                }
            },
            upvotes: {
                where: {
                    userId: user.id
                }
            }
        }
    });

    // Return the streams with upvotes and haveUpvoted status
    return NextResponse.json({
        streams: streams.map(({ _count, ...rest }) => ({
            ...rest,
            upvotes: _count.upvotes,
            haveUpvoted: rest.upvotes.length > 0
        }))
    });
}
