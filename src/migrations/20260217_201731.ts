import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_forms_blocks_phone_default_country" AS ENUM('GB', 'US', 'BD', 'INTL');
  CREATE TABLE IF NOT EXISTS "forms_blocks_phone" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"placeholder" varchar DEFAULT '+44 7911 123456',
  	"default_country" "enum_forms_blocks_phone_default_country" DEFAULT 'GB',
  	"required" boolean DEFAULT false,
  	"width" numeric,
  	"block_name" varchar
  );
  
  ALTER TABLE "email_sender" ALTER COLUMN "from_name" SET DEFAULT 'Third Bracket Limited';
  ALTER TABLE "email_sender" ALTER COLUMN "from_email" SET DEFAULT 'no-reply@thirdbracket.co.uk';
  ALTER TABLE "email_sender" ALTER COLUMN "reply_to" SET DEFAULT 'hello@thirdbracket.co.uk';
  ALTER TABLE "email_sender" ALTER COLUMN "to" SET DEFAULT 'sagarmusabbir@gmail.com';
  ALTER TABLE "email_sender" ALTER COLUMN "subject" SET DEFAULT 'Did you just forgot to set a subject?';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_from_name" SET DEFAULT 'Third Bracket Limited';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_from_email" SET DEFAULT 'no-reply@thirdbracket.co.uk';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_reply_to" SET DEFAULT 'hello@thirdbracket.co.uk';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_to" SET DEFAULT 'sagarmusabbir@gmail.com';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_subject" SET DEFAULT 'Did you just forgot to set a subject?';
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_phone" ADD CONSTRAINT "forms_blocks_phone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "forms_blocks_phone_order_idx" ON "forms_blocks_phone" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_phone_parent_id_idx" ON "forms_blocks_phone" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_phone_path_idx" ON "forms_blocks_phone" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "forms_blocks_phone" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "forms_blocks_phone" CASCADE;
  ALTER TABLE "email_sender" ALTER COLUMN "from_name" SET DEFAULT 'S M A Musabbir Sagar';
  ALTER TABLE "email_sender" ALTER COLUMN "from_email" SET DEFAULT 'musabbir@thirdbracket.co.uk';
  ALTER TABLE "email_sender" ALTER COLUMN "reply_to" DROP DEFAULT;
  ALTER TABLE "email_sender" ALTER COLUMN "to" SET DEFAULT 'sma.musabbir@gmail.com';
  ALTER TABLE "email_sender" ALTER COLUMN "subject" SET DEFAULT 'Default Subject';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_from_name" SET DEFAULT 'S M A Musabbir Sagar';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_from_email" SET DEFAULT 'musabbir@thirdbracket.co.uk';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_reply_to" DROP DEFAULT;
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_to" SET DEFAULT 'sma.musabbir@gmail.com';
  ALTER TABLE "_email_sender_v" ALTER COLUMN "version_subject" SET DEFAULT 'Default Subject';
  DROP TYPE "public"."enum_forms_blocks_phone_default_country";`)
}
