import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_work_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__work_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'publisher');
  ALTER TYPE "public"."enum_pages_blocks_archive_relation_to" ADD VALUE 'blog';
  ALTER TYPE "public"."enum_pages_blocks_archive_relation_to" ADD VALUE 'work';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_relation_to" ADD VALUE 'blog';
  ALTER TYPE "public"."enum__pages_v_blocks_archive_relation_to" ADD VALUE 'work';
  CREATE TABLE IF NOT EXISTS "blog_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blog" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blog_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "blog_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_blog_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "work_populated_agency" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "work" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"github" varchar,
  	"behance" varchar,
  	"live_website" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_work_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "work_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"categories_id" integer,
  	"technologies_id" integer,
  	"work_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_version_populated_agency" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_completed_at" timestamp(3) with time zone,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_github" varchar,
  	"version_behance" varchar,
  	"version_live_website" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__work_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"categories_id" integer,
  	"technologies_id" integer,
  	"work_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "technologies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "pages_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "media" ADD COLUMN "uploaded_by_id" integer;
  ALTER TABLE "users" ADD COLUMN "avatar_id" integer;
  ALTER TABLE "users" ADD COLUMN "role" "enum_users_role" DEFAULT 'publisher' NOT NULL;
  ALTER TABLE "redirects_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "redirects_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "search_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "search_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "technologies_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "work_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "blog_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "work_id" integer;
  DO $$ BEGIN
   ALTER TABLE "blog_populated_authors" ADD CONSTRAINT "blog_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog" ADD CONSTRAINT "blog_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blog_rels" ADD CONSTRAINT "blog_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_version_populated_authors" ADD CONSTRAINT "_blog_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_parent_id_blog_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v" ADD CONSTRAINT "_blog_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_blog_v_rels" ADD CONSTRAINT "_blog_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_populated_agency" ADD CONSTRAINT "work_populated_agency_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_version_populated_agency" ADD CONSTRAINT "_work_v_version_populated_agency_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_parent_id_work_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "blog_populated_authors_order_idx" ON "blog_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blog_populated_authors_parent_id_idx" ON "blog_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blog_hero_image_idx" ON "blog" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "blog_meta_meta_image_idx" ON "blog" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "blog_slug_idx" ON "blog" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_updated_at_idx" ON "blog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_created_at_idx" ON "blog" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "blog__status_idx" ON "blog" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "blog_rels_order_idx" ON "blog_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blog_rels_parent_idx" ON "blog_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_path_idx" ON "blog_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blog_rels_blog_id_idx" ON "blog_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_categories_id_idx" ON "blog_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "blog_rels_users_id_idx" ON "blog_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_populated_authors_order_idx" ON "_blog_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_populated_authors_parent_id_idx" ON "_blog_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_parent_idx" ON "_blog_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_hero_image_idx" ON "_blog_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_meta_version_meta_image_idx" ON "_blog_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_slug_idx" ON "_blog_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_updated_at_idx" ON "_blog_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version_created_at_idx" ON "_blog_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_version_version__status_idx" ON "_blog_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_blog_v_created_at_idx" ON "_blog_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_updated_at_idx" ON "_blog_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_blog_v_latest_idx" ON "_blog_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_blog_v_autosave_idx" ON "_blog_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_order_idx" ON "_blog_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_parent_idx" ON "_blog_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_path_idx" ON "_blog_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_blog_id_idx" ON "_blog_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_categories_id_idx" ON "_blog_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_blog_v_rels_users_id_idx" ON "_blog_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "work_populated_agency_order_idx" ON "work_populated_agency" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "work_populated_agency_parent_id_idx" ON "work_populated_agency" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "work_hero_image_idx" ON "work" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "work_meta_meta_image_idx" ON "work" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "work_slug_idx" ON "work" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "work_updated_at_idx" ON "work" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "work_created_at_idx" ON "work" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "work__status_idx" ON "work" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "work_rels_order_idx" ON "work_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "work_rels_parent_idx" ON "work_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "work_rels_path_idx" ON "work_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "work_rels_users_id_idx" ON "work_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "work_rels_categories_id_idx" ON "work_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "work_rels_technologies_id_idx" ON "work_rels" USING btree ("technologies_id");
  CREATE INDEX IF NOT EXISTS "work_rels_work_id_idx" ON "work_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_agency_order_idx" ON "_work_v_version_populated_agency" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_agency_parent_id_idx" ON "_work_v_version_populated_agency" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_parent_idx" ON "_work_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_hero_image_idx" ON "_work_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_meta_version_meta_image_idx" ON "_work_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_slug_idx" ON "_work_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_updated_at_idx" ON "_work_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_created_at_idx" ON "_work_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version__status_idx" ON "_work_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_work_v_created_at_idx" ON "_work_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_updated_at_idx" ON "_work_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_latest_idx" ON "_work_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_work_v_autosave_idx" ON "_work_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_order_idx" ON "_work_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_parent_idx" ON "_work_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_path_idx" ON "_work_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_users_id_idx" ON "_work_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_categories_id_idx" ON "_work_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_technologies_id_idx" ON "_work_v_rels" USING btree ("technologies_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_work_id_idx" ON "_work_v_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "technologies_updated_at_idx" ON "technologies" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "technologies_created_at_idx" ON "technologies" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media" ADD CONSTRAINT "media_uploaded_by_id_users_id_fk" FOREIGN KEY ("uploaded_by_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_technologies_fk" FOREIGN KEY ("technologies_id") REFERENCES "public"."technologies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_blog_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_blog_id_idx" ON "pages_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_work_id_idx" ON "pages_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_blog_id_idx" ON "_pages_v_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_work_id_idx" ON "_pages_v_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "media_uploaded_by_idx" ON "media" USING btree ("uploaded_by_id");
  CREATE INDEX IF NOT EXISTS "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_blog_id_idx" ON "redirects_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_work_id_idx" ON "redirects_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "search_rels_blog_id_idx" ON "search_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "search_rels_work_id_idx" ON "search_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_work_id_idx" ON "payload_locked_documents_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_technologies_id_idx" ON "payload_locked_documents_rels" USING btree ("technologies_id");
  CREATE INDEX IF NOT EXISTS "header_rels_blog_id_idx" ON "header_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "header_rels_work_id_idx" ON "header_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_blog_id_idx" ON "footer_rels" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_work_id_idx" ON "footer_rels" USING btree ("work_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blog_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blog_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v_version_populated_authors" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "work_populated_agency" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "work" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "work_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_work_v_version_populated_agency" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_work_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_work_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "technologies" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blog_populated_authors" CASCADE;
  DROP TABLE "blog" CASCADE;
  DROP TABLE "blog_rels" CASCADE;
  DROP TABLE "_blog_v_version_populated_authors" CASCADE;
  DROP TABLE "_blog_v" CASCADE;
  DROP TABLE "_blog_v_rels" CASCADE;
  DROP TABLE "work_populated_agency" CASCADE;
  DROP TABLE "work" CASCADE;
  DROP TABLE "work_rels" CASCADE;
  DROP TABLE "_work_v_version_populated_agency" CASCADE;
  DROP TABLE "_work_v" CASCADE;
  DROP TABLE "_work_v_rels" CASCADE;
  DROP TABLE "technologies" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_blog_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_work_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_blog_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_work_fk";
  
  ALTER TABLE "media" DROP CONSTRAINT "media_uploaded_by_id_users_id_fk";
  
  ALTER TABLE "users" DROP CONSTRAINT "users_avatar_id_media_id_fk";
  
  ALTER TABLE "redirects_rels" DROP CONSTRAINT "redirects_rels_blog_fk";
  
  ALTER TABLE "redirects_rels" DROP CONSTRAINT "redirects_rels_work_fk";
  
  ALTER TABLE "search_rels" DROP CONSTRAINT "search_rels_blog_fk";
  
  ALTER TABLE "search_rels" DROP CONSTRAINT "search_rels_work_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blog_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_work_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_technologies_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_blog_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_work_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_blog_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_work_fk";
  
  DROP INDEX IF EXISTS "pages_rels_blog_id_idx";
  DROP INDEX IF EXISTS "pages_rels_work_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_blog_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_work_id_idx";
  DROP INDEX IF EXISTS "media_uploaded_by_idx";
  DROP INDEX IF EXISTS "users_avatar_idx";
  DROP INDEX IF EXISTS "redirects_rels_blog_id_idx";
  DROP INDEX IF EXISTS "redirects_rels_work_id_idx";
  DROP INDEX IF EXISTS "search_rels_blog_id_idx";
  DROP INDEX IF EXISTS "search_rels_work_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_blog_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_work_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_technologies_id_idx";
  DROP INDEX IF EXISTS "header_rels_blog_id_idx";
  DROP INDEX IF EXISTS "header_rels_work_id_idx";
  DROP INDEX IF EXISTS "footer_rels_blog_id_idx";
  DROP INDEX IF EXISTS "footer_rels_work_id_idx";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "uploaded_by_id";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "avatar_id";
  ALTER TABLE "users" DROP COLUMN IF EXISTS "role";
  ALTER TABLE "redirects_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "redirects_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "search_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "search_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "technologies_id";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "footer_rels" DROP COLUMN IF EXISTS "blog_id";
  ALTER TABLE "footer_rels" DROP COLUMN IF EXISTS "work_id";
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum_pages_blocks_archive_relation_to" USING "relation_to"::"public"."enum_pages_blocks_archive_relation_to";
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "relation_to" SET DATA TYPE "public"."enum__pages_v_blocks_archive_relation_to" USING "relation_to"::"public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum_blog_status";
  DROP TYPE "public"."enum__blog_v_version_status";
  DROP TYPE "public"."enum_work_status";
  DROP TYPE "public"."enum__work_v_version_status";
  DROP TYPE "public"."enum_users_role";`)
}
