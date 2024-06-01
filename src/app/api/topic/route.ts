import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const topics = await prisma.topic.findMany();
    return NextResponse.json(topics);
}

export async function POST(request: Request) {
    const { topic_name, description, duration, course_id } = await request.json();

    const newTopic = await prisma.topic.create({
        data: {
            topic_name,
            description,
            duration,
            course_id,
        },
    });

    return NextResponse.json(newTopic);
}

export async function PUT(request: Request) {
    const { topic_id, topic_name, description, duration, course_id } = await request.json();

    const updatedTopic = await prisma.topic.update({
        where: {
            topic_id,
        },
        data: {
            topic_name,
            description,
            duration,
            course_id,
        },
    });

    return NextResponse.json(updatedTopic);
}

export async function DELETE(request: Request) {
    const { topic_id } = await request.json();

    const deletedTopic = await prisma.topic.delete({
        where: {
            topic_id,
        },
    });

    return NextResponse.json(deletedTopic);
}
