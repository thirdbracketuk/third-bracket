import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "work_populated_agency" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_version_populated_agency" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  ALTER TABLE "work" ADD COLUMN "github" varchar;
  ALTER TABLE "work" ADD COLUMN "behance" varchar;
  ALTER TABLE "work" ADD COLUMN "live_website" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_github" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_behance" varchar;
  ALTER TABLE "_work_v" ADD COLUMN "version_live_website" varchar;
  DO $$ BEGIN
   ALTER TABLE "work_populated_agency" ADD CONSTRAINT "work_populated_agency_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_version_populated_agency" ADD CONSTRAINT "_work_v_version_populated_agency_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "work_populated_agency_order_idx" ON "work_populated_agency" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "work_populated_agency_parent_id_idx" ON "work_populated_agency" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_agency_order_idx" ON "_work_v_version_populated_agency" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_agency_parent_id_idx" ON "_work_v_version_populated_agency" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "work_populated_agency" CASCADE;
  DROP TABLE "_work_v_version_populated_agency" CASCADE;
  ALTER TABLE "work" DROP COLUMN IF EXISTS "github";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "behance";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "live_website";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_github";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_behance";
  ALTER TABLE "_work_v" DROP COLUMN IF EXISTS "version_live_website";`)
}
