-- CreateEnum
CREATE TYPE "SexeUtilisateur" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "Binome" (
    "id" SERIAL NOT NULL,
    "etudaint1Id" INTEGER NOT NULL,
    "etudaint2Id" INTEGER,

    CONSTRAINT "Binome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etudaint" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "matricul" TEXT NOT NULL,
    "sexe" "SexeUtilisateur" NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Etudaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Binome_etudaint1Id_key" ON "Binome"("etudaint1Id");

-- CreateIndex
CREATE UNIQUE INDEX "Binome_etudaint2Id_key" ON "Binome"("etudaint2Id");

-- CreateIndex
CREATE UNIQUE INDEX "Etudaint_email_key" ON "Etudaint"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Etudaint_matricul_key" ON "Etudaint"("matricul");

-- CreateIndex
CREATE UNIQUE INDEX "Emails_email_key" ON "Emails"("email");

-- AddForeignKey
ALTER TABLE "Binome" ADD CONSTRAINT "Binome_etudaint1Id_fkey" FOREIGN KEY ("etudaint1Id") REFERENCES "Etudaint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Binome" ADD CONSTRAINT "Binome_etudaint2Id_fkey" FOREIGN KEY ("etudaint2Id") REFERENCES "Etudaint"("id") ON DELETE SET NULL ON UPDATE CASCADE;
