CREATE TABLE "pet" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"owner_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pet_search" (
	"id" text PRIMARY KEY NOT NULL,
	"pet_id" text NOT NULL,
	"status" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pet_sighting" (
	"id" text PRIMARY KEY NOT NULL,
	"pet_search_id" text NOT NULL,
	"lat" numeric NOT NULL,
	"lng" numeric NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pet" ADD CONSTRAINT "pet_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pet_search" ADD CONSTRAINT "pet_search_pet_id_pet_id_fk" FOREIGN KEY ("pet_id") REFERENCES "public"."pet"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pet_sighting" ADD CONSTRAINT "pet_sighting_pet_search_id_pet_search_id_fk" FOREIGN KEY ("pet_search_id") REFERENCES "public"."pet_search"("id") ON DELETE cascade ON UPDATE no action;