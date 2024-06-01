import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const coachTopicSchedules = await prisma.coachTopicSchedule.findMany();
    return NextResponse.json(coachTopicSchedules);
}

export async function POST(request: Request) {
    const { coach_id, topic_id, schedule_id } = await request.json();

    const newCoachTopicSchedule = await prisma.coachTopicSchedule.create({
        data: {
            coach_id,
            topic_id,
            schedule_id,
        },
    });

    return NextResponse.json(newCoachTopicSchedule);
}

export async function PUT(request: Request) {
    const { coach_id, topic_id, schedule_id, new_coach_id, new_topic_id, new_schedule_id } = await request.json();

    const updatedCoachTopicSchedule = await prisma.coachTopicSchedule.update({
        where: {
            coach_id_topic_id_schedule_id: {
                coach_id,
                topic_id,
                schedule_id,
            },
        },
        data: {
            coach_id: new_coach_id,
            topic_id: new_topic_id,
            schedule_id: new_schedule_id,
        },
    });

    return NextResponse.json(updatedCoachTopicSchedule);
}

export async function DELETE(request: Request) {
    const { coach_id, topic_id, schedule_id } = await request.json();

    const deletedCoachTopicSchedule = await prisma.coachTopicSchedule.delete({
        where: {
            coach_id_topic_id_schedule_id: {
                coach_id,
                topic_id,
                schedule_id,
            },
        },
    });

    return NextResponse.json(deletedCoachTopicSchedule);
}
