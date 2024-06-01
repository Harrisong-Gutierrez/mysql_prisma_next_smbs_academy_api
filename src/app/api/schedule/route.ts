import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';

export async function GET() {
    const schedules = await prisma.schedule.findMany();
    return NextResponse.json(schedules);
}

export async function POST(request: Request) {
    const { coach_id, topic_id, schedule_time, schedule_day, schedule_location } = await request.json();

    const newSchedule = await prisma.schedule.create({
        data: {
            coach_id,
            topic_id,
            schedule_time,
            schedule_day,
            schedule_location,
        },
    });

    return NextResponse.json(newSchedule);
}

export async function PUT(request: Request) {
    const { schedule_id, coach_id, topic_id, schedule_time, schedule_day, schedule_location } = await request.json();

    const updatedSchedule = await prisma.schedule.update({
        where: {
            schedule_id,
        },
        data: {
            coach_id,
            topic_id,
            schedule_time,
            schedule_day,
            schedule_location,
        },
    });

    return NextResponse.json(updatedSchedule);
}

export async function DELETE(request: Request) {
    const { schedule_id } = await request.json();

    const deletedSchedule = await prisma.schedule.delete({
        where: {
            schedule_id,
        },
    });

    return NextResponse.json(deletedSchedule);
}
