import { prisma } from '../config';

export async function isUserEnrolled(userId: number) {
  try {
    return await prisma.enrollment.findFirst({ where: { userId } });
  } catch (error) {
    throw new Error('Internal Server Error');
  }
}

export async function hasUserTicket(enrollmentId: number) {
  try {
    return await prisma.ticket.findFirst({ where: { enrollmentId } });
  } catch (error) {
    throw new Error('Internal Server Error');
  }
}
