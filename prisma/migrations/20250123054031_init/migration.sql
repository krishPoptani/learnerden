-- CreateTable
CREATE TABLE "ContactUs" (
    "id" SERIAL NOT NULL,
    "phone" TEXT[],
    "email" TEXT[],
    "address" TEXT NOT NULL,
    "facebookLink" TEXT,
    "twitterLink" TEXT,
    "linkedinLink" TEXT,
    "instagramLink" TEXT,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);
