import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const coachTopics = await prisma.coachTopic.findMany();
    return NextResponse.json(coachTopics);
}

export async function POST(request: Request) {
    const { coach_id, topic_id } = await request.json();

    const newCoachTopic = await prisma.coachTopic.create({
        data: {
            coach_id,
            topic_id,
        },
    });

    return NextResponse.json(newCoachTopic);
}

export async function PUT(request: Request) {
    const { coach_id, topic_id, new_coach_id, new_topic_id } = await request.json();

    const updatedCoachTopic = await prisma.coachTopic.update({
        where: {
            coach_id_topic_id: {
                coach_id,
                topic_id,
            },
        },
        data: {
            coach_id: new_coach_id,
            topic_id: new_topic_id,
        },
    });

    return NextResponse.json(updatedCoachTopic);
}

export async function DELETE(request: Request) {
    const { coach_id, topic_id } = await request.json();

    const deletedCoachTopic = await prisma.coachTopic.delete({
        where: {
            coach_id_topic_id: {
                coach_id,
                topic_id,
            },
        },
    });

    return NextResponse.json(deletedCoachTopic);
}
