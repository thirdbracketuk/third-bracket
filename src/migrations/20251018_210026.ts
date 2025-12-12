import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_archive_relation_to" ADD VALUE 'blog';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_relation_to" ADD VALUE 'blog';
  ALTER TABLE "pages_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "redirects_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "search_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "blog_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_blog_id_idx" ON "pages_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_blog_id_idx" ON "_pages_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_blog_id_idx" ON "redirects_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "search_rels_blog_id_idx" ON "search_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "header_rels_blog_id_idx" ON "header_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_blog_id_idx" ON "footer_rels" USING btree ("blog_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_blog_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_blog_fk";
  
  ALTER TABLE "redirects_rels" DROP CONSTRAINT "redirects_rels_blog_fk";
  
  ALTER TABLE "search_rels" DROP CONSTRAINT "search_rels_blog_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_blog_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_blog_fk";
  
  DROP INDEX IF EXISTS "pages_rels_blog_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_blog_id_idx";
  DROP INDEX IF EXISTS "redirects_rels_blog_id_idx";
  DROP INDEX IF EXISTS "search_rels_blog_id_idx";
  DROP INDEX IF EXISTS "header_rels_blog_id_idx";
  DROP INDEX IF EXISTS "footer_rels_blog_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "redirects_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "search_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "footer_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum_pages_blocks_archive_relation_to" USING "relation_to"::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum__pages_v_blocks_archive_relation_to" USING "relation_to"::"public"."enum__pages_v_blocks_archive_relation_to";`)
}
