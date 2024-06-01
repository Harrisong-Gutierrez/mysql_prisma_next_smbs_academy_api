import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'




export async function GET() {

    const coach = await prisma.coach.findMany()

    return NextResponse.json([coach])
}

export async function POST(request: Request) {
    const { coach_id, coach_name, email, phone_number, course_id } = await request.json()

   const newCoach = await prisma.coach.create({
    data: {
        coach_id,
        coach_name,
        email,
        phone_number,
        course_id
    }
   })

    return NextResponse.json([newCoach])
}


export async function PUT(request: Request) {
    const { coach_id, coach_name, email, phone_number, course_id } = await request.json()

    const updatedCoach = await prisma.coach.update({
        where: {
            coach_id: coach_id 
        },
        data: {
            coach_name,
            email,
            phone_number,
            course_id
        }
    })

    return NextResponse.json([updatedCoach])
}

export async function DELETE(request: Request) {
    const { coach_id } = await request.json()

    const deletedCoach = await prisma.coach.delete({
        where: {
            coach_id: coach_id 
        }
    })

    return NextResponse.json([deletedCoach])
}
