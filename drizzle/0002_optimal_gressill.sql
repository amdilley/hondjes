ALTER TABLE "pet" ADD COLUMN "image_url" text;--> statement-breakpoint
ALTER TABLE "pet" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "pet" ADD COLUMN "updated_at" timestamp NOT NULL;