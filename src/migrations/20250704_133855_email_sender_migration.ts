import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_email_sender_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__email_sender_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "email_sender" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from_name" varchar DEFAULT 'S M A Musabbir Sagar',
  	"from_email" varchar DEFAULT 'musabbir@thirdbracket.co.uk',
  	"reply_to" varchar,
  	"to" varchar DEFAULT 'sma.musabbir@gmail.com',
  	"cc" varchar,
  	"bcc" varchar,
  	"subject" varchar DEFAULT 'Default Subject',
  	"html" varchar,
  	"sent" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_email_sender_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "_email_sender_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_from_name" varchar DEFAULT 'S M A Musabbir Sagar',
  	"version_from_email" varchar DEFAULT 'musabbir@thirdbracket.co.uk',
  	"version_reply_to" varchar,
  	"version_to" varchar DEFAULT 'sma.musabbir@gmail.com',
  	"version_cc" varchar,
  	"version_bcc" varchar,
  	"version_subject" varchar DEFAULT 'Default Subject',
  	"version_html" varchar,
  	"version_sent" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__email_sender_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "email_sender_id" integer;
  DO $$ BEGIN
   ALTER TABLE "_email_sender_v" ADD CONSTRAINT "_email_sender_v_parent_id_email_sender_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."email_sender"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "email_sender_updated_at_idx" ON "email_sender" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "email_sender_created_at_idx" ON "email_sender" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "email_sender__status_idx" ON "email_sender" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_parent_idx" ON "_email_sender_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_version_version_updated_at_idx" ON "_email_sender_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_version_version_created_at_idx" ON "_email_sender_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_version_version__status_idx" ON "_email_sender_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_created_at_idx" ON "_email_sender_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_updated_at_idx" ON "_email_sender_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_email_sender_v_latest_idx" ON "_email_sender_v" USING btree ("latest");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_email_sender_fk" FOREIGN KEY ("email_sender_id") REFERENCES "public"."email_sender"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_email_sender_id_idx" ON "payload_locked_documents_rels" USING btree ("email_sender_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "email_sender" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_email_sender_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "email_sender" CASCADE;
  DROP TABLE "_email_sender_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_email_sender_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_email_sender_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "email_sender_id";
  DROP TYPE "public"."enum_email_sender_status";
  DROP TYPE "public"."enum__email_sender_v_version_status";`)
}
