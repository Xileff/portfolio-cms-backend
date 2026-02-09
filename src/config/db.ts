import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client'
import env from './env';

const pool = new Pool({ connectionString: env.dbUrl });
const adapter = new PrismaPg(pool);

const prismaClient = new PrismaClient({ adapter });

export { prismaClient };