import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const courses = await prisma.course.findMany();
    return NextResponse.json(courses);
}

export async function POST(request: Request) {
    const { course_name, description, start_date, end_date } = await request.json();

    const newCourse = await prisma.course.create({
        data: {
            course_name,
            description,
            start_date,
            end_date,
        },
    });

    return NextResponse.json(newCourse);
}

export async function PUT(request: Request) {
    const { course_id, course_name, description, start_date, end_date } = await request.json();

    const updatedCourse = await prisma.course.update({
        where: {
            course_id,
        },
        data: {
            course_name,
            description,
            start_date,
            end_date,
        },
    });

    return NextResponse.json(updatedCourse);
}

export async function DELETE(request: Request) {
    const { course_id } = await request.json();

    const deletedCourse = await prisma.course.delete({
        where: {
            course_id,
        },
    });

    return NextResponse.json(deletedCourse);
}
