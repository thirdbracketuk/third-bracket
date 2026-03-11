import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "work_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stat" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_version_outcomes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"stat" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "work" ADD COLUMN "tagline" varchar;
  ALTER TABLE "work" ADD COLUMN "mobile_image_id" integer;
  ALTER TABLE "work" ADD COLUMN "accent_color" varchar DEFAULT '#bc3a5b';
  ALTER TABLE "_work_v" ADD COLUMN "version_tagline" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_mobile_image_id" integer;
  ALTER TABLE "_work_v" ADD COLUMN "version_accent_color" varchar DEFAULT '#bc3a5b';
  DO $$ BEGIN
   ALTER TABLE "work_outcomes" ADD CONSTRAINT "work_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_version_outcomes" ADD CONSTRAINT "_work_v_version_outcomes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "work_outcomes_order_idx" ON "work_outcomes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "work_outcomes_parent_id_idx" ON "work_outcomes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_outcomes_order_idx" ON "_work_v_version_outcomes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_work_v_version_outcomes_parent_id_idx" ON "_work_v_version_outcomes" USING btree ("_parent_id");
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_mobile_image_id_media_id_fk" FOREIGN KEY ("version_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "work_mobile_image_idx" ON "work" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_mobile_image_idx" ON "_work_v" USING btree ("version_mobile_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "work_outcomes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_work_v_version_outcomes" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "work_outcomes" CASCADE;
  DROP TABLE "_work_v_version_outcomes" CASCADE;
  ALTER TABLE "work" DROP CONSTRAINT "work_mobile_image_id_media_id_fk";
  
  ALTER TABLE "_work_v" DROP CONSTRAINT "_work_v_version_mobile_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "work_mobile_image_idx";
  DROP INDEX IF EXISTS "_work_v_version_version_mobile_image_idx";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "tagline";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "mobile_image_id";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "accent_color";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_tagline";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_mobile_image_id";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_accent_color";`)
}
