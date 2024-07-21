-- CreateEnum
CREATE TYPE "AppointmentType" AS ENUM ('Training', 'Match', 'WeeklyMatch', 'Meeting', 'OTHER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Player', 'Admin', 'Superuser');

-- CreateEnum
CREATE TYPE "Marjor" AS ENUM ('IT', 'DSBA', 'BIT', 'AIT', 'OTHER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Playing', 'Retired', 'Disappeared', 'Unknown');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwored" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "extra_info" JSONB,
    "role" "Role" NOT NULL DEFAULT 'Admin',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3),

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nick_name" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 1,
    "major" "Marjor" NOT NULL DEFAULT 'IT',
    "remark" TEXT,
    "status" "Status" NOT NULL DEFAULT 'Playing',
    "positions" TEXT[],
    "level" INTEGER NOT NULL DEFAULT 1,
    "last_join" TIMESTAMP(3),

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "type" "AppointmentType" NOT NULL,
    "location" TEXT NOT NULL,
    "map_uri" "Status",
    "admin_id" INTEGER NOT NULL,
    "remark" "Status",

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentTeams" (
    "id" SERIAL NOT NULL,
    "method" INTEGER NOT NULL DEFAULT 1,
    "appointment_id" INTEGER NOT NULL,

    CONSTRAINT "AppointmentTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogEvents" (
    "id" SERIAL NOT NULL,
    "log" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogEvents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AppointmentJoin" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentTeams_appointment_id_key" ON "AppointmentTeams"("appointment_id");

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentJoin_AB_unique" ON "_AppointmentJoin"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentJoin_B_index" ON "_AppointmentJoin"("B");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentTeams" ADD CONSTRAINT "AppointmentTeams_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentJoin" ADD CONSTRAINT "_AppointmentJoin_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentJoin" ADD CONSTRAINT "_AppointmentJoin_B_fkey" FOREIGN KEY ("B") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
